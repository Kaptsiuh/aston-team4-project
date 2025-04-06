const localUsers = JSON.parse(localStorage.getItem("localUsers"));

export const setUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const login = (loginData, loginCallback) => {
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
