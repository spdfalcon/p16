import React, { useEffect, useState } from 'react'
import Errorbox from './Errorbox'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import DetailsModal from './DetailsModal'
import { AiOutlineDollarCircle } from 'react-icons/ai'
export default function Users() {
  const [users, setUsers] = useState([])
  const [isSowDeleteModal, setIsSowDeleteModal] = useState(false)
  const [isSowEditModal, setIsSowEditModal] = useState(false)
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
  const [mainIDUser, setMainIDUser] = useState(null)
  const [mainUserInfos, setMainUserInfos] = useState({})

  const [newfirsnameUser, setnewfirsnameUser] = useState('')
  const [newlastnameUser, setnewlastnameUser] = useState('')
  const [newusernameUser, setnewusernameUser] = useState('')
  const [newpasswordUser, setnewpasswordUser] = useState('')
  const [newphoneUser, setnewphoneUser] = useState('')
  const [newcityUser, setnewcityUser] = useState('')
  const [newemailUser, setnewemailUser] = useState('')
  const [newaddressUser, setnewaddressUser] = useState('')
  const [newscoreUser, setnewscoreUser] = useState('')
  const [newbuyUser, setnewbuyUser] = useState('')
  useEffect(() => {
    getAllUser()
  }, [])
  const getAllUser = () => {
    fetch('http://localhost:8000/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })

  }

  const DetailsModalCancel = ()=>{
    setIsShowDetailsModal(false)
  }
  
  const onClose = () => {
    setIsSowEditModal(false)
  }
  const onSubmit = (e) => {
    const newUserInfo = {
      firsname: newfirsnameUser,
      lastname: newlastnameUser,
      username: newusernameUser,
      password: newpasswordUser,
      phone: newphoneUser,
      city: newcityUser,
      email: newemailUser,
      address: newaddressUser,
      score: newscoreUser,
      buy: newbuyUser
    }
    fetch(`http://localhost:8000/api/users/${mainIDUser}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserInfo)
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        getAllUser()
      })
    e.preventDefault()
    setIsSowEditModal(false)
  }
  const cancelAction = () => {
    setIsSowDeleteModal(false)
  }
  const submitActionUsers = () => {
    console.log(mainIDUser);
    fetch(`http://localhost:8000/api/users/${mainIDUser}`, {
      method: 'DELETE'
    }).then(res => res.json())
      .then(result => {
        console.log(result);
        setIsSowDeleteModal(false)
        getAllUser()
      })
  }


  
  return (
    <div>

      {
        users.length ? (
          <div className='mt-10 '>
            <h2 className='text-2xl'>لیست کاربران</h2>
            <div className='bg-white p-2 mt-10'>
              <table className='w-full mt-5 text-center'>
                <thead className=''>
                  <tr className='h-20'>
                    <th>نام و نام خانوادگی</th>
                    <th>یوزرنیم</th>
                    <th>رمز عبور</th>
                    <th>شماره تماس</th>
                    <th>ایمیل</th>
                  </tr>
                  {
                    users.map((user) => (
                      <tr key={user.id} className='h-20'>
                        <td>{user.firsname} {user.lastname}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>
                          <div className='flex justify-center gap-2 text-white'>
                            <button onClick={() => {
                              setMainUserInfos(user)
                              setIsShowDetailsModal(true)
                            }} className='bg-violet-900 px-4 py-1 rounded-md'>جزئیات</button>
                            <button onClick={() => {
                              setMainIDUser(user.id)
                              setIsSowDeleteModal(true)
                            }} className='bg-violet-900 px-4 py-1 rounded-md'>حذف</button>
                            <button onClick={() => {
                              setMainIDUser(user.id)
                              setnewfirsnameUser(user.firsname)
                              setnewlastnameUser(user.lastname)
                              setnewusernameUser(user.username)
                              setnewpasswordUser(user.password)
                              setnewphoneUser(user.phone)
                              setnewcityUser(user.city)
                              setnewemailUser(user.email)
                              setnewaddressUser(user.address)
                              setnewscoreUser(user.score)
                              setnewbuyUser(user.buy)
                              setIsSowEditModal(true)
                            }} className='bg-violet-900 px-4 py-1 rounded-md'>ویرایش</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </thead>
              </table>
            </div>
          </div>
        ) : (
          <Errorbox msg='هیج کاربری یافت نشد'></Errorbox>

        )
      }
      <DeleteModal isSowDeleteModal={isSowDeleteModal} title={`کاربر حذف شود؟`} cancelAction={cancelAction} submitAction={submitActionUsers}></DeleteModal>

      <EditModal isSowEditModal={isSowEditModal} onClose={onClose} onSubmit={onSubmit}>
        <div className='flex flex-col gap-4'>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newfirsnameUser} onChange={(e) => setnewfirsnameUser(e.target.value)} className='focus:outline-none' placeholder='عنوان جدید را وارد کنید' type="text"
            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newlastnameUser} onChange={(e) => setnewlastnameUser(e.target.value)} className='focus:outline-none' placeholder='قیمت جدید را وارد کنید' type="text"
            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newusernameUser} onChange={(e) => setnewusernameUser(e.target.value)} className='focus:outline-none' placeholder='موجودی جدید را وارد کنید' type="text"
            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newpasswordUser} onChange={(e) => setnewpasswordUser(e.target.value)} className='focus:outline-none' placeholder='آدرس کاور جدید را وارد کنید' type="text"

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newphoneUser} onChange={(e) => setnewphoneUser(e.target.value)} className='focus:outline-none' placeholder='محبوبیت کاور جدید را وارد کنید' type="text"

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newcityUser} onChange={(e) => setnewcityUser(e.target.value)} className='focus:outline-none' placeholder='میزان فروش جدید را وارد کنید' type="text"

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newemailUser} onChange={(e) => setnewemailUser(e.target.value)} className='focus:outline-none' placeholder='تعداد رنگبندی جدید را وارد کنید' type="text"

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newaddressUser} onChange={(e) => setnewaddressUser(e.target.value)} className='focus:outline-none' placeholder='تعداد رنگبندی جدید را وارد کنید' type="text"

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newscoreUser} onChange={(e) => setnewscoreUser(e.target.value)} className='focus:outline-none' placeholder='تعداد رنگبندی جدید را وارد کنید' type="text"

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input value={newbuyUser} onChange={(e) => setnewbuyUser(e.target.value)} className='focus:outline-none' placeholder='تعداد رنگبندی جدید را وارد کنید' type="text"

            />
          </div>

        </div>
      </EditModal>

      <DetailsModal DetailsModalCancel={DetailsModalCancel} isSowDetailsModal={isShowDetailsModal}>
        <div>
          <table className='w-full text-center'>
            <thead>
              <tr className='h-12'>
                <th>شهر </th>
                <th>آدرس</th>
                <th>امتیاز</th>
                <th>میزان خرید</th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-12'>
                <td>{mainUserInfos.city}</td>
                <td>{mainUserInfos.address}</td>
                <td>{mainUserInfos.score}</td>
                <td>{mainUserInfos.buy}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DetailsModal>
    </div>
  )
}
