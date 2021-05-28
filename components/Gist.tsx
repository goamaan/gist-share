import React from 'react';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';

export type GistProps = {
    id: number;
    filename: string;
    author: {
        name: string;
        email: string;
        image: string;
    };
    code: string;
    private: boolean;
};

const Gist: React.FC<{ gist: GistProps }> = ({ gist }) => {
    const authorName = gist.author ? gist.author.name : 'Unknown author';
    return (
        <div onClick={() => Router.push('/p/[id]', `/p/${gist.id}`)}>
            <h2>{gist.filename}</h2>
            <small>By {authorName}</small>
            <ReactMarkdown source={gist.code} />
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
