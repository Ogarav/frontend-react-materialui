import {createTheme} from '@mui/material'
import { purple, red } from '@mui/material/colors'


export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary:{
            main: '#362559',
            dark: purple[800],
            light: purple[500],
            contrastText: '#ffffff', 
        },
        secondary:{
            main: red[500],
            dark: red[400],
            light: red[300],
            contrastText: '#ffffff' , 
        },
        background:{
            default:'#303134',
            paper: '#202124',
        },
    },

    typography:{
        allVariants:{
            color: 'white',
        }
    }
});