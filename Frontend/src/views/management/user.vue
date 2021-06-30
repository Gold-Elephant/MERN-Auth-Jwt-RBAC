<template>
  <div>
    <h1 class="intro-y text-2xl font-medium mt-10 text-center">
      Users Management Table
    </h1>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
      >
        <a
          v-if="permission == 2"
          id="addUser"
          href="javascript:;"
          class="btn btn-primary shadow-md mr-2"
          data-toggle="modal"
          data-target="#header-footer-modal-preview"
          @click="removeData()"
        >
          + Add New User
        </a>
        <div class="hidden md:block mx-auto text-gray-600"></div>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
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
      <div class="intro-y col-span-12 overflow-auto">
        <table class="table border-collapse table-report -mt-2 overflow-auto">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="text-center">First Name</th>
              <th class="text-center">Last Name</th>
              <th class="text-center">UserName</th>
              <th class="text-center w-4/30">Email</th>
              <th class="text-center w-4/30">Mobile Number</th>
              <th class="text-center">Device</th>
              <th class="text-center">Last Login</th>
              <th class="text-center">Created Date</th>
              <th class="text-center w-1/30">Status</th>
              <th v-if="permission == 2" class="text-center w-1/30">
                Actions
              </th>
            </tr>
          </thead>
          <tbody id="myTable">
            <tr v-for="(data, index) in resData" :key="index" class="intro-x">
              <td class="text-center">
                {{ data.firstName }}
              </td>
              <td>
                {{ data.lastName }}
              </td>
              <td class="text-center">{{ data.userName }}</td>
              <td class="text-center">{{ data.email }}</td>
              <td class="text-center">{{ data.mobileNumber }}</td>
              <td class="text-center">{{ data.device }}</td>
              <td v-if="data.lastLogin" class="text-center">
                {{ data.lastLogin.slice(0, 10) }}
              </td>
              <td v-else class="text-center">{{ data.lastLogin }}</td>
              <td class="text-center">{{ data.createdAt.slice(0, 10) }}</td>
              <td class="text-center">
                <!-- <div
                  class="flex items-center justify-center"
                  :class="{
                    'text-theme-24': data.trueFalse[0],
                    'text-theme-10': !data.trueFalse[0]
                  }"
                > -->
                <CheckSquareIcon class="w-4 h-4 mr-2" />
                <!-- {{ data.trueFalse[0] ? "Act" : "InAct" }} -->
                <!-- </div> -->
              </td>
              <td v-if="permission == 2" class="table-report__action">
                <div class="flex justify-center items-center">
                  <a
                    class="flex items-center mr-3"
                    href="javascript:;"
                    @click.prevent="updateModal(index)"
                  >
                    <EditIcon class="w-4 h-4 mr-1 text-green-400" />
                  </a>
                  <a
                    class="flex items-center text-theme-24"
                    href="javascript:;"
                    data-toggle="modal"
                    data-target="#delete-confirmation-modal"
                    @click="openDeleteModal(index)"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" />
                  </a>
                </div>
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
    <!-- BEGIN: Modal Content -->
    <div
      id="header-footer-modal-preview"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <form class="modal-content" @submit.prevent="Register">
          <!-- BEGIN: Modal Header -->
          <div class="modal-header">
            <h2 class="font-medium text-base mr-auto">
              <span v-show="activeIndex == -1">Register</span
              ><span v-show="activeIndex != -1">Update</span>User
            </h2>
          </div>
          <!-- END: Modal Header -->
          <!-- BEGIN: Modal Body -->
          <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-1" class="form-label">FirsName</label>
              <input
                v-model="userInfo.firstName"
                type="text"
                class="form-control"
                placeholder="FirstName"
                required
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-2" class="form-label">LastName</label>
              <input
                v-model="userInfo.lastName"
                type="text"
                class="form-control"
                placeholder="LastName"
                required
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-3" class="form-label">UserName</label>
              <input
                v-model="userInfo.userName"
                type="text"
                class="form-control"
                placeholder="UserName"
                required
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-4" class="form-label">Email</label>
              <input
                v-model="userInfo.email"
                type="Email"
                class="form-control"
                placeholder="test@test.com"
                required
              />
            </div>
            <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-5" class="form-label">MobileNumber</label>
              <input
                v-model="userInfo.mobileNumber"
                type="tel"
                class="form-control"
                pattern="[+]{1,3}[0-9]{6,18}"
                placeholder="+94123456789"
                required
              />
            </div>
            <div v-if="activeIndex == -1" class="col-span-12 sm:col-span-6">
              <label for="modal-form-5" class="form-label">PassWord</label>
              <input
                id="password"
                ref="password"
                v-model="userInfo.password"
                type="password"
                class="form-control"
                minlength="6"
                placeholder="Password"
                required
                @change="validatePassword"
              />
            </div>
            <div v-if="activeIndex == -1" class="col-span-12 sm:col-span-6">
              <label for="modal-form-5" class="form-label"
                >Confirm Password</label
              >
              <input
                id="confirm_password"
                type="password"
                class="form-control"
                placeholder="Confirm Password"
                required
                @keyup="validatePassword"
              />
            </div>
            <!-- <div class="col-span-12 sm:col-span-6">
              <label for="modal-form-6" class="form-label">Role Manager</label>
              <select id="modal-form-6" class="form-select">
                <option>Viewer</option>
                <option>Editer</option>
              </select>
            </div> -->
          </div>
          <!-- END: Modal Body -->
          <!-- BEGIN: Modal Footer -->
          <div class="modal-footer text-right">
            <button
              id="cancel"
              type="button"
              data-dismiss="modal"
              class="btn btn-outline-secondary w-20 mr-1"
              @click.prevent="activeIndex = -1"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary w-20">
              Save
            </button>
          </div>
          <!-- END: Modal Footer -->
        </form>
      </div>
    </div>
    <!-- END: Modal Content -->
    <!-- BEGIN: Delete Confirmation Modal -->
    <div
      id="delete-confirmation-modal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-theme-24 mx-auto mt-3" />
              <div class="text-3xl mt-5">Are you sure?</div>
              <div class="text-gray-600 mt-2">
                Do you really want to delete these records? <br />This process
                cannot be undone.
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                id="d_cancel"
                type="button"
                data-dismiss="modal"
                class="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-danger w-24"
                @click.prevent="deleteInfo(currentIndex)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>
