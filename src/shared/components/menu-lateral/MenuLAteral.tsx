import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../contexts";

interface IMenuLateralProps {
    children: React.ReactNode;
}
export const MenuLateral: React.FC <IMenuLateralProps> = ({children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext ();

    return (
        <> 
        <Drawer open={isDrawerOpen} variant={smDown ?'temporary':'permanent'} onClose={toggleDrawerOpen}>
            <Box width = {theme.spacing(28)} height="100%" display="flex" flexDirection="column">

            <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                <Avatar 
                sx={{height: theme.spacing(12),width: theme.spacing(12)}}
                src="data:image/jpeg;base64,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" /> 
                </Box>

                <Divider />

                <Box flex={1}>
                    <List component="nav">
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>home</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Página inicial" />
                        </ListItemButton>

                    </List>

                </Box>

            </Box>
        </Drawer>
        <Box height="100vh" marginLeft={ smDown ? 0 : theme.spacing(28)}> 
            {children}
        </Box>
        </>
    );
};