
import { ReactNode } from 'react';
import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';


import { useDrawerContext } from '../contexts/DrawerContext';


interface ILayoutBaseDePaginaProps {
  titulo: string;
  children: ReactNode;
  barraDeFerramentas?: ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerramentas }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          overflow="hidden" //faz com que o texto suma quando acabar o espaço
          whiteSpace="nowrap" //faz com que o texto grande não quebre em linha quando o bloco for menor que ele
          textOverflow="ellipses" // mostra três pontos no final do texto cortado 
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && (
        <Box>
          {barraDeFerramentas}
        </Box>
      )}
      
      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
    /* overflow neste campo faz com que apenas esse iten contenha scroll, 
    e não o conteúdo da página toda */
  );
};