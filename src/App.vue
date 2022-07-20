<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-page-container>
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {
    HelloWorld,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
<style>
p {
  margin: 7px 0 !important;
}
#app {
  background: #fafafa;
}
.border {
  border-radius: 20px;
}
.divider {
  border-bottom: 2px solid #f6f4ff;
}
</style>
