export default {
  updateInvoice(state, payload) {
    state.invoice = payload;
    console.log(state.invoice);
  },
};
