export { CollectionService } from "./api";
export type { Collection, CollectionList } from "./model";
import collectionReducer from "./model/collectionSlice";

export { getAllCollections } from "./model/collectionThunk";


export {collectionReducer}