// const baseURL = "http://localhost:3000/api/v1";
const baseURL = "https://get-it-otc.herokuapp.com/api/v1";

const sign_inURL = `${baseURL}/sign-in`;
const validateURL = `${baseURL}/validate`;

function signIn(signInData) {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(signInData),
  };

  return fetch(sign_inURL, configObject)
    .then((resp) => resp.json())
    .catch((err) => alert(`signing this user in did not work. Error: ${err}`));
}
function validate(token) {
  const configObject = { headers: { Authorization: token } };
  return fetch(validateURL, configObject)
    .then((resp) => resp.json())
    .catch((err) => alert(`validating this user did not work. Error: ${err}`));
}

export default { signIn, validate };
