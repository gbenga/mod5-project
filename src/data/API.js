const baseURL = "http://localhost:3000/api/v1";
const medicinesURL = `${baseURL}/medicines`;
const pharmasURL = `${baseURL}/pharmas`;
const stocksURL = `${baseURL}/stocks`;
const usersURL = `${baseURL}/users`;
const ordersURL = `${baseURL}/orders`;

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

export default {
  fetchMedicines,
  fetchMedicine,
  fetchPharmas,
  fetchPharma,
  fetchStock,
  fetchUsers,
  postToOrders,
};
