import { Flex, Stack, StackProps, Text } from '@chakra-ui/layout';
import React from 'react';

const Info = (props: StackProps) => {
    return (
        <Stack direction="row" alignItems="center" {...props}>
            <Flex direction="column" lineHeight="5">
                <Text
                    fontSize="lg"
                    fontWeight="medium"
                    textStyle="default"
                    letterSpacing="widest"
                >
                    gistShare
                </Text>
            </Flex>
        </Stack>
    );
};

export default Info;
