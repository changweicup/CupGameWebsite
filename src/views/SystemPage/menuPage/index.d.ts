export type filterItem = {
  menu_name: string,
  menu_code: string,
  menu_dsc: string,
  menu_status: string,
}

export interface User {
  id: number
  date: string
  name: string
  hasChildren?: boolean
  children?: User[]
}