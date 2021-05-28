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
        <Layout>
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
            <style jsx>{`
                .page {
                    background: white;
                    padding: 3rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                input[type='text'],
                textarea {
                    width: 100%;
                    padding: 0.5rem;
                    margin: 0.5rem 0;
                    border-radius: 0.25rem;
                    border: 0.125rem solid rgba(0, 0, 0, 0.2);
                }

                input[type='submit'] {
                    background: #ececec;
                    border: 0;
                    padding: 1rem 2rem;
                }

                .back {
                    margin-left: 1rem;
                }
            `}</style>
        </Layout>
    );
};

export default Draft;
