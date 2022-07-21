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
    <div class="row items-center justify-between divider q-mb-lg q-px-xs text-grey">
      <p style="width: calc(100% - 550px)">Item name</p>
      <p style="width: 50px">Hours</p>
      <p style="width: 100px">Rate/Hr</p>
      <p style="width: 100px">Tax</p>
      <p style="width: 150px">Line Total</p>
    </div>
    <div class="row items-center justify-between divider q-pb-lg">
      <q-input
        outlined
        v-model="text"
        dense
        style="width: calc(100% - 550px); min-width: 200px"
      />
      <q-input outlined v-model="hours" dense style="width: 50px" />
      <q-input
        outlined
        v-model="rate"
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
        v-model="total"
        dense
        placeholder="0.00"
        style="width: 100px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_money" />
        </template> </q-input
      ><q-input
        outlined
        v-model="lineTotal"
        dense
        placeholder="0.00"
        style="width: 150px"
      >
        <template v-slot:prepend>
          <q-icon name="attach_money" />
        </template>
      </q-input>

      <q-btn unelevated round color="primary" icon="add" size="10px" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref("Payment Project - Moonlight Mobile Design"),
      hours: ref("120"),
      rate: ref("40.00"),
      total: ref(""),
      lineTotal: ref("4,800.00"),
    };
  },
};
</script>
<style>
.q-btn--rectangle {
  border-radius: 10px;
}
</style>
