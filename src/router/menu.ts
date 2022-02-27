export interface MenuRecordRaw {
  path: string,
  name: string,
  title?: string,
  icon?: string,
  children?: Array<MenuRecordRaw>
}

export const menus: Array<MenuRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    title: 'Dashboard',
    icon: 'Drizzling'
  },
  {
    path: '/authority',
    name: 'Authority',
    title: '系统管理',
    icon: 'Drizzling',
    children: [
      {
        path: '/authority/users',
        name: 'Users',
        title: '用户列表',
        icon: 'Bowl'
      },
      {
        path: '/authority/roles',
        name: 'Roles',
        title: '角色列表',
        icon: 'Bowl'
      },
      {
        path: '/authority/resource',
        name: 'Resource',
        title: '资源列表',
        icon: 'Bowl'
      }
    ]
  },
  {
    path: '/app-vue2',
    name: 'app-vue2',
    title: 'app-vue2',
    icon: 'Drizzling'
  },
  {
    path: '/app-vue3',
    name: 'app-vue3',
    title: 'app-vue3',
    icon: 'Drizzling'
  }
]
