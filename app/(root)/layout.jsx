import Footer from '@/components/shared/Footer';
import GoldConverter from '@/components/shared/GoldConverter';
import Header from '@/components/shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = ({ children }) => {
	return (
		<div className="flex h-screen flex-col">
			<Header />
			<main className="flex-1">{children}</main>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<GoldConverter />
			<Footer />
		</div>
	);
};

export default RootLayout;
