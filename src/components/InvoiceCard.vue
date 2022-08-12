<template>
  <div>
    <div class="row row-sm justify-between text-grey q-mb-lg">
      <div class="row items-center">
        <div
          style="height: 50px; width: 50px; border-radius: 50%"
          class="bg-info q-mr-md"
        ></div>
        <div>
          <p class="text-weight-bold text-body1 text-dark">
            {{ invoice.name }}
          </p>
          <p class="">{{ invoice.email }}</p>
        </div>
      </div>
      <div class="text-right">
        <p>{{ invoice.address.street_name }}</p>
        <p>{{ invoice.address.city }}, {{ invoice.address.postal_code }}</p>
        <p>{{ invoice.address.state }}, {{ invoice.address.country }}</p>
      </div>
    </div>
    <div
      class="row row-sm justify-between border bg-primary q-pa-lg q-mb-lg text-white text-body2"
    >
      <div>
        <p class="text-weight-bold">Invoice Number</p>
        <p class="text-weight-bold">{{ invoice.invoice_number }}</p>
        <p>
          <span class="q-pr-sm">Issue Date:</span>
          <span class="text-weight-bold">{{ invoice.issue_date }}</span>
        </p>
        <p>
          <span class="q-pr-sm">Due Date:</span>
          <span class="text-weight-bold">{{ invoice.due_date }}</span>
        </p>
      </div>
      <div class="text-right">
        <p class="text-weight-bold">Billed To</p>
        <p>{{ invoice.billed_to.name }}</p>
        <p>{{ invoice.billed_to.address }}</p>
        <p>{{ invoice.billed_to.state }}, {{ invoice.billed_to.country }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "InvoiceCard",

  setup() {
    const store = useStore();

    return {
      invoice: computed(() =>
        store.state.invoice
          ? store.state.invoice
          : {
              name: "Dippa Inhouse",
              email: "hello@dippainhouse.com",
              invoice_number: "INV-2022-010",
              issue_date: "11 Jan 2022",
              due_date: "18 Jan 2022",
              billed_to: {
                name: "Zacky Grizzly",
                address: "Moonlight Agency LTD",
                state: "New York",
                country: "USA",
              },
              address: {
                street_name: "Ijen Bouelovard Street 101",
                city: "Malang City",
                state: "East Java",
                country: "Indonesia",
                postal_code: "65115",
              },
            }
      ),
    };
  },
};
</script>
