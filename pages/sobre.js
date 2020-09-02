import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div className='pt-16 pb-16'>
      <PageTitle title='Sobre' />
      <div className='container mx-auto text-center'>
        <p>
          Palpitebox é um projeto desenvolvido dentro do treinamento <b>"Fullstack Master"</b> do DevPleno, ministrado pelo mestre Túlio Faria,
          <br/> que também foi usado como projeto base durante a Semana Fullstack Master realizada em julho de 2020.
        </p>
        <p>
          <h4 className='pt-10 pb-6 text-3xl'>Tecnologias utilizadas</h4>
        </p>
        <div>
          <img src="/techs.png" alt="NextJS, TailwindCSS, Google Sheets, Figma"/>
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

export default Sobre
