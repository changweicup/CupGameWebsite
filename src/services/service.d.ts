export type MListFilterItems = {
  menu_name: string,
  menu_code: string,
  menu_dsc: string,
  menu_status: string,
};

export type MenuModelType = {
  menu_type: string,
  menu_level: string,
  menu_code: string,
  menu_name: string,
  menu_sort: number,
  menu_icon: string,
  menu_dsc: string,
  menu_status: boolean,
};

export type Pagination = {
  currentPage: number,
  pageSize: number,
};
