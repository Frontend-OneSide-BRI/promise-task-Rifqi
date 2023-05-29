const users = [
  {
    id: 1,
    username: "test",
    address: "jakarta",
  },
  {
    id: 2,
    username: "test2",
    address: "Serpong",
  },
];
const transactions = [
  {
    user_id: 1,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Sedang dikirim" },
    ],
  },
  {
    user_id: 2,
    transaction: [
      { id: 1, status: "Selesai" },
      { id: 2, status: "Dibatalkan" },
    ],
  },
];
const transactionDetails = [
  { id: 1, productName: "Laptop", qty: 1, totalPrice: 10000000 },
  { id: 2, productName: "Casing Handphone", qty: 2, totalPrice: 100000 },
];

export { users, transactions, transactionDetails };
