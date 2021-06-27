export const loginCall = async (userCredentials, dispatch) => {
  // const email = userCredentials.email;
  // const pass = userCredentials.password;

  dispatch({ type: "LOGIN_START" });
  console.log(userCredentials);
  try {
    const response = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data = await response.json();
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
    console.log(data);
    console.log(response);
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};
