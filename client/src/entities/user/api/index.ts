import { axiosInstance, setAccessToken } from '@/shared/lib/axiosInstance';
import { AuthResponse } from '../model';

interface ApiResponse<T> {
  data: T;
  message: string;
}

export class UserService {
  static async refreshAccessToken(): Promise<AuthResponse> {
    const { data, status } = await axiosInstance.get<ApiResponse<AuthResponse>>(
      '/tokens/refresh'
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
    >('/auth/signin', {
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

  static async signUp(
    username: string,
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const { data, status } = await axiosInstance.post<
      ApiResponse<AuthResponse>
    >('/auth/signup', {
      username,
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

  static async logout(): Promise<void> {
    const { data, status } = await axiosInstance.get<ApiResponse<null>>(
      '/auth/logout'
    );
    if (status === 200) {
      setAccessToken('');
    } else {
      throw new Error(data.message);
    }
  }
}