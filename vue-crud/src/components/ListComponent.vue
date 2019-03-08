<template>
<div class="col-md-6">
  <h2> User List</h2>
  <!-- test3..... @click 추가-->
  <button class="btn btn-danger" @click="addUser"> Add User</button>
  <table class="table table-striped">
    <thead>
    <tr>
      <th class="hidden">Id</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
      <!--test2................-->
      <tr v-for="user in users" :key="user.id">
      <td class="hidden">{{user.id}}</td>
      <td>{{user.firstName}}</td>
      <td>{{user.lastName}}</td>
      <td>{{user.email}}</td>
      <td>
        <button class="btn btn-danger" @click="deleteUser(user.id)"> Delete</button>
        <!--test4....click............-->
      
        <button class="btn btn-danger" style="margin-left: 20px;"  @click="editUser(user.id)"> Edit</button>
      </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
//test2.........................
import { mapState } from "vuex";
export default {
  computed: mapState({
    users: state => state.list.users
  }),
  mounted () {
    console.log('ListComponent....mounted.....')
    this.$store.dispatch('list/getAllUsers')
  }
  ,methods: {//test3.....addUser만.........................
    addUser() {
        this.$router.push('/add')
    }
    ,editUser(id) {//test4...............
        this.$router.push('/update/'+id)
    }
    ,deleteUser(id) {//test5........................
        this.$store.dispatch("list/deleteUserAction", id);
    }
  },
};
</script>

<style>
</style>