<template>
    <nav><!-- snakbar below for success notice -->
       <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
           <span>Project added!!!!</span>
           <v-btn text color="white" @click="snackbar=false">Close</v-btn>
       </v-snackbar>
       <v-app-bar flat app ><!--toolbar  -->
            <v-app-bar-nav-icon class="grey--text" @click="drwr = !drwr"></v-app-bar-nav-icon>
            <v-toolbar-title class="grey--text"> 
                <span class="font-weight-light">Saw</span><span>Analytics</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
                <v-menu offset-y> <!-- dropdown menu on right side on toolbar -->
                    <template v-slot:activator="{ on }">
                        <v-btn text v-on="on" color="grey"><v-icon left>expand_more</v-icon> <span>Menu</span></v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu> <!--finish dropdown menu -->
            <v-btn text color="grey"><span>signout</span><v-icon right>exit_to_app</v-icon></v-btn>
        </v-app-bar><!-- toolbar finish --drawer start-->
        <v-navigation-drawer v-model="drwr" app  class="teal">
               <v-layout column align-center>
                    <v-flex class="mt-5">
                         <v-avatar size="100" class="grey lighten-4"><img src="/avatar-1.png"></v-avatar>
                         <p class="white--text subheading mt-1">Manoj Mishra </p>
                    </v-flex> <!--popup to add projects below -->
                    <v-flex class="mt-4 mb-3"><Popup @projectAdded="snackbar=true" /></v-flex>
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
import Popup from './Popup'
export default {
        components:{Popup},
    data(){return{drwr:true, links: [
        { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account', text: 'Team', route: '/team' },
      ], snackbar:false}
    }
}
</script>