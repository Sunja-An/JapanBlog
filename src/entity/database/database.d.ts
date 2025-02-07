export type DatabaseTitlePropertyType = {
  annotation: TitlePropertyAnnotationType;
  href: string | null;
  plain_text: string | null;
  text: TitlePropertyContentType;
  type: "text";
};

export type TitlePropertyAnnotationType = {
  bold: boolean;
  code: boolean;
  color: string | "default";
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
};

export type TitlePropertyContentType = {
  content: string | null;
  href: string | null;
};
