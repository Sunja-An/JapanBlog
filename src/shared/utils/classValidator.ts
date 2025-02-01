import {
  BlockObjectResponse,
  ChildPageBlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const isBlockObjectResponse = (
  item: PartialBlockObjectResponse | BlockObjectResponse
): item is ChildPageBlockObjectResponse => {
  return (item as ChildPageBlockObjectResponse).child_page !== undefined;
};
