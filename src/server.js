import { createServer } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/invoice", () => {
        return {
          name: "Dippa Inhouse",
          email: "hello@dippainhouse.com",
          address: {
            street_name: "Ijen Bouelovard Street 101",
            city: "Malang City",
            state: "East Java",
            country: "Indonesia",
            postal_code: "65115",
          },
          invoice_number: "INV-2022-010",
          issue_date: "11 Jan 2022",
          due_date: "18 Jan 2022",
          billed_to: {
            name: "Zacky Grizzly",
            address: "Moonlight Agency LTD",
            state: "New York",
            country: "USA",
          },
          item: {
            name: "Payment Project - Moonlight Mobile Design",
            hours: "120",
            rate: "40.00",
            tax: "",
            total: "4,800.00",
          },
          subTotal: "4,800.00",
          discount: "0.00",
          tax: "0.00",
          total: "4,800.00",
        };
      });
    },
  });

  return server;
}
