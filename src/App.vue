<style>
  @import './assets/Home.css';

  .loginDis {
    visibility: visible;
    position: fixed;
    z-index: 3;
    top: 72px;
    right: 10px;
  }

  .loginDis.hidden_login {
    visibility: hidden;
  }
</style>

<template>
  <v-app :style="{'background': 'rgb(156,156,193);','background': 'linear-gradient(90deg, rgba(156,156,193,1) 8%, rgba(148,213,224,1) 51%, rgba(187,224,232,1) 89%)'}">>
        <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/dashboard">
          <v-list-item-action>
            <v-icon>mdi-antenna</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/register">
          <v-list-item-action>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-app-bar-nav-icon class="bar-nav-icon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="assets/excilys.png"
          transition="scale-transition"
          width="40"
        />
        <b>CBD</b>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon class="loginButton" @click="loginDisplay = !loginDisplay" v-if="loginDisplay">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn class="loginButton" @click="loginDisplay = !loginDisplay" v-if="loginDisplay">
        Logout
      </v-btn>
      <v-btn class="loginButton" @click="loginDisplay = !loginDisplay" v-if="!loginDisplay">
        Login
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
      <div class="loginDis" :class="{hidden_login:!loginDisplay}">
        <LoginForm/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'App',
  props: {
    source: String
  },
  components: {
    LoginForm
  },
  data: () => ({
    drawer: null,
    loginDisplay: false
  })
}
</script>
