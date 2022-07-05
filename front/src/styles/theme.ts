//eslint-disable-next-line
import { extendTheme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        primary: '#EECD59',
        primaryTwo: '#D9BD30',
        secondary: '#67A277',
        secondaryTwo: '#6F793E',
        title:'#111111',
        text: '#666665',
        placeholder:'#FB9937',
        error:'#FB4D3D',
        success:'#25D970',
        baseDefault : '#FFFFFF',
        bgInput : '#F6F6F7',
        borderInput: '#e0e0e0',
        buttonSchema:{
            500: "#67A277", //background
            600: "#2F855A", //hover            
        },
        blue:{
            500:"#12B699",
            600:"#16759D"
        },
        fonts:{
            heading:'Inter',
            body:'inter'
        },
        fontSizes:{
            xs:'.75rem',
            sm:'.874rem',
            md:'1rem',
            lg:'1.125rem',
            xl:'1.25rem',
            '2xl':'1.875rem',
            '3xl':'1.25rem',
            '4xl':'2.25rem',
            '5xl':'3rem',
            '6xl':'3.75rem',
            '7xl':'4.5rem',
            '8xl':'6rem',
            '9xl':'8rem',
        }
    }
});
