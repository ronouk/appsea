import TrendingApps from '../../components/trending-apps/TrendingApps';
import Hero from '../../components/Hero/Hero';
import Statistics from '../../components/statistics/Statistics';

const Home = () => {

    return (
        <div className='w-full'>
            <Hero></Hero>
            <Statistics></Statistics>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;