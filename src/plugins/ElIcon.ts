import { App } from 'vue'
import {
  Location,
  Document,
  Menu,
  Close,
  Setting,
  Fold,
  Expand,
  IceTea,
  Bell,
  PartlyCloudy,
  Pear,
  Bowl,
  Drizzling,
  MostlyCloudy,
  Delete,
  Edit,
} from '@element-plus/icons-vue'

// 所需的组件
export const components = [
  Location,
  Document,
  Menu,
  Close,
  Setting,
  Fold,
  Expand,
  IceTea,
  Bell,
  PartlyCloudy,
  Pear,
  Bowl,
  Drizzling,
  MostlyCloudy,
  Delete,
  Edit,
]
// 注册
export default (app:App<Element>):void => {
  components.forEach((component) => {
    app.component(`el-${component.name}-icon`, component)
  })
}
