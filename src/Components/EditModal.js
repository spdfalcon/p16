import React, { useEffect } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import ReactDOM from 'react-dom'
export default function EditModal({ children, isSowEditModal, onClose, onSubmit }) {
    useEffect(()=>{
        const checkKey = (event)=>{
            console.log(event);
            if(event.keyCode === 27){
                onClose()
            }
        }
        window.addEventListener('keydown' , checkKey)

        return()=> window.removeEventListener('keydown',checkKey)
    })
    return ReactDOM.createPortal(
        <div className={`w-full h-screen top-0 fixed bg-gray-900/60 flex justify-center items-center font-medium font-lalezar duration-500 ${isSowEditModal ? `opacity-100 visible` : `opacity-0 invisible`}`}>
            <form className='bg-gray-200 px-20 relative py-16 rounded-md flex flex-col gap-5'>
                <div><h2 className='text-xl'>اطلاعات جدید را وارد نمایید</h2></div>
                {children}
                <div onClick={onClose} className='absolute top-2 start-2 cursor-pointer'>
                    <ImCancelCircle className='text-2xl text-red-500'></ImCancelCircle>
                </div>
                <button onClick={onSubmit} className='text-white bg-violet-900 rounded-md py-1'>ثبت اطلاعات جدید</button>
            </form>
        </div>

        , document.getElementById('modals-parent')
    )
}
