export type ResponsiveImage = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

export type GalleryPhoto = {
  image: ResponsiveImage;
  alt: string;
};
