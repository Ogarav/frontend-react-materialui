/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { Avatar, Box, Drawer, useTheme } from "@mui/material"

interface IMenuLAteralProps {
    children: React.ReactNode;
}
export const MenuLAteral: React.FC <IMenuLAteralProps> = ({children}) => {
    const theme = useTheme();
    return (
        <> 
        <Drawer variant='permanent'>
            <Box width = {theme.spacing(28)}>

                <Box width="100%" height={theme.spacing(20)} display="flex" alignItens= "center" justifyContent="center">
                <Avatar src="/home/ogarav/Downloads/2024-10-25_23-59.png" /> 
                </Box>
            </Box>
        </Drawer>
        <Box height="100vh" marginLeft={theme.spacing(28)}> 
            {children}
        </Box>
        </>
    );
};