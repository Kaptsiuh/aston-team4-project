const Ash = {
  name: "Ash",
  email: "ash.ketchum@gmail.com",
  password: "pokedex",
  favourtes: ["25"],
};

const localUsers = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [Ash];

export const saveUser = (newUser) => {
  Boolean(
    JSON.parse(localStorage.getItem("localUsers")).find(
      (user) => user === newUser
    )
  ) &&
    localStorage.setItem(
      "localUsers",
      JSON.stringify([...localUsers, newUser])
    );
};

export const setUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};
