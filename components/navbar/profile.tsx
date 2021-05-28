import { Avatar } from '@chakra-ui/avatar';
import { HStack } from '@chakra-ui/layout';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

export type IProfileProps = {
    image: string;
};

const Profile: React.FC<IProfileProps> = ({ image }) => {
    return (
        <HStack alignItems="center">
            <Menu>
                <MenuButton>
                    <Avatar
                        name="anubra266"
                        src={image}
                        size="sm"
                        as="button"
                    />
                </MenuButton>
                <MenuList bg={useColorModeValue('bg.100', 'bg.800')}>
                    <MenuItem>Log out</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};

export { Profile };
