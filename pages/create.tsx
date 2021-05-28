import React, { useState } from 'react';
import Layout from '../components/index';
import Router from 'next/router';

const Draft: React.FC = () => {
    const [filename, setFilename] = useState('');
    const [code, setCode] = useState('');

    const submitData = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            const body = { filename, code };
            await fetch(`http://localhost:3000/api/post`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            await Router.push('/drafts');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Layout />
            <div>
                <form onSubmit={submitData}>
                    <h1>New Draft</h1>
                    <input
                        autoFocus
                        onChange={(e) => setFilename(e.target.value)}
                        placeholder="File name"
                        type="text"
                        value={filename}
                    />
                    <textarea
                        cols={50}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Code"
                        rows={8}
                        value={code}
                    />
                    <input
                        disabled={!code || !filename}
                        type="submit"
                        value="Create"
                    />
                    <a
                        className="back"
                        href="#"
                        onClick={() => Router.push('/')}
                    >
                        or Cancel
                    </a>
                </form>
            </div>
        </>
    );
};

export default Draft;
