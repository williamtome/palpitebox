import * as Yup from 'yup'

const PesquisaSchema = Yup.object().shape({
  Nome: Yup
    .string()
    .required('Nome é obrigatório!'),
  Email: Yup
    .string()
    .email('Por favor, informe um e-mail válido!')
    .required('Email é obrigatório!'),
  Whatsapp: Yup
    .string()
    .required('Whatsapp é obrigatório!'), 
  Critica: Yup
    .string()
    .required('Crítica/Sugestão é obrigatório!'), 
  Nota: Yup
    .number()
    .required('Nota é obrigatório!'),
  Indica: Yup
    .string()
    .required('Indica é obrigatório!')
})

export default PesquisaSchema
