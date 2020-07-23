const baseURL = "http://localhost:3000/api/v1";
const medicinesURL = `${baseURL}/medicines`;
const pharmasURL = `${baseURL}/pharmas`;
const stocksURL = `${baseURL}/stocks`;
const usersURL = `${baseURL}/users`;
const ordersURL = `${baseURL}/orders`;
const orderMedicinesURL = `${baseURL}/order_medicines`;

function fetchMedicines() {
  return fetch(medicinesURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching medicines from the database was unsuccessful. Error message: ${err}`
      )
    );
}
function fetchMedicine(medicineId) {
  return fetch(`${medicinesURL}/${medicineId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the medicine with ${medicineId} didn't work`)
    );
}
function fetchPharmas() {
  return fetch(pharmasURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching pharmas from the database was unsuccsesful. Error message ${err}`
      )
    );
}
function fetchPharma(pharmaId) {
  return fetch(`${pharmasURL}/${pharmaId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the pharma with ${pharmaId} didn't work`)
    );
}
function fetchStock(stockId) {
  return fetch(`${stocksURL}/${stockId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the stock with ${stockId} didn't work`)
    );
}
function fetchUsers() {
  return fetch(usersURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching users from the database was unsuccessful. Error message: ${err}`
      )
    );
}
function postToOrders(formData) {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch(ordersURL, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Posting this new order didn't work. Error message : ${err}`)
    );
}
function postToOrderMedicines(formData) {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };

  return fetch(orderMedicinesURL, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Posting this new OrderMedicine didn't work. Error message : ${err}`
      )
    );
}
function fetchUser(userId) {
  return fetch(`${usersURL}/${userId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching data for this user was unsuccessful. Error message: ${err}`
      )
    );
}
function fetchOrder(orderId) {
  return fetch(`${ordersURL}/${orderId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching data for this order was unsuccessful. Error message: ${err}`
      )
    );
}
function patchToUser(newUserData, id) {
  const configObject = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUserData),
  };

  return fetch(`${usersURL}/${id}`, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Editing this user didn't work. Error message : ${err}`)
    );
}
function postToUsers(newUserData) {
  // debugger;
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newUserData),
  };

  return fetch(usersURL, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Creating this new user didn't work. Error message : ${err}`)
    );
}
function fetchStocks() {
  return fetch(stocksURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching stocks from the database was unsuccessful. Error message: ${err}`
      )
    );
}

function patchToStock(newStockData, id) {
  const configObject = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newStockData),
  };

  return fetch(`${stocksURL}/${id}`, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Editing this user didn't work. Error message : ${err}`)
    );
}
export default {
  fetchMedicines,
  fetchMedicine,
  fetchPharmas,
  fetchPharma,
  fetchStock,
  fetchUsers,
  fetchUser,
  fetchOrder,
  postToOrders,
  postToOrderMedicines,
  patchToUser,
  postToUsers,
  fetchStocks,
  patchToStock,
};
