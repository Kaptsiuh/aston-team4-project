import { setUser } from "./login";

const saveUser = (newUser) => {
  const localUsers = JSON.parse(localStorage.getItem("localUsers"));

  if (localUsers.find((user) => user.email === newUser.email)) {
    alert("User with this email exist");
  } else {
    localStorage.setItem(
      "localUsers",
      JSON.stringify([...localUsers, newUser])
    );
  }
};

export const mockRegister = (registerData) => {
  setUser(registerData);
  saveUser(registerData);
};
