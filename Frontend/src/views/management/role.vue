<template>
  <div>
    <h1 class="intro-y text-2xl font-medium mt-10 text-center">
      Role Management Table
    </h1>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
      >
        <div
          class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0 sdfsfsfsdf"
        >
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              id="myInput"
              type="text"
              class="form-control w-56 box pr-10 placeholder-theme-8"
              placeholder="Search..."
              @keyup="filterFunction()"
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12">
        <table class="table border-collapse table-report table-bordered -mt-2">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="text-center w-1/6">No</th>
              <th class="text-center w-1/6">UserName</th>
              <th class="text-center w-2/6">Email</th>
              <th class="text-center w-2/6">Role_manage</th>
              <th v-if="permission == 2" class="text-center w-1/6">
                Change
              </th>
            </tr>
          </thead>
          <tbody id="myTable">
            <tr v-for="(data, index) in resData" :key="index" class="intro-x">
              <td class="text-center">{{ index + 1 }}</td>
              <td class="text-center">{{ data.userName }}</td>
              <td>{{ data.email }}</td>
              <td class="text-center">
                <select class="form-select" @change="btnActive($event.target)">
                  <option value="1" :selected="data.roleId == 1"
                    >Super Admin</option
                  >
                  <option value="2" :selected="data.roleId == 2"
                    >Nomal Admin</option
                  >
                  <option value="3" :selected="data.roleId == 3">User</option>
                </select>
              </td>
              <td v-if="permission == 2">
                <button
                  class="bg-green-500 text-white font-bold py-2 px-4 rounded opacity-30 cursor-not-allowed"
                  disabled
                  @click="stateChange(index, $event.target)"
                >
                  Change
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
      >
        <ul class="pagination">
          <li>
            <a class="pagination__link" href="#">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="#">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link pagination__link--active" href="#">1</a>
          </li>
          <li>
            <a class="pagination__link" href="#">2</a>
          </li>
          <li>
            <a class="pagination__link" href="#">3</a>
          </li>
          <li>
            <a class="pagination__link" href="#">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="#">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
        <select class="w-20 form-select box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
  </div>
</template>
<script>
import VueCookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        userName: "",
        email: "",
        roleId: "",
        btnState: -1,
        role_value: "",
        userId: ""
      },
      resData: [],
      permission: -1,
      accessId: 2
    };
  },
  mounted() {
    const info = VueCookies.get("info");
    new Promise((resolve, reject) => {
      axios
        .post(process.env.VUE_APP_ROOT_API + "/v1/private/user/readInfo", {
          token: info.tokens.accessToken.token
        })
        .then(response => {
          this.resData = response.data;
        })
        .catch(e => {
          reject(e);
        });
    });
    this.getRoleData();
  },
  methods: {
    getRoleData() {
      const roleData = JSON.parse(localStorage.getItem("info")).roleData;
      for (let i = 0; i < roleData.length; i++) {
        if (roleData[i].accessId == this.accessId)
          this.permission = roleData[i].permission;
      }
    },
    btnActive(e) {
      this.role_value = e.value;
      var btn = e.parentElement.parentElement.children[4].children[0];
      btn.classList.remove("opacity-30");
      btn.classList.remove("cursor-not-allowed");
      btn.removeAttribute("disabled");
    },
    stateChange(index, btn) {
      if (this.role_value) {
        const info = VueCookies.get("info");
        new Promise((resolve, reject) => {
          axios
            .post(process.env.VUE_APP_ROOT_API + "/v1/private/role/update", {
              token: info.tokens.accessToken.token,
              id: this.resData[index].id,
              role_value: this.role_value
            })
            .then(() => {
              btn.classList.add("opacity-30");
              btn.classList.add("cursor-not-allowed");
              btn.setAttribute("disabled", "");
              // this.resData = response.data;
            })
            .catch(e => {
              reject(e);
            });
        });
      } else {
        console.log("onnono");
      }
    }
  }
};
</script>
