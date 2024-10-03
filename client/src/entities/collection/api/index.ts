import { CollectionListResponse } from "../model";

export class CollectionService {
  static async geyAllCollections() {
    const response = await axiosInstance.get<CollectionListResponse>(
      "/collections"
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.data.message);
    }
  }
}
