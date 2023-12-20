// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { UserOutlined } from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const dashboard: NavItemType = {
  id: 'admin-dashboard',
  title: <FormattedMessage id="admin-dashboard" />,
  type: 'group',
  children: [
    {
      id: 'user',
      title: <FormattedMessage id="user" />,
      type: 'item',
      url: '/user-management',
      icon: icons.UserOutlined
    }
  ]
};

export default dashboard;
