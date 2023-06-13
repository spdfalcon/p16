import React from 'react'
import Header from './Components/Header'
import SidBar from './Components/SidBar'
import route from './routes'
import { useRoutes } from 'react-router-dom'
export default function App() {
  let router = useRoutes(route)
  return (
    <div className='font-medium font-lalezar bg-gray-200'>
      <div className='flex gap-2'>
        <SidBar></SidBar>
        <div className='flex-1 px-4'>
          <Header></Header>
          {router}
        </div>
      </div>
    </div>
  )
}
