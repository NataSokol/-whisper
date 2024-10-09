import { axiosInstance } from "@/shared/lib/axiosInstance";

export class ColorServices {
  static getAllColors = async () => {
    const response = await axiosInstance.get("/colors");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to get colors");
    }
  };

  static getOneColor = async (id: number) => {
    const response = await axiosInstance.get(`/colors/${id}`);
    if (response.status === 200) {
      console.log(response.data);
      
      return response.data;
    } else {
      throw new Error("Failed to get color");
    }
  };

  static createColor = async (title: string, colorCode: string, productId: number) => {
    const response = await axiosInstance.post("/colors", { title, colorCode, productId });
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error("Failed to create color");
    }
  };

  static updateColor = async (id: number, title: string, code: string) => {
    const response = await axiosInstance.put(`/colors/${id}`, { title, code });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to update color");
    }
  };
}
