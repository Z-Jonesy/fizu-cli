<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 sticky-top">
    <router-link to="/" class="navbar-brand fizu">fizu.hu</router-link>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        
        <li class="nav-item px-3" v-for="item in itemCollection" :key="item.id">
          <router-link 
            :to="item.path" 
            class="nav-link"> 

            {{ item.name }}
          </router-link>
        </li>
        <li class="nav-item px-3"
        v-if="this.isLoggedIn">
          <a class="nav-link" href="#" @click.prevent="logOut">Logout</a>
        </li>
      
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { TYPES } from "../store";

export default {
  methods: {
    ...mapMutations([TYPES.mutations.deleteUser]),
    logOut() {
      this.deleteUser();
      this.$router.push("/");
    }
  },
  computed: {
    ...mapGetters({ isLoggedIn: TYPES.getters.isLoggedIn }),
    itemCollection() {
      if (this.isLoggedIn) {
        return [
          ...this.baseNav,
          {
            name: "Profile",
            id: "profile",
            path: "/profile"
          }
        ];
      } else {
        return [
          ...this.baseNav,
          {
            name: "Login",
            id: "login",
            path: "/login"
          },

          {
            name: "Sign Up",
            id: "registr ation",
            path: "/registration"
          }
        ];
      }
    }
  },

  data() {
    return {
      baseNav: [
        {
          name: "Főoldal",
          id: "index",
          path: "/"
        },

        {
          name: "Blog",
          id: "blog",
          path: "/blog"
        },

        {
          name: "Kérdőív",
          id: "survey",
          path: "/survey"
        },

        {
          name: "Fizu térkép",
          id: "statistics",
          path: "/statistics"
        },

        {
          name: "Kapcsolat",
          id: "contact",
          path: "/contact"
        }
      ]
    };
  }
};
</script>
