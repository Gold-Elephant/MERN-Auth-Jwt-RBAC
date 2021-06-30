<template>
  <div>
    <!-- <div class="flex items-center mt-8">
      <h2 class="intro-y text-lg font-medium mr-auto">Wizard Layout</h2>
    </div> -->
    <!-- BEGIN: Wizard Layout -->
    <div class="intro-y box py-10 sm:py-20 mt-5">
      <div
        class="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-20"
      >
        <!-------- for start -------->
        <div
          v-for="(value, index) in object"
          :key="value.id"
          class="intro-x lg:text-center flex items-center lg:block flex-1 z-10"
        >
          <!-- <router-link to="/wizard-layout-3/User-components/Church_Master"> -->
          <button
            class="w-10 h-10 rounded-full btn"
            :class="{
              'btn-primary': stepId == index + 1,
              'text-gray-600 bg-gray-200 dark:bg-dark-1': stepId !== index + 1
            }"
            @click="setStepId(index + 1)"
          >
            {{ index + 1 }}
          </button>
          <div class="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
            {{ value.label }}
          </div>
          <!-- </router-link> -->
        </div>
        <!------- for end -------->
        <div
          class="wizard__line hidden lg:block w-2/3 bg-gray-200 dark:bg-dark-1 absolute mt-5"
        ></div>
      </div>
    </div>
    <div
      class="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5"
    >
      <!-- <router-view></router-view> -->
      <ChurchMaster v-if="stepId === 1" />
      <ChurchMinister v-if="stepId === 2" />
      <ChurchStatistics v-if="stepId === 3" />
      <ChurchDevelopmet v-if="stepId === 4" />
      <OtherInfo v-if="stepId === 5" />
      <!-- END: Wizard Layout -->
      <div
        class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5"
      >
        <button
          v-if="stepId == 1"
          class="btn btn-secondary w-24"
          @click="PrePage(stepId - 1)"
        >
          Previous
        </button>
        <button
          v-else
          class="btn btn-primary w-24"
          @click="PrePage(stepId - 1)"
        >
          Previous
        </button>
        <button
          v-if="stepId == 5"
          class="btn btn-secondary w-24 ml-2"
          @click="NextPage(stepId + 1)"
        >
          Next
        </button>
        <button
          v-else
          class="btn btn-primary w-24 ml-2"
          @click="PrePage(stepId + 1)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChurchMaster from "@/views/wizard-layout-3/user-component/church_master.vue";
import ChurchMinister from "@/views/wizard-layout-3/user-component/church_minister.vue";
import ChurchStatistics from "@/views/wizard-layout-3/user-component/church_statistics.vue";
import ChurchDevelopmet from "@/views/wizard-layout-3/user-component/church_development.vue";
import OtherInfo from "@/views/wizard-layout-3/user-component/other_info.vue";

export default {
  components: {
    ChurchMaster,
    ChurchMinister,
    ChurchStatistics,
    ChurchDevelopmet,
    OtherInfo
  },
  data() {
    return {
      stepId: 1,
      object: [
        {
          id: 1,
          label: "Church Master field data"
        },
        {
          id: 2,
          label: "Church Ministers & Commitees field data"
        },
        {
          id: 3,
          label: "Church Statitics field data"
        },
        {
          id: 4,
          label: "Church Development field data"
        },
        {
          id: 5,
          label: "Other Info andividual Tables"
        }
      ]
    };
  },
  methods: {
    setStepId(id) {
      this.stepId = id;
    },
    PrePage(id) {
      if (id == 0) this.stepId = 1;
      else this.stepId = id;
    },
    NextPage(id) {
      if (id == 6) this.stepId = 5;
      else this.stepId = id;
    }
  }
};
</script>
