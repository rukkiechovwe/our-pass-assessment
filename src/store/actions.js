export default {
  getInvoice: async ({ commit }) => {
    try {
      const res = await fetch("/api/invoice");

      if (res.status === 200) {
        let json = await res.json();
        commit("updateInvoice", json);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
