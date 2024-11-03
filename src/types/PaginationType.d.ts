export type TPagination = {
  totalPage: number;
  currPage: number;
  showItems: number;
  onChangePage: (curr: number | ((curr: number) => number)) => void;
};
