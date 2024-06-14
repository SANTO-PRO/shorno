import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const Header = () => {
	return (
		<header className="w-full  bg-[#0d0d0d]">
			<div className="flex items-center justify-between wrapper">
				{/* logo */}
				<Link href="/" className="w-42">
					<Image
						src="/assets/images/logo.svg"
						alt="Fix Phone logo"
						width={200}
						height={100}
						className=" w-38 sm:w-46 "
					/>
				</Link>

				<div className="flex-center gap-4">
					<Button className="gold-bg rounded-full py-1 !text-black !font-bold">
						Investment Guide
					</Button>
					<Button className="gold-bg rounded-full py-1 !text-black !font-bold">
						SignUp
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
