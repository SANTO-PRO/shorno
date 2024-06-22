import GoldPriceInfos from '@/components/section/GoldPriceInfos';
import Hero from '@/components/section/Hero';
import WaitlistForm from '@/components/section/WaitlistForm';

const Home = () => {
	return (
		<>
			<Hero />
			<WaitlistForm />
			<GoldPriceInfos />
		</>
	);
};

export default Home;
