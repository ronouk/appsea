import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import { AppsDataContext } from '../../utilities/AppsDataContext';
import { useEffect, useState } from 'react';

const Root = () => {

    const [appsData, setAppsData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getAppsData = async () => {
            try {
                const res = await fetch("/appsData.json");

                const data = await res.json();
                setAppsData(data);
            }
            catch (error) {
                console.error("Error fetching data", error)
            }
            finally {
                setLoading(false)
            }
        };

        getAppsData();

    }, [])

    return (
        <div className='bg-gray-200'>
            <AppsDataContext.Provider value={appsData}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </AppsDataContext.Provider>
        </div>
    );
};

export default Root;