import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      invoice: Model,
    },

    seeds(server) {
      server.create("invoice", {
        name: "",
        email: "",
        address: {},
        invoice_number: "",
        issue_date: "",
        due_date: "",
        billed_to: {},
        item: {},
        subTotal: "",
        discount: "",
        tax: "",
        total: "",
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/invoice", (schema) => {
        return schema.invoice.all();
      });
    },
  });

  return server;
}
