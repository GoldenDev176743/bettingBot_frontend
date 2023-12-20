// material-ui
import { useTheme } from '@mui/material/styles';
import { ThemeMode } from 'types/config';

import logoDark from 'assets/images/logo-dark.png';
import logoLight from 'assets/images/logo-light.png';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();

  return <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logoLight} alt="Football" width="200" height="50" />;
};

export default LogoMain;
