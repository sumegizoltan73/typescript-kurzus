export type Album = {
  userId: number;
  id: number;
  title: string;
  photos?: Array<Photo>;
};

export type Photo = {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};