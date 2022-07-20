<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-page-container>
      <NavBar />
      <div class="q-px-xl q-py-lg text-weight-bold text-grey section">
        <span class="text-primary">Invoices / </span>
        <span>edit invoice (INV-2022-010)</span>
      </div>
      <div class="section">
        <div class="bg-white q-pa-lg border q-mx-xl">
          <InvoiceCard />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import InvoiceCard from "./components/InvoiceCard.vue";

export default {
  name: "LayoutDefault",

  components: {
    NavBar,
    InvoiceCard,
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
