import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Icon, IconButton, StackProps } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { NavContext } from '../index';

const NavButton = (props: StackProps) => {
    const { onToggle, isOpen } = useContext(NavContext);
    const icon = isOpen ? CloseIcon : HamburgerIcon;
    return (
        <IconButton
            colorScheme="brand"
            variant="ghost"
            fontSize="2xl"
            aria-label="Toggle Actions"
            icon={<Icon as={icon} />}
            transition="all .4s ease-in-out"
            onClick={onToggle}
        />
    );
};

export default NavButton;
