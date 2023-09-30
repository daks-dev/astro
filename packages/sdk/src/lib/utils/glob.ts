type MetadataMap = Record<string, Metadata>;
type ImageMetaExt = { src: ImageMetadata; meta: Metadata };

export const imageExtnames = [
  '.heic',
  '.heif',
  '.avif',
  '.jpeg',
  '.jpg',
  '.png',
  '.tiff',
  '.webp',
  '.gif'
];
export const imagePattern = `(${imageExtnames.map((val) => val.substring(1)).join('|')})`;

export function globIndex(data: Record<string, unknown>): string[] {
  return Object.keys(data).map((val) => val.replace(/.+\/(.+)/g, '$1'));
}

export function globInfoMap(idxs: string[], data: Record<string, unknown>): MetadataMap {
  return idxs.reduce(
    (acc, key) => (
      Object.values(data).forEach(
        (val) =>
          (acc[key] = {
            ...acc[key],
            ...(val as MetadataMap)[key]
          })
      ),
      acc
    ),
    <MetadataMap>{}
  );
}

export function globDataSet(
  idxs: string[],
  metas: MetadataMap,
  glob: Record<string, unknown>
): Metadata[] {
  const data = Object.values(glob);
  return idxs.reduce(
    (acc, key, idx) => (
      (acc[idx] = {
        ...(data[idx] as Metadata),
        ...metas[key]
      }),
      acc
    ),
    Array<Metadata>(0)
  );
}

export function globImageSet(
  idxs: string[],
  meta: MetadataMap,
  glob: Record<string, ImageMetadata>
): ImageMetaExt[] {
  const data = Object.values(glob);
  return idxs.reduce(
    (acc, key, idx) => (
      (acc[idx] = {
        src: data[idx],
        meta: meta[key]
      }),
      acc
    ),
    Array<ImageMetaExt>(0)
  );
}
