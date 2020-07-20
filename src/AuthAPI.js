const baseURL = "http://localhost:3000/api/v1";
const sign_inURL = `${baseURL}/sign-in`;

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

export default { signIn };
