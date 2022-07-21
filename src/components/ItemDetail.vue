<template>
  <div>
    <div class="row items-center justify-between divider q-pb-sm">
      <div>
        <p class="text-weight-bold text-subtitle1">Item Detail</p>
        <p class="text-grey">Type Item for Hours item</p>
      </div>
      <q-btn
        color="secondary"
        icon="tune"
        label="Customize"
        text-color="primary"
        no-caps
        unelevated
      />
    </div>
    <div
      class="row items-center justify-between divider q-mb-lg q-px-xs text-grey"
    >
      <p style="width: calc(100% - 480px)">Item name</p>
      <p style="width: 50px">Hours</p>
      <p style="width: 100px">Rate/Hr</p>
      <p style="width: 100px">Tax</p>
      <p style="width: 140px">Line Total</p>
      <p style="width: 30px"></p>
    </div>
    <div class="row items-center justify-between divider q-pb-lg">
      <q-input
        outlined
        v-model="invoice.item.name"
        dense
        style="width: calc(100% - 480px); min-width: 200px"
        class="col-sm-8"
      />
      <q-input
        outlined
        v-model="invoice.item.hours"
        dense
        style="width: 50px"
      />
      <q-input
        outlined
        v-model="invoice.item.rate"
        dense
        placeholder="0.00"
        style="width: 100px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_money" />
        </template>
      </q-input>
      <q-input
        outlined
        v-model="invoice.item.tax"
        dense
        placeholder="0.00"
        style="width: 100px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_money" />
        </template> </q-input
      ><q-input
        outlined
        v-model="invoice.item.total"
        dense
        placeholder="0.00"
        style="width: 140px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_money" />
        </template>
      </q-input>

      <q-btn unelevated round color="primary" icon="add" size="10px" />
    </div>
  </div>
</template>
<script></script>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "ItemDetail",

  setup() {
    const store = useStore();
    return {
      invoice: computed(() => store.state.invoice),
    };
  },
};
</script>
<style>
.q-btn--rectangle {
  border-radius: 10px;
}
</style>
