import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const {data, error} = useSWR('/api/get-promo', fetcher)
  return (
    <div>
      <PageTitle title='Home' />
      <div>
        <p className="mt-12 text-center text-7x1">Seja Bem-vindo(a)</p>
        <p className="mt-12 text-center">
          O restaurante Prato Saboroso sempre busca por atender melhor seus clientes.<br/>
          Por isso, estamos sempre abertos a ouvir sua opinião.
        </p>
        <div className='text-center my-12'>
          <Link href="/pesquisa">
            <a className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow">
              Dar opinião ou sugestão.
            </a>
          </Link>
        </div>
        { !data && <p className='my-12 text-center'>Carregando...</p> }
        { !error && data && data.showCoupon &&
          <p className="my-12 text-center">
            {data.message}
          </p>
        }
      </div>
    </div>
  );
}

export default Index;
