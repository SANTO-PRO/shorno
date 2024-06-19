import { Hind_Siliguri, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	variable: '--font-poppins',
});
const siliguri = Hind_Siliguri({
	subsets: ['latin'],
	weight: ['700'],
	variable: '--font-siliguri',
});

export const metadata = {
	title: 'Shorno',
	description: '1 Takay Gold kinen',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${siliguri.variable}`}>
				{children}
			</body>
		</html>
	);
}
