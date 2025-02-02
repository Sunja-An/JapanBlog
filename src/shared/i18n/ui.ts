export const languages = {
  en: "English",
  ko: "한국어",
  jp: "日本語",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage = "ko";

export const ui = {
  en: {},
  ko: {},
  jp: {},
};
