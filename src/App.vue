  <style>
  @import '/assets/Home.css';
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
          <v-list-item-title> Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-antenna</v-icon>
          </v-list-item-action>
          <v-list-item-content>
          <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="assets/excilys.png"
          transition="scale-transition"
        />
        <b>CBD</b>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class=" align-center" >
     <router-link to='/'></router-link>
     <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  props: {
    source: String
  },
  components: {
  },
  data: () => ({
    drawer: null
  })
}
</script>
