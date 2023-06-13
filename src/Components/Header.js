import React from 'react'
import { BsSun } from 'react-icons/bs'
import { AiOutlineBell } from 'react-icons/ai'
export default function Header() {
    return (
        <div className=''>
            <div className='p-5 flex justify-between shadow-xl'>
                <div className='r flex gap-3 items-center'>
                    <div className='w-10 h-10 overflow-hidden rounded-full'>
                        <img src="/images/1.jpg" alt="" />
                    </div>
                    <div>
                        <h3>محمدرضا گودرزی</h3>
                        <p className='text-gray-500'>برنامه نویس فرانت اند</p>
                    </div>
                </div>
                <div className='l flex gap-3 items-center'>
                    <div className='border p-1 rounded-xl bg-white'>
                        <input className=' focus:outline-none p-2 ' placeholder='جستجو کنید...' type="text" name="" id="" />
                        <button className='bg-violet-900 text-white px-4 py-1 rounded-md'>جستجو</button>
                    </div>
                    <div className='bg-violet-900 p-2 rounded-xl text-white'>
                        <AiOutlineBell className='text-xl'></AiOutlineBell>
                    </div>
                    <div className='bg-violet-900 p-2 rounded-xl text-white'>
                        <BsSun className='text-xl'></BsSun>
                    </div>
                </div>
            </div>
        </div>
    )
}
