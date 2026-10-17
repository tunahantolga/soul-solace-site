export type ResponsiveImage = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
};

export type GalleryPhoto = {
  thumb: ResponsiveImage;
  full: ResponsiveImage;
  alt: string;
};

export type GalleryGroup = {
  id: string;
  title: string;
  photos: GalleryPhoto[];
};
