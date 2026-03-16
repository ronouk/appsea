import TrendingApps from '../../components/trending-apps/TrendingApps';
import Hero from '../../components/Hero/Hero';
import Statistics from '../../components/statistics/Statistics';

const Home = () => {

    return (
        <div className=''>
            <Hero></Hero>
            <Statistics></Statistics>
            <div className='w-5/6 lg:w-3/4 mx-auto'>
                <TrendingApps></TrendingApps>
            </div>

        </div>
    );
};

export default Home;