<template>
  <div class="row row-sm justify-between q-pt-sm">
    <div class="col-sm-8 q-mr-sm">
      <div class="row items-center justify-between width-half">
        <p class="text-weight-bold text-subtitle1">Payment Method</p>
        <p class="text-primary">Select Payment</p>
      </div>
      <div class="q-pa-md bg-accent width-half rounded-borders">
        <p class="text-weight-bold">Wire Transfer</p>
        <p>
          <span class="q-pr-sm text-grey">Account Name:</span>
          <span class="text-weight-bold">{{invoice.payment.account_name}}</span>
        </p>
        <p>
          <span class="q-pr-sm text-grey">Account Number:</span>
          <span class="text-weight-bold">{{invoice.payment.account_number}}</span>
        </p>
        <p>
          <span class="q-pr-sm text-grey">Routing Number:</span>
          <span class="text-weight-bold">{{invoice.payment.routing_number}}</span>
        </p>
      </div>
    </div>
    <div class="col width-half q-pt-sm">
      <p class="row justify-between">
        <span class="text-weight-bold">Subtotal</span>
        <span class="text-weight-bold">${{ invoice.subTotal }}</span>
      </p>
      <p class="row justify-between">
        <span class="text-grey">Discount</span>
        <span class="text-weight-bold">${{ invoice.discount }}</span>
      </p>
      <p class="row justify-between divider q-pb-xl">
        <span class="text-grey">Total tax</span>
        <span class="text-weight-bold">${{ invoice.tax }}</span>
      </p>
      <p class="row justify-between text-body2 q-pt-sm">
        <span class="text-grey">Total amount</span>
        <span class="text-weight-bold">${{ invoice.total }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "PaymentMethod",

  setup() {
    const store = useStore();

    return {
      invoice: computed(() => store.state.invoice),
    };
  },
};
</script>
