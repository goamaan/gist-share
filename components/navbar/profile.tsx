import { Avatar, AvatarBadge } from '@chakra-ui/avatar';
import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import { IoIosArrowDown } from 'react-icons/io';

export type IProfileProps = {
    image: string;
};

const Profile: React.FC<IProfileProps> = ({ image }) => {
    return (
        <HStack alignItems="center">
            <Avatar name="anubra266" src={image} size="sm">
                <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
            <Icon as={IoIosArrowDown} />
        </HStack>
    );
};

export { Profile };
