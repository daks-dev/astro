declare type Timeout = string | undefined | number | NodeJS.Timeout;

declare interface Metadata {
  [x: string]: string | null | undefined;
}

declare type ClassName = string | string[] | null | undefined;
