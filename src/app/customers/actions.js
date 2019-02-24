export const CUSTOMERS = '[Customers]';

export const CUSTOMERS_LIST = `${CUSTOMERS} List`;
export const CUSTOMERS_VIEW = `${CUSTOMERS} View`;

export const listCustomers = () => ({
  type: CUSTOMERS_LIST,
});

export const viewCustomer = customerId => ({
  type: CUSTOMERS_LIST,
  payload: {
    customerId,
  },
});
