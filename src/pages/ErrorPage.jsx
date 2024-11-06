import React from 'react'
import { Helmet } from 'react-helmet'
import image from "../assets/error.png"
export default function ErrorPage() {
  return (
    <div className='ml-20 font-bold text-center text-7xl text-purple-400 mt-20'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Error found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <img src={image} className='ml-96' alt="" />
      <h1>4<span className='text-red-600'>0</span>4</h1>
      <p>No Data Found</p>
      <p className='text-2xl text-red-700'>Please type valid url</p>
    </div>
  )
}
