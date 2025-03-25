import { publicUrl } from "./apiClient";

export async function login(body: { email: string; password: string }) {
  try {
    const response = await publicUrl.post("/user/login", {
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to login:", error);
    throw Error;
  }
}

export async function register(body: {
  username: string;
  email: string;
  phone_number: string;
  role: string;
  password: string;
}) {
  try {
    const response = await publicUrl.post("/api/register", {
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to register:", error);
    throw Error;
  }
}
