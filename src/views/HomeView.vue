<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <v-app-bar-title> <b>VueCG</b> | Home </v-app-bar-title>
      </v-app-bar>
      <v-container>
        <v-card class="my-2" title="Select your task:" />
        <v-row justify="center">
          <v-col cols="4">
            <v-card
              to="/display/"
              class="my-2"
              color="success"
              title="Display"
              subtitle="Display client via browser source"
              append-icon="mdi-arrow-right"
            />
          </v-col>
          <v-col cols="4">
            <v-card
              to="/control/"
              class="my-2"
              color="primary"
              title="Control"
              subtitle="Real-time broadcast control"
              append-icon="mdi-arrow-right"
            />
          </v-col>
          <v-col cols="4">
            <v-card
              disabled
              class="my-2"
              color="error"
              title="Interactive (TODO)"
              subtitle="Broadcast interaction"
              append-icon="mdi-arrow-right"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
