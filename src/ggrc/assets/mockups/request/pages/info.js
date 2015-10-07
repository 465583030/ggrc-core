(function (GGRC) {
  GGRC.Bootstrap.Mockups = GGRC.Bootstrap.Mockups || {};
  GGRC.Bootstrap.Mockups.Request = GGRC.Bootstrap.Mockups.Request || {};

  GGRC.Bootstrap.Mockups.Request.Info = {
    title: "Info",
    icon: "grcicon-info",
    template: "/request/info.mustache",
    info_title: "My new request",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod.",
    state: "In Progress",
    people_assignee: [{
      name: "Gisele Bundchen"
    }, {
      name: "Cara Delevingne"
    }, {
      name: "Adriana Lima"
    }],
    people_requester: [{
      name: "Doutzen Kroes"
    }],
    people_verifier: [{
      name: "Prasanna V.",
    }, {
      name: "Natalia Vodianova"
    }, {
      name: "Miranda Kerr"
    }],
    created_on: "12/03/14",
    due_on: "12/31/15",
    type_a: "assignee",
    type_r: "requester",
    type_v: "verifier",
    files: [{
      icon: "zip",
      date: "09/24/2015",
      name: "Compressed_files.zip",
      url: "https://github.com/Compressed_files.zip"
    }, {
      icon: "",
      date: "09/22/2015",
      name: "simple_file.reg",
      url: "http://google.com/"
    }, {
      icon: "text",
      date: "09/21/2015",
      name: "canjs-observe-bug.txt",
      url: "http://google.com/"
    }, {
      icon: "image",
      date: "09/19/2015",
      name: "Image_of_nature.png",
      url: "http://google.com/"
    }, {
      icon: "xls",
      date: "04/18/2015",
      name: "Simple_Excel_document.xls",
      url: "http://google.com/"
    }, {
      icon: "doc",
      date: "04/15/2014",
      name: "Simple_Word_document.doc",
      url: "http://google.com/"
    }, {
      icon: "pdf",
      date: "04/05/2010",
      name: "MTV_001_SIGNED_LoginAccess_List.pdf",
      url: "http://google.com/"
    }],
    urls: [{
      icon: "url",
      date: "09/23/2015",
      name: "https://github.com/",
      url: "https://github.com/"
    }, {
      icon: "url",
      date: "09/22/2015",
      name: "https://www.google.com/?gws_rd=ssl#q=how+to+cook+salmon",
      url: "https://www.google.com/?gws_rd=ssl#q=how+to+cook+salmon"
    }, {
      icon: "url",
      date: "09/21/2015",
      name: "https://www.youtube.com/watch?v=Vr9r81O5vN8",
      url: "https://www.youtube.com/watch?v=Vr9r81O5vN8"
    }],
    comments: [{
      type: "assignee",
      author: "Albert Chan",
      date: "09/20/2015 07:31:02am PDT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus.",
      attachments: [{
        icon: "text",
        url: "http://google.com/",
        title: "canjs-observe-bug.txt"
      }, {
        icon: "pdf",
        url: "http://google.com/",
        title: "MTV_001_SIGNED_LoginAccess_List.pdf"
      }, {
        icon: "zip",
        url: "http://google.com/Compressed_files.zip",
        title: "Compressed_files.zip"
      }]
    }, {
      type: "verifier",
      author: "Prasanna V.",
      date: "08/30/2015 05:31:02am PDT",
      text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
    }, {
      type: "requester",
      author: "Jost Novljan",
      date: "07/21/2015 01:31:02pm PDT",
      text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
    }, {
      type: "assignee",
      author: "Albert Chan",
      date: "07/18/2015 03:16:02pm PDT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non mauris euismod, suscipit velit eu, imperdiet ex. Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
    }],
    logs: [{
      type: "requester",
      author: "Jost Novljan",
      log_status: "made changes",
      date: "09/19/2015 03:23:55pm PDT",
      field: "Comment",
      original_value: [{
        text: ""
      }],
      new_value: [{
        text: "See usecase here: https://docs.google.com/document/d/1kU6DgyJBOxbPX5eDhphq97dcMhg-b-LpzTJT27XlHYk/edit#heading=h.9wrhlxa3ye2d."
      }]
    }, {
      type: "verifier",
      author: "Prasanna V.",
      log_status: "made changes",
      date: "09/19/2015 05:31:02am PDT",
      field: "Comment",
      original_value: [{
        text: ""
      }],
      new_value: [{
        text: "Curabitur nisl diam, blandit in luctus ac, eleifend quis libero. Morbi in lobortis risus. Vestibulum congue dictum finibus."
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/18/2015 05:31:02am PDT",
      field: "People - Requester",
      original_value: [{
        text: "Ella Cinder"
      }],
      new_value: [{
        text: "Josh Smith"
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/14/2015 05:31:02am PDT",
      field: "Dates - Due on",
      original_value: [{
        text: "12/31/14"
      }],
      new_value: [{
        text: "12/31/15"
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/12/2015 05:31:02am PDT",
      field: "Dates - Created on",
      original_value: [{
        text: "12/03/13"
      }],
      new_value: [{
        text: "12/03/14"
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/08/2015 05:31:02am PDT",
      field: "Evidence",
      original_value: [{
        text: "",
        file_list: [{
          icon: "pdf",
          file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
        }, {
          icon: "doc",
          file_name: "Simple_Word_document.doc"
        }]
      }],
      new_value: [{
        text: "",
        file_list: [{
          icon: "pdf",
          file_name: "MTV_001_SIGNED_LoginAccess_List.pdf"
        }, {
          icon: "doc",
          file_name: "Simple_Word_document.doc"
        }, {
          icon: "xls",
          file_name: "Simple_Excel_document.xls"
        }, {
          icon: "text",
          file_name: "Some_file_from_Google_Drive.txt"
        }, {
          icon: "image",
          file_name: "Image_of_nature.png"
        }, {
          icon: "",
          file_name: "canjs-observe-bug.reg"
        }]
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/04/2015 3:30:00pm PDT",
      field: "Description",
      original_value: [{
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
      }],
      new_value: [{
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna. Sed a enim laoreet diam lacinia euismod."
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/03/2015 07:15:23am PDT",
      field: "Description",
      original_value: [{
        text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
      }],
      new_value: [{
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/03/2015 05:31:02am PDT",
      field: "Description",
      original_value: [{
        text: ""
      }],
      new_value: [{
        text: "Cras vitae ante dapibus lacus dictum vestibulum. Nullam finibus semper convallis. Ut libero mauris, viverra nec augue eget, congue viverra felis. Aenean ut arcu vel tortor rhoncus dictum id vel urna."
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "made changes",
      date: "09/02/2015 09:00:12am PDT",
      field: "State",
      original_value: [{
        text: "Draft"
      }],
      new_value: [{
        text: "In progress"
      }]
    }, {
      type: "assignee",
      author: "Albert Chan",
      log_status: "created request",
      date: "09/01/2015 11:07:35am PDT",
      field: "",
      original_value: [{
        text: ""
      }],
      new_value: [{
        text: ""
      }]
    }],
    mapped_objects: [{
      icon: "objective",
      title: "090.7068 objective 1",
      state: "Draft",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
    }, {
      icon: "control",
      title: "Access to the Private Network with expired Key v0906984",
      state: "In Progress",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
    }, {
      icon: "regulation",
      title: "a regulation object",
      state: "In Progress",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum sem id lectus porta, eu rutrum nunc commodo."
    }],
    past_requests: [{
      date: "26/09/2015",
      title: "My new request lorem ipsum dolor sit amet consectetur adipiscing elit morbi et turpis et arcu viverra posuere in et sapien",
      past_requests_files: [{
        icon: "pdf",
        name: "MTV_001_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }, {
        icon: "pdf",
        name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }, {
        icon: "pdf",
        name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }]
    }, {
      date: "20/09/2015",
      title: "My new request",
      past_requests_files: [{
        icon: "pdf",
        name: "MTV_001_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }, {
        icon: "pdf",
        name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }, {
        icon: "pdf",
        name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }]
    }, {
      date: "10/09/2015",
      title: "My new request",
      past_requests_files: [{
        icon: "pdf",
        name: "MTV_001_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }, {
        icon: "pdf",
        name: "MTV_aug_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }, {
        icon: "pdf",
        name: "MTV_sep_SIGNED_LoginAccess_List.pdf",
        date: "10/09/2015",
        url: "http://www.happy-day.com"
      }]
    }]
  };
})(GGRC || {});
