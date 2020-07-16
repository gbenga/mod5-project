const baseURL = "http://localhost:3000/api/v1";
const medicinesURL = `${baseURL}/medicines`;

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

export default { fetchMedicines, fetchMedicine };
