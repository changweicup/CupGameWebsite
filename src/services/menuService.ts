import request from '../utils/request';
import { MListFilterItems, MenuModelType, Pagination } from './service';

const BASE_SERVICE = '/plat-service';

/**
 * @description: 菜单列表
 * @params {Pagination} pagination
 * @params {MListFilterItems} payload
 * @return {Promise}
 */
export function getMenuList(pagination: Pagination, payload: MListFilterItems): Promise<any> {
  return request({
    url: `${BASE_SERVICE}/menu/lists`,
    method: 'post',
    data: payload,
    params: pagination,
  })
}

/**
 * @description: 菜单新增
 * @params {MenuModelType} payload
 * @return {Promise}
 */
export function createMenu(payload: MenuModelType): Promise<any> {
  return request({
    url: `${BASE_SERVICE}/menu/createMenu`,
    method: 'post',
    data: payload,
  })
}

/**
 * @description: 菜单修改
 * @params {MenuModelType} payload
 * @return {Promise}
 */
export function updateMenu(payload: MenuModelType): Promise<any> {
  return request({
    url: `${BASE_SERVICE}/menu/updateMenu`,
    method: 'put',
    data: payload,
  })
}

/**
 * @description: 菜单删除
 * @params {string} id
 * @return {Promise}
 */
export function deleteMenu(id: string): Promise<any> {
  return request({
    url: `${BASE_SERVICE}/menu/deleteMenu?id=${id}`,
    method: 'delete',
  })
}
