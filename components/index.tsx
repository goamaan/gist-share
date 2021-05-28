import { Box, Stack } from '@chakra-ui/layout';
import React, { createContext } from 'react';
import Navbar from './navbar';
import Scroll from './scroll';
import { UseDisclosureReturn } from '@chakra-ui/hooks';

export const NavContext = createContext<UseDisclosureReturn>(null);

const SiteLayout = ({ children }: any) => {
    return (
        <Scroll>
            <Box textStyle="light">
                <Navbar />
            </Box>
            {children}
        </Scroll>
    );
};

export default SiteLayout;