<script>
import VueCookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        mobileNumber: "",
        password: "",
        roleId: 3
      },
      activeIndex: -1,
      resData: [],
      currentIndex: "",
      permission: -1,
      accessId: 1
    };
  },
  mounted() {
    this.readInfo();
    this.getRoleData();
  },
  methods: {
    readInfo() {
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
    },
    getRoleData() {
      const roleData = JSON.parse(localStorage.getItem("info")).roleData;
      for (let i = 0; i < roleData.length; i++) {
        if (roleData[i].accessId == this.accessId)
          this.permission = roleData[i].permission;
      }
    },
    openDeleteModal(index) {
      this.currentIndex = index;
    },
    removeData() {
      if (this.activeIndex == -1) {
        (this.userInfo.firstName = ""),
          (this.userInfo.lastName = ""),
          (this.userInfo.userName = ""),
          (this.userInfo.email = ""),
          (this.userInfo.password = ""),
          (this.userInfo.mobileNumber = "");
      }
    },
    validatePassword() {
      var password = document.getElementById("password"),
        confirm_password = document.getElementById("confirm_password");
      if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity("");
      }
    },
    Register() {
      const info = VueCookies.get("info");
      let item;
      if (this.activeIndex != -1) {
        item = this.resData[this.activeIndex];
        for (let key in this.userInfo) {
          if (key == "password") continue;
          item[key] = this.userInfo[key];
        }
      } else {
        item = this.userInfo;
      }
      let url = this.activeIndex == -1 ? "create" : "update";
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_ROOT_API + "/v1/private/user/" + url, {
            token: info.tokens.accessToken.token,
            userInfo: item
          })
          .then(response => {
            this.activeIndex == -1
              ? this.resData.push(response.data)
              : this.resData;
            document.getElementById("cancel").click();
          })
          .catch(e => {
            reject(e);
          });
      });
    },
    updateModal(index) {
      this.activeIndex = index;
      let item = this.resData[index];
      for (let key in item) {
        this.userInfo[key] = item[key];
      }
      document.getElementById("addUser").click();
    },
    deleteInfo(index) {
      const info = VueCookies.get("info");
      let id = this.resData[index].id;
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_ROOT_API + "/v1/private/user/deleteInfo", {
            token: info.tokens.accessToken.token,
            id: id
          })
          .then(() => {
            this.resData.splice(index, 1);
            document.getElementById("d_cancel").click();
          })
          .catch(e => {
            reject(e);
          });
      });
    },
    filterFunction() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        for (var j = 0; j < 8; j++) {
          td = tr[i].children[j];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
              break;
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }
    }
  }
};
</script>
