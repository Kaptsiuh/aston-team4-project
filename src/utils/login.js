import { setUser } from "./mockUsers";

export const login = (loginData, loginCallback) => {
  const localUsers = JSON.parse(localStorage.getItem("localUsers"));
  const localUser = localUsers.filter(
    (user) => user.email === loginData.email
  )[0];

  if (localUser) {
    if (localUser.password !== loginData.password) {
      alert("Incorrect password");
      return;
    }
    setUser(localUser);
    loginCallback();
    return;
  } else {
    alert("User does not exist");
    return;
  }
};
