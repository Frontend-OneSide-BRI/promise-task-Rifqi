import { users, transactions, transactionDetails } from "./data.js";

const login = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.filter((val) => val.username === username));
    }, 1000);
  });
};

const getTransactionsByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        transactions.filter((transaction) => transaction.user_id === userId)
      );
    }, 1000);
  });
};

const getTransactionsDetail = (transactionId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(transactionDetails.find((detail) => detail.id === transactionId));
    }, 1000);
  });
};

//Using promise
console.log("===========PROMISE===========");
login("test")
  .then((user) => {
    console.log("user data:", user[0]);
    return getTransactionsByUserId(user[0].id);
  })
  .then((transactions) => {
    console.log("transaction data:", transactions[0].transaction);
    return Promise.all(
      transactions[0].transaction.map((val) =>
        getTransactionsDetail(transactions[0].transaction[val.id - 1].id)
      )
    );
  })
  .then((transactionDetail) => {
    console.log("transaction detail:", transactionDetail);
  })
  .catch((e) => console.log(e));

//Using async/await
(async function main() {
  const userData = await login("test2");
  const transactionData = await getTransactionsByUserId(userData[0].id);
  const transactionDetail = await Promise.all(
    transactionData[0].transaction.map((val) =>
      getTransactionsDetail(transactionData[0].transaction[val.id - 1].id)
    )
  );
  console.log("===========ASYNC/AWAIT===========");
  console.log("user data:", userData);
  console.log("transaction data:", transactionData[0].transaction);
  console.log("transaction detail:", transactionDetail);
})();
