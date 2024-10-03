export type Collection = {
  id: number;
  title: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CollectionCreate = Omit<
  Collection,
  "id" | "createdAt" | "updatedAt"
>;

export type CollectionList = Collection[];

export type CollectionResponse = {
  message: string;
  collection: Collection;
};

export type CollectionListResponse = {
  message: string;
  collections: Collection[];
};
