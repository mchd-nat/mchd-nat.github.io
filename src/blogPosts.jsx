const blogPosts = [
  {
    id: Date.now().toString(),
    title: "Primeiro post",
    date: "7 de outubro de 2025",
    body: `É meia-noite e meia, e eu estou morrendo de sono, mas não quero parar de acrescentar à esse site. Esse projeto me empolgou tanto e tem sido tão divertido de desenvolver! 

ㅤ

Nessa segunda-feira, dia 6 de outubro de 2025, eu:

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
  {
    id: Date.now().toString(),
    title: "Pronto para o primeiro deploy",
    date: "7 de outubro de 2025",
    body: `Terça-feira, dia 7 de outubro, e agora temos a habilidade de traduzir o site para inglês (apesar de que isso não traduz nem as postagens nem os títulos das minhas publicações por enquanto) e alguns ajustes visuais para comportar o dropdown de idiomas. Na verdade, eu recebi muita ajuda de uma amiga fantástica que estuda design UI/UX. 

ㅤ

O que ainda falta?

ㅤ

- Tornar a transição entre páginas mais suave
- Melhorar a organização do componente de ativar/desativar o modo escuro
- Ajustar as partes do HTML que ainda não estão semânticas
- Adicionar etiquetas ARIA ao HTML
- Atualizar a responsividade para levar em consideração a nova organização dos componentes

ㅤ

Vou começar pela responsividade e seguir por aí. Se tudo der certo, esse site vai para o ar no GitHub Pages ainda hoje!
    `,
  },
  {
    title: "Site no ar e mais uma listinha de afazeres",
    date: "8 de outubro de 2025",
    body: `Acabei de fazer deploy do site no GitHub Pages (não sem alguns contratempos no caminho, mas tudo bem). Tive de comentar a aba de blog por enquanto, já que não consegui fazer a rota de *preview de post* para *post em si* funcionar, mas vou continuar trabalhando nisso por trás das cenas. Isso significa que essas postagens vão ficar escondidinhas por enquanto, mas também significa que o netizen que encontrar meu site vai ter bastante coisa para ler assim que elas forem ao ar hahaha.

ㅤ

Vamos à *laundry list* de sempre: o que foi feito?

- Deploy do site
- Ajustes de erros advindos do ponto anterior (principalemente caminhos quebrados de imagens e arquivos CSS)
- Ajuste da responsividade para levar em consideração a nova organização dos componentes (a.k.a., o fato de que agora temos um dropdown de idiomas)
    
    `,
  },
];

export default blogPosts;
