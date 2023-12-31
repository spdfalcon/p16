import React from 'react'
import ReactDOM from 'react-dom'
import { ImCancelCircle } from 'react-icons/im'
export default function DeleteModal({ submitAction, isShowRejectModal, cancelAction, isShowAcceptModal, isSowDeleteModal, title }) {
    return ReactDOM.createPortal(
        <div className={`w-full h-screen top-0 fixed bg-gray-900/60 flex justify-center items-center font-medium font-lalezar duration-500  ${isSowDeleteModal || isShowAcceptModal || isShowRejectModal ? `opacity-100 visible` : `opacity-0 invisible `}`}>
            <div className='bg-gray-200 px-20 relative py-16 rounded-md flex flex-col gap-5'>
                <div><h2 className='text-xl text-center'>{title}</h2></div>
                <div className='flex justify-evenly mt-5 text-white gap-5'>
                    <button onClick={submitAction} className='bg-red-400 px-8 py-1 rounded-md'>بله</button>
                    <button onClick={cancelAction} className='bg-green-400 px-8 py-1 rounded-md'>خیر</button>
                </div>
                <div onClick={cancelAction} className='absolute top-2 start-2 cursor-pointer'>
                    <ImCancelCircle className='text-2xl text-red-500'></ImCancelCircle>
                </div>
            </div>
        </div>

        , document.getElementById('modals-parent')
    )
}
