<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <NavBar />
      <div class="q-px-lg q-py-lg text-weight-bold text-grey section">
        <span class="text-primary">Invoices / </span>
        <span>edit invoice (INV-2022-010)</span>
      </div>
      <div class="section">
        <div class="bg-white q-pa-lg border q-mx-lg">
          <InvoiceCard />
          <ItemDetail />
          <PaymentMethod />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import PaymentMethod from "./components/PaymentMethod.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import ItemDetail from "./components/ItemDetail.vue";

export default {
  name: "LayoutDefault",

  components: {
    NavBar,
    PaymentMethod,
    InvoiceCard,
    ItemDetail,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>
