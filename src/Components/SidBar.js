import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import {BsBasket} from 'react-icons/bs'
import {BsTicketPerforated} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function SidBar() {
    return (
        <div className='  bg-violet-900 text-white h-screen shadow-2xl shadow-blue-800'>
            <div className=' '>
                <div className='border-b-2 p-3 px-10'>
                    <h3> به داشبورد خوش آمدید </h3>
                </div>
                <div className= 'flex flex-col gap-2 mt-5'>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-violet-950 duration-300  p-2 bg-violet-950'>
                        <div className='text-xl'><AiOutlineHome></AiOutlineHome></div>
                        <Link className='w-full' to={'/'}>صفحه اصلی</Link>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-violet-950 duration-300  p-2 mt-5'>
                        <div className='text-xl'><AiOutlineFolderOpen></AiOutlineFolderOpen></div>
                        <Link className='w-full' to={'/products'}>محصولات</Link>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-violet-950 duration-300  p-2'>
                        <div className='text-xl'><AiOutlineMail></AiOutlineMail></div>
                        <Link className='w-full' to={'/comments'}>کامنت ها</Link>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-violet-950 duration-300  p-2'>
                        <div className='text-xl'><FiUsers></FiUsers></div>
                        <Link className='w-full' to={'/users'}>کاربران</Link>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-violet-950 duration-300  p-2'>
                        <div className='text-xl'><BsBasket></BsBasket></div>
                        <Link className='w-full' to={'/orders'}>سفارشات</Link>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:bg-violet-950 duration-300  p-2'>
                        <div className='text-xl'><BsTicketPerforated></BsTicketPerforated></div>
                        <Link className='w-full' to={'/offs'}>تخفیف ها</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
