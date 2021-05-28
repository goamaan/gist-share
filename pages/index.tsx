import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/index';
import Gist, { GistProps } from '../components/Gist';
import prisma from '../lib/prisma';
import { Text } from '@chakra-ui/layout';

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.gist.findMany({
        where: {
            private: true,
        },
        include: {
            author: {
                select: {
                    name: true,
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

const Blog: React.FC<Props> = (props) => {
    return (
        <Layout>
            <Text>sfsdifnason</Text>
        </Layout>
    );
};

export default Blog;
