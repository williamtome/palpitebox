import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div className='pt-16 pb-16'>
      <PageTitle title='Contato' />
      <div className='container mx-auto text-center'>
        <div className='mb-6'>
          <strong>E-mail:</strong>
          <p>william.tomenh@gmail.com</p>
        </div>
        <div className='mt-6'>
          <strong>Contato/Whatsapp:</strong>
          <p>(51) 99303.8350</p>
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
