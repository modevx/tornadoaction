import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
