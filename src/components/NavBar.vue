<template>
  <div class="bg-white">
    <q-toolbar class="text-dark q-px-lg section" :dense="$q.screen.lt.md">
      <p class="text-h6 text-weight-bold text-primary q-pr-xl">Paypay.</p>

      <q-tabs v-model="tab" shrink stretch inline-label>
        <q-tab name="tab1" label="Dashboard" icon="grid_view" />
        <q-tab name="tab2" label="Invoices" icon="description" />
        <q-tab name="tab3" label="Wallet" icon="account_balance_wallet" />
        <q-tab name="tab4" label="Activity" icon="analytics" />
        <q-tab name="tab5" label="Help" icon="call" />
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavBar",

  setup() {
    return {
      tab: ref("tab2"),
    };
  },
};
</script>
<style scoped>
.q-tab {
  font-weight: 600 !important;
  text-transform: capitalize;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.q-icon {
  color: #9a9ea1 !important;
}
.q-tab--active {
  color: #393a9c;
}
</style>
