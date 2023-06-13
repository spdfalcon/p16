import React, { useEffect, useState } from 'react'
import Errorbox from './Errorbox'
import DetailsModal from './DetailsModal'
export default function Comments() {
  const [allComments , setAllComments] = useState([])
  const [isSowDetailsModal , setIsSowDetailsModal] = useState(false)
  const [mainCommentInfo ,setMainCommentInfo ] = useState({})


  useEffect(()=>{
    fetch(`http://localhost:8000/api/comments`)
    .then(res=>res.json())
    .then(Comment=>{
      setAllComments(Comment)
    })
  } , [])


  const DetailsModalCancel = ()=>{
    setIsSowDetailsModal(false)
  }
  return (
    <div>
      {
        allComments.length ?(

      <div className='bg-white rounded-md p-4 mt-5 '>
        <table className='w-full text-center '>
          <thead>
            <tr className=''>
              <th>اسم کارب</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
              <th>جزئیات</th>
            </tr>
          </thead>
          <tbody>
            {
              allComments.map(comment=>(
            <tr key={comment.id} className=''>
              <td className=''>{comment.userID}</td>
              <td>{comment.productID}</td>
              <td><button onClick={()=>{
                setMainCommentInfo(comment)
                setIsSowDetailsModal(true)
              }} className='bg-violet-900 rounded-md px-4 py-1 text-white'>دیدن متن</button></td>
              <td>{comment.date}</td>
              <td>{comment.hour}</td>
              <td className=' h-20 flex justify-center gap-2 text-white items-center'>
                <button className='bg-violet-900 rounded-md px-4 py-1'>حذف</button>
                <button className='bg-violet-900 rounded-md px-4 py-1'>ویرایش</button>
                <button className='bg-violet-900 rounded-md px-4 py-1'>پاسخ</button>
                <button className='bg-violet-900 rounded-md px-4 py-1'>تایید</button>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
        ) : (
          <Errorbox msg='هیج کامنتی یافت نشد'></Errorbox>
        )
      }

      <DetailsModal DetailsModalCancel={DetailsModalCancel} isSowDetailsModal={isSowDetailsModal}>
        <div className='w-full h-full flex justify-center items-center'>
        <p>{mainCommentInfo.body}</p>
        </div>
      </DetailsModal>
      
    </div>
  )
}