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
        <v-navigation-drawer v-model="drwr" app temporary class="indigo">
            <p>Test</p>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data(){return{drwr:false}}
}
</script>