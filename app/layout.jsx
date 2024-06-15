import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito_sans = Nunito_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-nunito_sans',
});

export const metadata = {
	title: 'Shorno',
	description: '1 Takay Gold kinen',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={nunito_sans.className}>{children}</body>
		</html>
	);
}
