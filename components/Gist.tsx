import React from 'react';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';

export type GistProps = {
    id: number;
    title: string;
    author: {
        name: string;
        email: string;
    } | null;
    content: string;
    published: boolean;
};

const Gist: React.FC<{ gist: GistProps }> = ({ gist }) => {
    const authorName = gist.author ? gist.author.name : 'Unknown author';
    return (
        <div onClick={() => Router.push('/p/[id]', `/p/${gist.id}`)}>
            <h2>{gist.title}</h2>
            <small>By {authorName}</small>
            <ReactMarkdown source={gist.content} />
            <style jsx>{`
                div {
                    color: inherit;
                    padding: 2rem;
                }
            `}</style>
        </div>
    );
};

export default Gist;
