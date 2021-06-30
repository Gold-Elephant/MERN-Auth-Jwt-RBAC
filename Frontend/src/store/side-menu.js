const state = () => {
  return {
    menu: [
      {
        icon: "LayoutIcon",
        pageName: "church_info",
        title: "Church Info"
      },
      "devider",
      {
        icon: "TrelloIcon",
        pageName: "admin",
        title: "Admin",
        subMenu: [
          {
            icon: "UsersIcon",
            pageName: "Users_management",
            title: "Users Management",
            accessId: 1
          },
          {
            icon: "LayoutIcon",
            pageName: "Role Management",
            title: "Role Management",
            accessId: 2
          },
          {
            icon: "InboxIcon",
            pageName: "Access Management",
            title: "Access Management ",
            accessId: 3
          },
          {
            icon: "SidebarIcon",
            pageName: "Configurations ",
            title: "Configurations ",
            subMenu: [
              {
                icon: "HomeIcon",
                pageName: "Regions",
                title: "Regions"
              },
              {
                icon: "BoxIcon",
                pageName: "Church Status",
                title: "Church Status"
              }
            ]
          }
        ]
      }
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
