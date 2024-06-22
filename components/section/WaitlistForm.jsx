'use client';

import axios from 'axios';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import Button from '../ui/Button';

const WaitlistForm = () => {
	//states
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	const [name, setName] = useState();
	const [isHovered, setIsHovered] = useState(false);

	//handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			Name: name,
			Phone: phone,
			Email: email,
		};

		try {
			const response = await axios.post(
				'https://sheetdb.io/api/v1/8uy6886mh7qho',
				data,
			);

			if (response.status === 201) {
				toast(`Congratulations, you've been added to the waitlist!`, {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
					transition: Bounce,
				});

				setName('');
				setPhone('');
				setEmail('');
			}
		} catch (error) {
			toast.error(`Submitting Error: ${error.message}`, {
				position: 'top-left',
			});
		}
	};

	return (
		<section className="bg-gold-gradient h-fit" id="join">
			<div className="wrapper h-[350px] flex flex-col gap-6 justify-center max-md:py-28 max-md:h-fit">
				<form className="flex gap-4 max-md:flex-col" onSubmit={handleSubmit}>
					<input
						name="Name"
						type="text"
						placeholder="Enter your full name"
						className="input-field w-1/3 max-md:w-full"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>

					<input
						name="Phone"
						type="text"
						placeholder="Enter your phone number"
						className="input-field w-1/3 max-md:w-full"
						required
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>

					<input
						name="Email"
						type="email"
						placeholder="Enter your email address"
						className="input-field w-1/3 max-md:w-full"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Button
						variant="primary"
						type="submit"
						className={`w-1/4 h-15 font-medium gap-1.5 flex-center bg-dark-gradient drop-shadow-sm 
						cursor-pointer max-md:w-full max-lg:h-14 !bg-black  ${
							!isHovered ? 'shine-effect ' : ''
						}`}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						Join
					</Button>
				</form>
			</div>
		</section>
	);
};

export default WaitlistForm;
