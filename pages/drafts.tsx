import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '../components/index';
import Gist, { GistProps } from '../components/Gist';
import { useSession, getSession } from 'next-auth/client';
import prisma from '../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const session = await getSession({ req });
    if (!session) {
        res.statusCode = 403;
        return { props: { drafts: [] } };
    }

    const drafts = await prisma.gist.findMany({
        where: {
            author: { email: session.user.email },
            private: false,
        },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: { drafts },
    };
};

type Props = {
    drafts: GistProps[];
};

const Drafts: React.FC<Props> = (props) => {
    const [session] = useSession();

    if (!session) {
        return (
            <Layout>
                <h1>My Drafts</h1>
                <div>You need to be authenticated to view this page.</div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="page">
                <h1>My Drafts</h1>
                <main>
                    {props.drafts.map((gist) => (
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

export default Drafts;
