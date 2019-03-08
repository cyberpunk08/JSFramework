<template>
<div class="col-md-6">
    <!-- 초기-->
    <!--<h2 class="text-center">User Add</h2>-->
    <!-- test4..... -->
    <h2 v-if="isAdd" class="text-center">User Add</h2>
    <h2 v-else class="text-center">User Update</h2>

      <!-- test3.... v-model 추가..-->
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email"  placeholder="Email"  v-model="user.email" class="form-control" id="email">
      </div>
  
      <!-- test3.... v-model 추가..-->
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input  placeholder="First Name"  v-model="user.firstName" class="form-control" id="firstName">
      </div>
      <!-- test3.... v-model 추가..-->
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input  placeholder="Last name"  v-model="user.lastName" class="form-control" id="lastName">
      </div>
      <!-- test3.... @click 추가-->
      <button class="btn btn-success" @click="addUser({email:user.email, firstName: user.firstName, lastName: user.lastName})">
          <!-- test4..............-->
          <span v-if="isAdd">Add</span>
          <span v-else>Update</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        firstName: "",
        lastName: ""
      }
    };
  },
  methods: {
    addUser() {
      //test3...................
      // this.$store.dispatch("list/addUserAction", this.user);
      //test4........................
      if (this.$route.params.id === undefined) {
        this.$store.dispatch("list/addUserAction", this.user);
      } else {
        this.$store.dispatch("list/updateUserAction", this.user);
      }
    }
  }
  ,computed: {//test4.........................
    isAdd() {
      return this.$route.params.id === undefined;
    }
  }
  ,mounted() {//test4.......................
    if (this.$route.params.id !== undefined) {
      this.user = this.$store.getters["list/getUserGetter"](
        this.$route.params.id
      );
    }
  }
};
</script>

<style>
</style>