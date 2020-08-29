import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div className='pt-16 pb-16'>
      <PageTitle title='Sobre' />
      <div className='container mx-auto'>
        <p className='text-center'>
          Palpitebox é um projeto desenvolvido dentro do treinamento <b>"Fullstack Master"</b> do DevPleno, ministrado pelo mestre Túlio Faria,
          <br/> que também foi usado como projeto base durante a Semana Fullstack Master realizada em julho de 2020.
        </p>
      </div>
      <div className='text-center pt-10 text-green-800'>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>    
    </div>
  )
}

export default Sobre
