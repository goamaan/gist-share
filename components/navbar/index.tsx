import { Flex, Spacer, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import Actions from './actions';
import Info from './info';

const Navbar = () => {
    return (
        <Flex
            layerStyle="card"
            h="4.5rem"
            roundedBottom={[, , '2xl']}
            alignItems="center"
            p={5}
        >
            <Stack
                direction="row"
                w="full"
                alignItems="center"
                spacing={[0, , 8]}
            >
                <Info display={['flex']} />
                <Spacer />
                <Actions />
            </Stack>
        </Flex>
    );
};

export default Navbar;
