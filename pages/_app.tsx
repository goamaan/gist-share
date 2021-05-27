import { Provider } from 'next-auth/client';
import { AppProps } from 'next/app';
import { Chakra } from './Chakra';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Provider session={pageProps.session}>
                <Component {...pageProps} />
            </Provider>
        </Chakra>
    );
};

export default App;
