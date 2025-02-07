import { DatabaseTitlePropertyType } from "@/entity/database/database";

export function isDatabaseTitlePropertyType(
  data: unknown
): data is DatabaseTitlePropertyType {
  if (typeof data !== "object" || data === null) {
    console.error("data is not object");
    return false;
  }

  if (
    "annotation" in data &&
    typeof (data as DatabaseTitlePropertyType).annotation !== "object"
  ) {
    console.log("data's annotation is not object");
    return false;
  }

  if (
    "href" in data &&
    typeof (data as DatabaseTitlePropertyType).href !== "string" &&
    (data as DatabaseTitlePropertyType).href !== null
  ) {
    console.log("data's href is not string or null");
    return false;
  }

  if (
    "plain_text" in data &&
    typeof (data as DatabaseTitlePropertyType).plain_text !== "string" &&
    (data as DatabaseTitlePropertyType).plain_text !== null
  ) {
    console.log("data's plain_text is not string or null");
    return false;
  }

  if (
    "text" in data &&
    typeof (data as DatabaseTitlePropertyType).text !== "object" &&
    "content" in (data as DatabaseTitlePropertyType).text &&
    typeof (data as DatabaseTitlePropertyType).text.content !== "string" &&
    (data as DatabaseTitlePropertyType).text.content !== null &&
    typeof (data as DatabaseTitlePropertyType).text.href !== "string" &&
    (data as DatabaseTitlePropertyType).text.href !== null
  ) {
    console.log("data's text type is not TitlePropertyContentType");
    return false;
  }

  if ("type" in data && (data as DatabaseTitlePropertyType).type !== "text") {
    console.log("type is not text");
    return false;
  }

  return true;
}
