import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import { AppsDataContext } from '../../utilities/AppsDataContext';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

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
        <div className='bg-gray-200 flex flex-col min-h-screen'>
            <AppsDataContext.Provider value={appsData}>
                <Header></Header>
                <div className='flex flex-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </AppsDataContext.Provider>

            <ToastContainer />
        </div>
    );
};

export default Root;