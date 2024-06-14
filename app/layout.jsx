import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-nunito_sans',
});

export const metadata = {
	title: 'Fix Phone',
	description: 'Fix Your Phone Within 15-40 Minutes While You’re Shopping',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={nunito_sans.className}>{children}</body>
		</html>
	);
}
