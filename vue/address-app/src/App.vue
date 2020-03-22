<template>
  <v-app>
    <v-app-bar app color="orange">
      <!-- <v-app-bar-nav-icon @click="openSideMenu"></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title color="primary">MYアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <SideNav />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";
import SideNav from "./components/SideNav.vue";

export default {
  name: "App",

  components: {
    SideNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses();
        if (this.$router.currentRoute.name === "home")
          this.$router.push({ name: "address" });
      } else {
        this.deleteLoginUser();
        this.$router.push({ name: "home" });
      }
    });
  },
  data: () => ({
    //
  }),
  methods: {
    //openSideMenu() {
    //  this.$store.dispatch('toggleSideMenu');
    //},
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "deleteLoginUser",
      "fetchAddresses"
    ])
  }
};
</script>
