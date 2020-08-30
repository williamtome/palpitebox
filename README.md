# Palpitebox

Este projeto foi construído durante o treinamento Fullstack Master do [DevPleno](https://devpleno.com). Uma versão online deste projeto pode ser encontrada em: https://palpitebox.williamtome.vercel.app/

![Preview](https://github.com/williamtome/palpitebox/print.png?raw=true)

### Início



## Pré-requisitos:

Você precisa do NodeJS e do NPM instalado em sua máquina.

```
npm install
npm run dev
```

## Layout:

Construi o layout utilizando o Figma. Você encontra o arquivo [aqui](https://www.figma.com/file/DpH4mvDQkLgD0OajjHIrlO/palpitebox-escopo?node-id=0%3A1)

## Colocado em produção:

Este projeto foi hospedado na Vercel. Se você for colocar em produção, precisará criar as variáveis de ambiente para configurar o acesso às planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
```
## Tecnologias:

* [NextJS](https://nextjs.org/) - The React Framework
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheet](https://drive.google.com) - Planilhas online do Google.

## Authors:

* **Tulio Faria** - [LinkedIn](https://www.linkedin.com/in/tuliofaria/)
* **William Weirich Tomé** - [Linkedin](https://www.linkedin.com/in/williamtome/)


## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Acknowledgments

* Este projeto foi construído durante o treinamento Fullstack Master do [DevPleno](https://devpleno.com).
