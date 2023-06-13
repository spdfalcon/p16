import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal'
import DetailsModal from '../DetailsModal'
import EditModal from '../EditModal'
import Errorbox from '../Errorbox'
import { AiOutlineDollarCircle } from 'react-icons/ai'
export default function ProductsTable({allProductsData , getAllProducts}) {
  const [isSowDeleteModal, setIsSowDeleteModal] = useState(false)
  const [isSowDetailsModal, setIsSowDetailsModal] = useState(false)
  const [isSowEditModal, setIsSowEditModal] = useState(false)
  const [productID, setProductID] = useState(null)
  const [mainProductInfos, setMainProductInfos] = useState({})
  const [productNewTitle, setProductNewTitle] = useState('')
  const [productNewPrice, setProductNewPrice] = useState('')
  const [productNewCount, setProductNewCount] = useState('')
  const [productNewImg, setProductNewImg] = useState('')
  const [productNewPopularity, setProductNewPopularity] = useState('')
  const [productNewSale, setProductNewSale] = useState('')
  const [productNewColors, setProductNewColors] = useState('')


  

  const deleteModalCancelAction = () => {
    setIsSowDeleteModal(false)
  }
  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        setIsSowDeleteModal(false)
        getAllProducts()
      })

  }

  const DetailsModalCancel = () => {
    setIsSowDetailsModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const productsNewInfo = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      img: productNewImg,
      popularity: productNewPopularity,
      sale: productNewSale,
      colors: productNewColors,
    }

    fetch(`http://localhost:8000/api/products/${productID}` , {
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify([productsNewInfo])
    }).then (res=>res.json())
    .then(result => {
      console.log(result);
      getAllProducts()
      setIsSowEditModal(false)
    })
  }

  return (
    <div>
      {
        allProductsData.length ? (
          <div className='bg-white rounded-md mt-5 p-4'>
            <table className='w-full text-center '>
              <thead>
                <tr>
                  <th>عکس</th>
                  <th>اسم</th>
                  <th>قمت</th>
                  <th>موجودی</th>
                  <th>
                    ویرایش ها
                  </th>
                </tr>
              </thead>
              <tbody className=''>
                {
                  allProductsData.map((product) => (
                    <tr key={product.id} className=''>
                      <td className='flex justify-center'><img className='w-20' src={product.img} /></td>
                      <td>{product.title}</td>
                      <td>{product.price}  تومان</td>
                      <td>{product.count}</td>
                      <td>
                        <div className='flex justify-center gap-2 text-white'>
                          <button onClick={() => {
                            setIsSowDetailsModal(true)
                            setMainProductInfos(product)
                          }} className='bg-violet-900 px-4 py-1 rounded-md'>جزئیات</button>
                          <button onClick={() => {
                            setIsSowDeleteModal(true)
                            setProductID(product.id)
                          }} className='bg-violet-900 px-4 py-1 rounded-md'>حذف</button>
                          <button onClick={() => {
                            setIsSowEditModal(true)
                            setProductID(product.id)
                            setProductNewTitle(product.title)
                            setProductNewPrice(product.price)
                            setProductNewCount(product.count)
                            setProductNewImg(product.img)
                            setProductNewPopularity(product.popularity)
                            setProductNewSale(product.sale)
                            setProductNewColors(product.colors)
                          }} className='bg-violet-900 px-4 py-1 rounded-md'>ویرایش</button>
                        </div>
                      </td>
                    </tr>

                  ))
                }
              </tbody>
            </table>
          </div>

        ) : (
          <Errorbox msg='هیج محصولی یافت نشد'></Errorbox>
        )
      }

      {/* {isSowDeleteModal && <DeleteModal submitAction={deleteModalSubmitAction} cancelAction={deleteModalCancelAction}></DeleteModal>} */}
      <DeleteModal isSowDeleteModal={isSowDeleteModal} submitAction={deleteModalSubmitAction} cancelAction={deleteModalCancelAction}></DeleteModal>

      <DetailsModal isSowDetailsModal={isSowDetailsModal}
        DetailsModalCancel={DetailsModalCancel}>

        <table className='w-full text-center h-full'>
          <thead>
            <tr className=''>
              <th>محبوبیت</th>
              <th>فروش</th>
              <th>رنگبندی</th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className=''>
              <td>{mainProductInfos.popularity}</td>
              <td>{mainProductInfos.sale}</td>
              <td>{mainProductInfos.colors}</td>
            </tr>
          </tbody>
        </table>
      </DetailsModal>

      <EditModal isSowEditModal={isSowEditModal} onClose={() => setIsSowEditModal(false)} onSubmit={onSubmit}>
        <div className='flex flex-col gap-4'>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='عنوان جدید را وارد کنید' type="text" value={productNewTitle}
            onChange={(event)=>setProductNewTitle(event.target.value)}
            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='قیمت جدید را وارد کنید' type="text" name="" id=""
              value={productNewPrice}
              onChange={(event)=>setProductNewPrice(event.target.value)}
            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='موجودی جدید را وارد کنید' type="text" name="" id=""
              value={productNewCount}
            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='آدرس کاور جدید را وارد کنید' type="text" name="" id=""
              value={productNewImg}
              onChange={(event)=>setProductNewImg(event.target.value)}

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='محبوبیت کاور جدید را وارد کنید' type="text" name="" id=""
              value={productNewPopularity}
              onChange={(event)=>setProductNewPopularity(event.target.value)}

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='میزان فروش جدید را وارد کنید' type="text" name="" id=""
              value={productNewSale}
              onChange={(event)=>setProductNewSale(event.target.value)}

            />
          </div>
          <div className='flex bg-white items-center gap-2 p-2 rounded-md'>
            <div><AiOutlineDollarCircle></AiOutlineDollarCircle></div>
            <input className='focus:outline-none' placeholder='تعداد رنگبندی جدید را وارد کنید' type="text" name="" id=""
              value={productNewColors}
              onChange={(event)=>setProductNewColors(event.target.value)}

            />
          </div>

        </div>
      </EditModal>

    </div>
  )
}
