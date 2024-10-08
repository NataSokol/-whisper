export type Image = {
    id: number;
    url: string;
    productId: number;
    createdAt: Date;
    updatedAt: Date;
};

export type ImageList = Image[]