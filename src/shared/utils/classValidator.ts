import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const isChildObjectResponse = (
  item: PartialBlockObjectResponse | BlockObjectResponse
): item is ChildPageBlockObjectResponse => {
  return (item as ChildPageBlockObjectResponse).child_page !== undefined;
};

export const isBlockObjectResponse = (
  item: PartialBlockObjectResponse | false
): item is BlockObjectResponse => {
  return (item as BlockObjectResponse).created_by !== undefined;
};

export const isDatabaseObjectResponse = (
  item:
    | DatabaseObjectResponse
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | false
): item is DatabaseObjectResponse => {
  return (item as DatabaseObjectResponse).id !== undefined;
};
