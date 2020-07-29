const baseURL = "https://gbenga-otc.herokuapp.com/";
const medicinesURL = `${baseURL}/medicines`;
const pharmasURL = `${baseURL}/pharmas`;
const stocksURL = `${baseURL}/stocks`;
const usersURL = `${baseURL}/users`;
const ordersURL = `${baseURL}/orders`;
const orderMedicinesURL = `${baseURL}/order_medicines`;

function fetchWithToken(url, options = {}) {
  return fetch(url, {
    method: options.method,
    headers: {
      ...options.headers,
      Authorization: localStorage.getItem("token"),
    },
    body: options.body,
  });
}

function fetchMedicines() {
  return fetchWithToken(medicinesURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching medicines from the database was unsuccessful. Error message: ${err}`
      )
    );
}
function fetchMedicine(medicineId) {
  return fetchWithToken(`${medicinesURL}/${medicineId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the medicine with ${medicineId} didn't work`)
    );
}
function fetchPharmas() {
  return fetchWithToken(pharmasURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching pharmas from the database was unsuccsesful. Error message ${err}`
      )
    );
}
function fetchPharma(pharmaId) {
  return fetchWithToken(`${pharmasURL}/${pharmaId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the pharma with ${pharmaId} didn't work`)
    );
}
function fetchStock(stockId) {
  return fetchWithToken(`${stocksURL}/${stockId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the stock with ${stockId} didn't work`)
    );
}
function fetchUsers() {
  return fetchWithToken(usersURL)
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

  return fetchWithToken(ordersURL, configObject)
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

  return fetchWithToken(orderMedicinesURL, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Posting this new OrderMedicine didn't work. Error message : ${err}`
      )
    );
}
function fetchUser(userId) {
  return fetchWithToken(`${usersURL}/${userId}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching data for this user was unsuccessful. Error message: ${err}`
      )
    );
}
function fetchOrder(orderId) {
  return fetchWithToken(`${ordersURL}/${orderId}`)
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

  return fetchWithToken(`${usersURL}/${id}`, configObject)
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

  return fetchWithToken(usersURL, configObject)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Creating this new user didn't work. Error message : ${err}`)
    );
}
function fetchStocks() {
  return fetchWithToken(stocksURL)
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

  return fetchWithToken(`${stocksURL}/${id}`, configObject)
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
