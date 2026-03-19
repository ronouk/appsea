import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import { AppsDataContext } from '../../utilities/AppsDataContext';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { FidgetSpinner } from 'react-loader-spinner';

const Root = () => {

    const [appsData, setAppsData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getAppsData = async () => {
            try {
                const res = await fetch("/appsData.json");

                if (!res.ok) throw new Error("Data not found");

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
        <div className='bg-gray-200 text-slate-900 flex flex-col min-h-screen max-w-full'>
            <AppsDataContext.Provider value={appsData}>
                <Header></Header>
                <div className='flex flex-1 relative'>
                    {loading ?
                        <div className='flex items-center justify-center mx-auto'>
                            <FidgetSpinner
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="fidget-spinner-loading"
                                wrapperStyle={{}}
                                wrapperClass="fidget-spinner-wrapper"
                            />
                        </div>
                        :
                        <Outlet></Outlet>}
                </div>
                <Footer></Footer>
            </AppsDataContext.Provider>

            <ToastContainer autoClose={1000} />
        </div>
    );
};

export default Root;