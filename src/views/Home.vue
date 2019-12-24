<template>
  <div class="home">
    <h1>This is the homepage</h1>
    <v-divider></v-divider>
    <v-btn>click me1</v-btn> &nbsp;
    <v-btn class="pink white--text">click me2</v-btn>&nbsp;
    <v-btn depressed color="pink">click me3</v-btn>&nbsp;
    <v-btn text color="pink">click me4</v-btn><br><br>

    <v-btn depressed class="pink white--text">
      <v-icon left>email</v-icon>
      <span>email me</span>
    </v-btn>&nbsp;

    <v-btn depressed small class="pink white--text">
      <v-icon left small>email</v-icon>
      <span>email me</span>
    </v-btn>&nbsp;

    <v-btn depressed large class="pink white--text">
      <span>email me</span>
      <v-icon right large>email</v-icon>
    </v-btn><br><br>

    <v-btn fab dark small depressed color="purple">
      <v-icon dark>favorite</v-icon>
    </v-btn><br><br>

  </div>
</template>