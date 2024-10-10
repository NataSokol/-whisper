import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { AuthResponse, User } from "../model";

interface ApiResponse<T> {
  data: T;
  message: string;
}

export class UserService {
  static async refreshAccessToken(): Promise<AuthResponse> {
    const { data, status } = await axiosInstance.get<ApiResponse<AuthResponse>>(
      "/tokens/refresh"
    );

    if (status === 200) {
      setAccessToken(data.data.accessToken);
      return data.data;
    } else {
      throw new Error(data.message);
    }
  }

  static async signIn(email: string, password: string): Promise<AuthResponse> {
    const { data, status } = await axiosInstance.post<
      ApiResponse<AuthResponse>
    >("/auth/signin", {
      email,
      password,
    });
    if (status === 200) {
      setAccessToken(data.data.accessToken);
      return data.data;
    } else {
      throw new Error(data.message);
    }
  }

  static async signUp(email: string, password: string): Promise<AuthResponse> {
    const { data, status } = await axiosInstance.post<
      ApiResponse<AuthResponse>
    >("/auth/signup", {
      email,
      password,
    });
    if (status === 201) {
      setAccessToken(data.data.accessToken);
      return data.data;
    } else {
      throw new Error(data.message);
    }
  }

  static async foget(email: string): Promise<AuthResponse> {
    const { data, status } = await axiosInstance.post<
      ApiResponse<AuthResponse>
    >("/auth/send-letter", {
      email,
    });
    if (status === 201) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  }

  static async updateInfo(
    email: string,
    phone: string,
    name: string,
    surname: string,
    birthday: Date,
    address: string
  ): Promise<{ user: User }> {
    const response = await axiosInstance.put("/user", {
      phone,
      email,
      name,
      surname,
      birthday,
      address,
    });

    setAccessToken(response.data.accessToken);
    return response.data;
  }

  static async logout(): Promise<void> {
    const { data, status } = await axiosInstance.get<ApiResponse<null>>(
      "/auth/logout"
    );
    if (status === 200) {
      setAccessToken("");
    } else {
      throw new Error(data.message);
    }
  }
}
