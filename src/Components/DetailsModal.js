import React, { useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import ReactDOM from 'react-dom'
export default function DetailsModal({ isSowDetailsModal, DetailsModalCancel , children }) {
    useEffect(() => {
        const checkKey = (event) => {
            console.log(event);
            if (event.keyCode === 27) {
                DetailsModalCancel()
            }
        }
        window.addEventListener('keydown', checkKey)
        return () => window.removeEventListener('keydown', checkKey)

    });
    return ReactDOM.createPortal(
        <div className={`w-full h-screen top-0 fixed bg-gray-900/60 flex justify-center items-center font-medium font-lalezar duration-500 ${isSowDetailsModal ? `opacity-100 visible ` : `opacity-0 invisible`} `}>
            <div className='bg-gray-200 px-12 w-1/3 h-1/4 relative py-16 rounded-md flex flex-col gap-5'>

                    {children}

                <div onClick={DetailsModalCancel} className='absolute top-2 start-2 cursor-pointer'>
                    <ImCancelCircle className='text-2xl text-red-500'></ImCancelCircle>
                </div>
            </div>
        </div>

        , document.getElementById('modals-parent')
    )
}
