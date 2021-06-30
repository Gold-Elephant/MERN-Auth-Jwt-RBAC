<template>
  <!-- Container -->
  <div class="container mx-auto">
    <div class="flex justify-center items-center h-screen px-4">
      <!-- Row -->
      <div class="w-full xl:w-2/4 lg:w-6/12 flex">
        <div class="w-full bg-gray-200 p-6 rounded-xl">
          <div class="px-8 mb-4 text-center">
            <h4 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h4>
            <p class="mb-4 text-sm text-gray-700 mt-1">
              We get it, stuff happens. Just enter your email address below and
              we'll send you a code to reset your password!
            </p>
          </div>
          <form
            class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            @submit.prevent="resetPass"
          >
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>
              <input
                v-model="email"
                type="email"
                class="intro-x login__input form-control py-3 px-4 border-gray-300 block"
                placeholder="Enter Email Address..."
                required
              />
            </div>
            <span>{{ this.hint }}</span>
            <div class="mb-6 text-center mt-1">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Reset Passwords
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <a
                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/"
              >
                Already have an account? Login!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useStore } from "@/store";
export default defineComponent({
  data() {
    return {
      email: "",
      hint: ""
    };
  },
  methods: {
    async resetPass() {
      const store = useStore();
      const email = { email: this.email };
      const result = await store.dispatch("auth/resetpassword", email);
      this.hint = "Your new password is " + result.data.content.password;
    }
  }
});
</script>
