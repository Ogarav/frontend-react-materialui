import {createTheme} from '@mui/material'
import { blue, purple, red } from '@mui/material/colors'


export const LightTheme = createTheme({
    palette: {
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
            default:'#CEAFCE',
            paper: '#ffffff',
        }
    }
})