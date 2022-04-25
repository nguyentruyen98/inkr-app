import type { AppProps } from 'next/app';

import 'antd/dist/antd.css';
import '../../styles/main.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return <Component className="appStyle" {...pageProps} />;
}

export default MyApp;
