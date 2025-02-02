export type NotionChildrenType = {
  object: string;
  results: NotionSingleChildrenType[];
  next_cursor: string | null;
  has_more: boolean;
  type: string;
  block: {};
  request_id: string;
};

export type NotionSingleChildrenType = {
  object: string;
  id: string;
  parent: NotionChildrenInnerParentType;
  created_time: string;
  last_edited_time: string;
  created_by: NotionChildrenInnerCreatedByType;
  last_edited_by: NotionChildrenInnerEditedByType;
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
  type: string;
  child_page: NotionChildrenInnerChildPageType;
};

type NotionChildrenInnerParentType = {
  type: string;
  page_id: string;
};

type NotionChildrenInnerCreatedByType = {
  object: string;
  id: string;
};

type NotionChildrenInnerEditedByType = {
  object: string;
  id: string;
};

type NotionChildrenInnerChildPageType = {
  title: string;
};
