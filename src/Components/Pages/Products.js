import React, { useEffect, useState } from 'react'
import AddNewProduct from '../AddNewProduct'
import ProductsTable from './ProductsTable'
export default function Products() {
  const [allProductsData, setAllProductsData] = useState([])


  useEffect(() => {
    getAllProducts()
  }, [])


  const getAllProducts = () => {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(datas => {
        setAllProductsData(datas.reverse())
      })
  }

  return (
    <div>
      <AddNewProduct getAllProducts={getAllProducts}></AddNewProduct>
      <ProductsTable allProductsData={allProductsData} getAllProducts={getAllProducts}></ProductsTable>
    </div>
  )
}
