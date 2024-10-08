import { axiosInstance } from "@/shared/lib/axiosInstance";

export class UserInfoServices {
  static async getUserInfo() {
    const response = await axiosInstance.get("/user");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get products");
    }
  }
}
