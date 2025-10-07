const blogPosts = [
  {
    id: Date.now().toString(),
    title: "Primeiro post",
    date: new Date().toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    blurb: "Sobre o que foi feito e o que ainda precisa ser feito.",
    body: `É meia-noite e meia, e eu estou morrendo de sono, mas não quero parar de acrescentar à esse site. Esse projeto me empolgou tanto e tem sido tão divertido de desenvolver! 

ㅤ

Hoje, segunda-feira dia 7 de outubro de 2025, eu:

ㅤ

- Refatorei o projeto para utilizar React em vez de HTML, CSS e JavaScript puro
- Recriei a função de modo escuro para encaixar no formato do React
- Adicionei essa função de blog (que ainda precisa ser refinada)

ㅤ

Esse último precisa ser enfatizado. 

ㅤ

O que ainda falta?

ㅤ

- Tanto coisa, meus amigos
- Consertar um bug visual no botão de toggle do modo escuro
- Fazer com que o site detecte se o navegador do usuário está no modo escuro e reagir de acordo
- Salvar a preferência de tema do usário
- Garantir responsividade
- Adicionar itens às páginas de portfólio e de publicações

ㅤ

Ainda há muito a ser ajustado para que esse sistema não simplesmente *funcione*, mas funcione *bem*. Estou me esmerando em fazer esse projeto da melhor maneira possível, tanto por funcionalidade e desempenho, mas também para aprender. É minha primeira vez utilizando React, então quero aprender direitinho B.)

ㅤ

Esse foi meu primeiro post, mas não tenho intenção nenhum de que seja o último. Até lá, boa noite!
        `,
  },
];

export default blogPosts;
