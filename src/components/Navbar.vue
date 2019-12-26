<template>
    <nav>
        <v-app-bar flat app >
            <v-app-bar-nav-icon class="grey--text" @click="drwr = !drwr"></v-app-bar-nav-icon>
            <v-toolbar-title class="grey--text"> 
                <span class="font-weight-light">Saw</span>
                <span>Analytics</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>signout</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drwr" app  class="teal">
               <v-layout column align-center>
                    <v-flex class="mt-5">
                         <v-avatar size="100" class="grey lighten-4"><img src="/avatar-1.png"></v-avatar>
                         <p class="white--text subheading mt-1">Manoj Mishra </p>
                    </v-flex>
               </v-layout>
               <v-list rounded>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-icon>
                            <v-icon class="white--text">{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
              </v-list>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data(){return{drwr:true, links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ]}
    }
}
</script>