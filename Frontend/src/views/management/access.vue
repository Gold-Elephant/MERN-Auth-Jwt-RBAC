<template>
  <div class="mt-5">
    <h1 class="intro-y text-2xl font-medium mt-10 text-center">
      Access Management
    </h1>
    <div class="intro-y col-span-12 items-center mt-2 px-10">
      <div class="w-full">
        <span class="text-7x1 m-2" for="">Select Role</span>
        <select
          class="form-select w-1/5 mr-5 select"
          @change="readInfo($event.target.value)"
        >
          <option value="1">Super Admin</option>
          <option value="2">Normal Admin</option>
          <option value="3">User</option>
        </select>
        <button
          v-if="permission == 2"
          id="save"
          class="btn btn-primary btn-lg float-right  opacity-30 cursor-not-allowed"
          disabled
          @click="saveInfo($event.target)"
        >
          Save
        </button>
        <button
          v-if="permission == 2"
          class="btn btn-success btn-lg float-right"
          @click="editClick($event)"
        >
          Edit
        </button>
      </div>
      <div class="w-full mt-8">
        <table class="relative w-3/5">
          <thead>
            <tr>
              <th class="sticky top-0 px-6 py-3">
                Manage Page
              </th>
              <th class="sticky top-0 px-6 py-3">
                View
              </th>
              <th class="sticky top-0 px-6 py-3">
                Modify
              </th>
            </tr>
          </thead>
          <tbody class="divide-y">
            <tr v-for="(roleAccess, index) in roleAccessData" :key="index">
              <td class="px-6 py-4 text-center w-1/2">
                {{ accessData[index].accessName }}
              </td>
              <td class="px-6 py-4 text-center w-1/4">
                <input
                  v-model="viewCheck[index]"
                  class="h-5 w-5 form-checkbox cursor-pointer"
                  type="checkbox"
                  disabled
                  :checked="viewCheck[index]"
                  @click="viewManage($event.target)"
                />
              </td>
              <td class="px-6 py-4 text-center w-1/4">
                <input
                  v-model="modifyCheck[index]"
                  class="h-5 w-5 form-checkbox cursor-pointer"
                  type="checkbox"
                  disabled
                  :checked="modifyCheck[index]"
                  @click="modifyManage($event.target)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import VueCookies from "vue-cookies";
import axios from "axios";

export default {
  data() {
    return {
      accessData: [],
      roleAccessData: [],
      viewCheck: [],
      modifyCheck: [],
      permission: -1,
      accessId: 3
    };
  },
  mounted() {
    const roleId = document.getElementsByClassName("select")[0].value;
    this.readInfo(roleId);
    this.getRoleData();
  },
  methods: {
    readInfo(roleId) {
      const info = VueCookies.get("info");
      new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_ROOT_API + "/v1/private/access/readInfo", {
            token: info.tokens.accessToken.token,
            roleId: roleId
          })
          .then(response => {
            this.accessData = response.data.accessData;
            this.roleAccessData = response.data.roleAccessData;
            for (let i = 0; i < this.accessData.length; i++) {
              if (this.roleAccessData[i][0].permission >= 1)
                this.viewCheck[i] = true;
              else this.viewCheck[i] = false;
              if (this.roleAccessData[i][0].permission == 2)
                this.modifyCheck[i] = true;
              else this.modifyCheck[i] = false;
            }
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
    saveInfo(e) {
      const roleId = document.getElementsByClassName("select")[0].value;
      const info = VueCookies.get("info");
      new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_ROOT_API + "/v1/private/access/saveInfo", {
            token: info.tokens.accessToken.token,
            data: {
              roleId: roleId,
              viewCheck: this.viewCheck,
              modifyCheck: this.modifyCheck,
              accessData: this.accessData
            }
          })
          .then(() => {
            const checkBox = document.getElementsByClassName("form-checkbox");
            for (let i = 0; i < checkBox.length; i++) {
              checkBox[i].setAttribute("disabled", "");
            }
            e.setAttribute("disabled", "");
            e.classList.add("opacity-30");
            e.classList.add("cursor-not-allowed");
          })
          .catch(e => {
            reject(e);
          });
      });
    },
    editClick(edit) {
      console.log(edit);
      const save = document.getElementById("save");
      save.classList.remove("opacity-30");
      save.classList.remove("cursor-not-allowed");
      save.removeAttribute("disabled");
      const checkBox = document.getElementsByClassName("form-checkbox");
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].removeAttribute("disabled");
      }
    },
    viewManage(check) {
      var trElement = check.parentElement.parentElement;
      if (!check.checked) {
        if (trElement.children[2].children[0].checked) {
          trElement.children[2].children[0].checked = false;
        }
      }
    },
    modifyManage(check) {
      var trElement = check.parentElement.parentElement;
      if (check.checked) {
        if (!trElement.children[1].children[0].checked) {
          trElement.children[1].children[0].checked = true;
        }
      }
    }
  }
};
</script>
