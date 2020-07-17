const baseURL = "http://localhost:3000/api/v1";
const medicinesURL = `${baseURL}/medicines`;
const pharmasURL = `${baseURL}/pharmas`;

function fetchMedicines() {
  return fetch(medicinesURL)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(
        `Fetching medicines from the database was unsuccessful. Error message: ${err}`
      )
    );
}
function fetchMedicine(medicine) {
  return fetch(`${medicinesURL}/${medicine.id}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the medicine with ${medicine.id} didn't work`)
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
function fetchPharma(pharma) {
  return fetch(`${pharmasURL}/${pharma.id}`)
    .then((resp) => resp.json())
    .catch((err) =>
      alert(`Fetching data for the pharma with ${pharma.id} didn't work`)
    );
}

export default { fetchMedicines, fetchMedicine, fetchPharmas, fetchPharma };
