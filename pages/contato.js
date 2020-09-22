import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div className='pt-16 pb-16'>
      <PageTitle title='Contato' />
      <div className='container mx-auto text-center'>
        <div className='inline-block w-full mb-6'>
          <img className='inline w-8 mr-4' src="/gmail.png" alt="Gmail"/>
          <p className='inline'>william.tomenh@gmail.com</p>
        </div>
        <div className='inline-block mt-6'>
          <img className='inline w-8 mr-4' src="/whatsapp.png" alt="Whatsapp"/>
          <p className='inline'>(51) 99303.8350</p>
        </div>
      </div>
      <div className='text-center pt-10 text-green-800'>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato
