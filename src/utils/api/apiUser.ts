import axios from "axios";

const server = axios.create({
  baseURL: process.env.VITE_BASE_API_URL,
});

export const apiGetUsersList = async () => {
  try {
    const res = await server.get("/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetUsersListById = async (userId: number) => {
  try {
    const res = await server.get(`/users/${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiPostUsersRegister = async (email_address: string) => {
  try {
    const res = await server.post("/users/register", { email_address });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

interface Confirm {
  token?: string;
  email?: string;
}

export const apiPostUsersConfirm = async (confirmData: Confirm) => {
  const { token, email } = confirmData;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await server.put(
      "/users/confirm",
      { email_address: email },
      config
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

interface IChangedValue {
  username: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

export const apiPutUsersById = async (
  userId: number,
  changedData: IChangedValue
) => {
  try {
    const res = await server.put(`/users/${userId}`, { ...changedData });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetUsersLogin = async (username: string, password: string) => {
  try {
    const res = await server.post("/users/login", { username, password });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiGetUsersForgotPassword = async (email_address: string) => {
  try {
    const res = await server.patch("/users/:user_id/forgotPassword", {
      email_address,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
