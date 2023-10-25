type ImageFormat =
  | 'heic'
  | 'heif'
  | 'avif'
  | 'jpeg'
  | 'jpg'
  | 'png'
  | 'tiff'
  | 'webp'
  | 'gif'
  | 'svg';

type ImageQuality = 'low' | 'mid' | 'high' | 'max' | number;

declare type ImageTransform = {
  width?: number;
  height?: number;
  quality?: ImageQuality;
  format?: ImageFormat;
};

declare interface ImageMetadata {
  src: string;
  width: number;
  height: number;
  format?: ImageFormat;
  orientation?: number;
}

declare interface ImageResult {
  src: string;
  attributes: Metadata;
}
