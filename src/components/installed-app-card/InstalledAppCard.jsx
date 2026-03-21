import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { removeFromLocalStorage } from '../../utilities/localStorage';
import Swal from 'sweetalert2';

const InstalledAppCard = ({ singleApp, installedApps, setInstalledApps }) => {

    const { id, downloads, image, ratingAvg, size, title } = singleApp;



    //sweetalert 2 : confirmation before uninstall

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
            
        },
        buttonsStyling: true
    });

    const handleUninstall = (id) => {


        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            html: `Do you want to uninstall <span class="font-bold">${title}</span>?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, uninstall!",
            cancelButtonText: "No, cancel!",
            reverseButtons: false
        }).then((result) => {

            if (result.isConfirmed) {

                removeFromLocalStorage(id)
                const newInstalledApps = installedApps.filter(app => app.id !== id)
                setInstalledApps(newInstalledApps);

                //fire the confirmation dialogue box
                swalWithBootstrapButtons.fire({

                    title: "Uninstalled!",
                    html: `<span class="font-bold">${title}</span> has been uninstalled.`,
                    icon: "success"
                });

            }

            //fire the cancellation confirmation
            else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
                title: "Cancelled",
                html: `<span class="font-bold">${title}</span> survived the uninstallation.`,
                icon: "error"
            });
        });


    }



    return (
        <div>
            <div className='bg-white p-3 flex items-center justify-between'>
                <div className='flex gap-5 items-center'>
                    <div className='w-12'>
                        <img className='rounded' src={image} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-left text-sm font-semibold'>{title}</h3>
                        <div className='flex gap-3 text-xs'>
                            <div className='text-green-500 flex items-center gap-2'>
                                <FaDownload />
                                <p className='font-semibold'>{downloads}</p>
                            </div>
                            <div className='text-yellow-500 flex items-center gap-2'>
                                <FaStar />
                                <p className='font-semibold'>{ratingAvg}</p>
                            </div>
                            <div className='text-[#627382]'>
                                {size} MB
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleUninstall(id)} className='btn bg-[#00D390] hover:bg-[#04a471] text-white'>Uninstall</button>

            </div>
        </div>
    );
};

export default InstalledAppCard;