# Copyright (C) 2016 Google Inc., authors, and contributors
# Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>

from sqlalchemy.orm import validates

from ggrc import db
from .mixins import deferred, BusinessObject, Timeboxed, CustomAttributable
from .object_document import Documentable
from .object_owner import Ownable
from .object_person import Personable
from .option import Option
from .relationship import Relatable
from .utils import validate_option
from .track_object_state import HasObjectState, track_state_for_class


class SystemOrProcess(HasObjectState, Timeboxed, BusinessObject, db.Model):
  # Override model_inflector
  _table_plural = 'systems_or_processes'
  __tablename__ = 'systems'

  infrastructure = deferred(db.Column(db.Boolean), 'SystemOrProcess')
  is_biz_process = db.Column(db.Boolean, default=False)
  version = deferred(db.Column(db.String), 'SystemOrProcess')
  network_zone_id = deferred(db.Column(db.Integer), 'SystemOrProcess')
  network_zone = db.relationship(
      'Option',
      primaryjoin='and_(foreign(SystemOrProcess.network_zone_id) == Option.id, '\
                       'Option.role == "network_zone")',
      uselist=False,
  )

  __mapper_args__ = {
      'polymorphic_on': is_biz_process
  }

  # REST properties
  _publish_attrs = [
      'infrastructure',
      'is_biz_process',
      'version',
      'network_zone',
  ]
  _update_attrs = [
      'infrastructure',
      'version',
      'network_zone',
  ]
  _sanitize_html = ['version']
  _aliases = {
      "network_zone": {
        "display_name": "Network Zone",
        "filter_by": "_filter_by_network_zone",
      },
  }

  @validates('network_zone')
  def validate_system_options(self, key, option):
    return validate_option(
        self.__class__.__name__, key, option, 'network_zone')

  @classmethod
  def _filter_by_network_zone(cls, predicate):
    return Option.query.filter(
        (Option.id == cls.network_zone_id) & predicate(Option.title)
    ).exists()

  @classmethod
  def eager_query(cls):
    from sqlalchemy import orm

    query = super(SystemOrProcess, cls).eager_query()
    return query.options(
        orm.joinedload('network_zone'))

  @staticmethod
  def _extra_table_args(cls):
    return (
        db.Index('ix_{}_is_biz_process'.format(cls.__tablename__),
                 'is_biz_process'),
    )

track_state_for_class(SystemOrProcess)


class System(CustomAttributable, Documentable, Personable,
             Relatable, Ownable, SystemOrProcess):
  __mapper_args__ = {
      'polymorphic_identity': False
  }
  _table_plural = 'systems'

  _aliases = {"url": "System URL"}

  @validates('is_biz_process')
  def validates_is_biz_process(self, key, value):
    return False


class Process(CustomAttributable, Documentable, Personable,
              Relatable, Ownable, SystemOrProcess):
  __mapper_args__ = {
      'polymorphic_identity': True
  }
  _table_plural = 'processes'

  _aliases = {"url": "Process URL"}

  @validates('is_biz_process')
  def validates_is_biz_process(self, key, value):
    return True
