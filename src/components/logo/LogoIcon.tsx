// material-ui
import { useTheme } from '@mui/material/styles';
import { ThemeMode } from 'types/config';

import logoIcon from 'assets/images/logo.png';

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return <img src={theme.palette.mode === ThemeMode.DARK ? logoIcon : logoIcon} alt="Mantis" width="50" height="35" />;
};

export default LogoIcon;
