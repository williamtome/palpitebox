import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-700 p-12">
      <div className="container mx-auto text-center text-white font-bold">
        Projeto desenvolvido por: {' '}
          <a className="hover:underline" target="_blank" href="#">William Tomé</a> | {' '}
          <a className="hover:underline" target="_blank" href="https://linkedin.com/in/williamtome">Linkedin</a> | {' '}
          <a className="hover:underline" target="_blank" href="https://github.com/williamtome">Github</a>
          <div className="mt-2">
            
            {/* <img className="inline p-4" src="/logo_semana_fsm.png" alt="Semana Fullstack Master"/>
            <img className="inline p-4" src="/logo_devpleno.png" alt="DevPleno"/> */}
          </div>
      </div>
    </div>
  )
}

export default Footer
