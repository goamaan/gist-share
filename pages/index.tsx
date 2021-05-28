import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/index';
import Gist, { GistProps } from '../components/Gist';
import prisma from '../lib/prisma';

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
            <div className="page">
                <h1>Public Feed</h1>
                <main>
                    {props.feed.map((gist) => (
                        <div key={gist.id} className="post">
                            <Gist gist={gist} />
                        </div>
                    ))}
                </main>
            </div>
            <style jsx>{`
                .post {
                    background: white;
                    transition: box-shadow 0.1s ease-in;
                }

                .post:hover {
                    box-shadow: 1px 1px 3px #aaa;
                }

                .post + .post {
                    margin-top: 2rem;
                }
            `}</style>
        </Layout>
    );
};

export default Blog;
