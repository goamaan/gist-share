import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/index';
import Gist, { GistProps } from '../components/Gist';
import prisma from '../lib/prisma';
import { Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { Textarea } from '@chakra-ui/textarea';

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.gist.findMany({
        where: {
            private: false,
        },
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
    });

    return {
        props: { feed },
    };
};

type Props = {
    feed: GistProps[];
};

const Blog: React.FC<Props> = ({ feed }) => {
    console.log(feed);

    return (
        <Layout>
            <Text
                fontSize={['xl', '2xl', '3xl']}
                fontWeight="light"
                textAlign="center"
                mt="3"
            >
                Public Feed
            </Text>
            {feed.map((post) => (
                <Flex>
                    <Flex
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                        key={post.id}
                        maxW="70vw"
                    >
                        <Flex justifyContent="center" alignItems="center">
                            <Avatar
                                name={post.author.name}
                                src={post.author.image}
                                size="sm"
                                as="button"
                            />
                            <Text pl="2" fontSize="sub">
                                {post.author.name} /{' '}
                            </Text>
                            <Text>{post.filename}</Text>
                        </Flex>
                        <Textarea
                            value={post.code}
                            disabled
                            _disabled={{ _hover: { cursor: 'pointer' } }}
                            size="sm"
                            resize="none"
                        />
                    </Flex>
                </Flex>
            ))}
        </Layout>
    );
};

export default Blog;
