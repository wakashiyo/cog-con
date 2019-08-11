<template>
  <v-toolbar dark color="primary">
    <v-toolbar-title>{{ text }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>
