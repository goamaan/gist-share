import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const styles = {
    global: (props: any) => ({
        body: {
            fontFamily: 'body',
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('gray.100', '#141214')(props),
            minH: '100%',
        },
        html: {
            minH: '100%',
        },
    }),
};

const theme = extendTheme({ config, styles, breakpoints });
export default theme;
