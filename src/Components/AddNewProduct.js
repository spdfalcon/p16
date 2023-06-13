import React, { useState } from 'react'
import { BiText } from 'react-icons/bi'
import { CiDiscount1 } from 'react-icons/ci'
import { TbDiscountCheck } from 'react-icons/tb'
import { RiPriceTag2Line } from 'react-icons/ri'
import { BsBasket } from 'react-icons/bs'
import { ImFilePicture } from 'react-icons/im'
import { BiHappyHeartEyes } from 'react-icons/bi'

export default function AddNewProduct({getAllProducts}) {
    const [newProductName, setNewProductName] = useState('')
    const [newProductPrice, setNewProductPrice] = useState('')
    const [newProductCount, setNewProductCount] = useState('')
    const [newProductImg, setNewProductImg] = useState('')
    const [newProductPopularity, setNewProductPopularity] = useState('')
    const [newProductSale, setNewProductSale] = useState('')
    const [newProductColors, setNewProductColors] = useState('')

    let newProduct = {
        title: newProductName,
        price: newProductPrice,
        count: newProductCount,
        img: newProductImg,
        popularity: newProductPopularity,
        sale: newProductSale,
        colors: newProductColors,
    }


    const buySubmit = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newProduct)
        }).then(res =>res.json())
        .then(result => {
            console.log(result);
            getAllProducts()
        })
    }




    return (
        <div className='mt-5 p-2'>
            <div>
                <div>
                    <h2 className='text-2xl'>افزودن محصول جدید</h2>
                </div>
                <div className='forms'>
                    <form className=' grid grid-cols-2 gap-5 bg-white p-4 rounded-md' action="">
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <BiText></BiText>
                            <input value={newProductName} onChange={(e) => setNewProductName(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='اسم محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <RiPriceTag2Line></RiPriceTag2Line>
                            <input value={newProductPrice} onChange={(e) => setNewProductPrice(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='قیمت محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <BsBasket></BsBasket>
                            <input value={newProductCount} onChange={(e) => setNewProductCount(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='موجودی محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <ImFilePicture></ImFilePicture>
                            <input value={newProductImg} onChange={(e) => setNewProductImg(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='آدرس عکس محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <BiHappyHeartEyes></BiHappyHeartEyes>
                            <input value={newProductPopularity} onChange={(e) => setNewProductPopularity(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='میزان محبوبیت محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <CiDiscount1></CiDiscount1>
                            <input value={newProductSale} onChange={(e) => setNewProductSale(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='میزان فروش محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='bg-gray-200 rounded-md flex items-center px-2'>
                            <TbDiscountCheck></TbDiscountCheck>
                            <input value={newProductColors} onChange={(e) => setNewProductColors(e.target.value)} className='p-2 rounded-md bg-transparent focus:outline-none w-full' placeholder='تعداد رنگبندی محصول را بنویسید' type="text" name="" id="" />
                        </div>
                        <div className='flex w-full justify-end'>
                            <button onClick={buySubmit} className='bg-violet-900 px-6 rounded-md text-white'>ثبت محصول</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
