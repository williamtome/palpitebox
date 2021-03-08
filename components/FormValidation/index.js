import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
    .matches(phoneRegExp, 'Número do Whatsapp não é válido!')
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
