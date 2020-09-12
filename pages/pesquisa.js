import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  
  const [ form, setForm ] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '', 
    Critica: '', 
    Nota: 0,
    Indica: ''
  })

  const notas = [0, 1, 2, 3, 4, 5]
  const indicacoes = ['Sim', 'Não']
  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const save = async() => {
    try {
      const response = await fetch('/api/save', {
        method: 'post',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (error) {
    }
  }

  const onChange = event => {
    const value = event.target.value
    const key = event.target.name
    console.log(key, value);
    setForm(old => ({
      ...old,
      [key]: value
    }));
  }
  return (
    <div className="pt-6">
      <PageTitle title='Pesquisa' />
      <div className='text-center'>
        <h1 className="font-bold text-2xl">Críticas e sugestões</h1>
      </div>
      <p className="mt-6 mb-6 text-center">
        O restaurante X sempre busca por atender melhor seus clientes.<br/>
        Por isso, estamos sempre abertos a ouvir sua opinião.
      </p>
      {!success && <div className='w-1/4 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type="text" className='w-full p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>E-mail:</label>
        <input type="text" className='w-full p-4 block shadow bg-blue-100 my-2 rounded' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email}/>
        <label className='font-bold'>Whatsapp:</label>
        <input type="text" className='w-full p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp}/>
        <label className='font-bold'>Sua crítica ou sugestão:</label>
        <input type="text" className='w-full p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Descreva aqui.' onChange={onChange} name='Critica' value={form.Critica}/>
        <label className='font-bold'>Nota:</label>
        <div className='flex py-6'>
          {
            notas.map(nota => {
              return (
                <label className='block w-1/6 text-center'> 
                  {nota} <br/>
                  <input type="radio" name='Nota' value={nota} onChange={onChange}/> 
                </label>
              )
            })
          }
        </div>
        <label className='font-bold'>Você nos indicaria para um(a) amigo(a)?</label>
        <div className='flex py-6'>
          {
            indicacoes.map(indicacao => {
              return (
                <label className="block w-1/2 text-center">
                  {indicacao} <br/>
                  <input type="radio" name="Indica" value={indicacao} onChange={onChange}/>
                </label>
              )
            })
          }
        </div>
        <button className='w-full bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow mb-6' onClick={save}>Enviar</button>        
      </div>}
      {success && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br/>
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br/>
            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçom.</span>
          </div>
        }
      </div>}
    </div>
  )
}

export default Pesquisa
