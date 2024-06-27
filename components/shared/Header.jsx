'use client';

import { scrollToSection } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	return (
		<header className="w-full  bg-[#04070D]">
			<div className="flex items-center justify-between wrapper">
				{/* logo */}
				<Link href="/" className="w-42 max-md:w-36">
					<Image
						src="/assets/images/logo.svg"
						alt="Fix Phone logo"
						width={200}
						height={100}
						className=" w-38 sm:w-46 "
					/>
				</Link>

				<div className="flex-center gap-10 max-md:gap-5">
					<li
						className="rounded-full py-1 text-[#FFF0BC] max-md:text-sm cursor-pointer"
						onClick={() => scrollToSection('gold-price-infos')}
					>
						Gold Prices
					</li>
				</div>
			</div>
		</header>
	);
};

export default Header;
