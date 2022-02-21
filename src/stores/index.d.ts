import { ITabsViewState } from './tabsView'
import { CommonState } from './commonStore'

export interface IStore {
  tabsView: ITabsViewState;
  CommonState: CommonState;
}
