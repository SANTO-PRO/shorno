import Button from '../ui/Button';

const WaitlistForm = () => {
	return (
		<section className="bg-gold-gradient h-fit" id="join">
			<div className="wrapper h-[350px] flex flex-col gap-6 justify-center">
				<p className="p-medium-16">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor
					sequi fuga repellat ducimus deleniti possimus nisi non tempora
				</p>

				<form className="flex gap-4 max-md:flex-col">
					<input
						type="number"
						placeholder="Enter your phone number"
						className="input-field w-1/2"
						required
					/>

					<input
						type="phone"
						placeholder="Enter your email address"
						className="input-field w-1/2"
					/>

					<Button
						variant="primary"
						type="submit"
						className="w-1/4 h-15 rounded-2xl font-medium flex gap-1.5 flex-center bg-dark-gradient drop-shadow-sm"
					>
						Register for the waitlist
					</Button>
				</form>
			</div>
		</section>
	);
};

export default WaitlistForm;
