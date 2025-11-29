---
title: '[PT] O Programador Pragmático'
excerpt: 'Aprendizados extraídos do livro "The Pragmatic Programmer".'
coverImage: '/assets/blog/covers/cover_2.webp'
date: '2025-11-06T19:54:00.000Z'
language: 'pt'
author:
  name: Gustavo Mello
  picture: '/assets/blog/authors/gmello.jpeg'
ogImage:
  url: '/assets/blog/covers/cover_2.webp'
---

## Pragmatic Programmer

O livro enfatiza em vários momentos a importância do desenvolvedor conhecer sobre
o dominio do negócio, onde programadores que conhecem o usuário e sabem a dor que estão resolvendo
é capaz de prover soluções mais efetivas e um código que melhor representa o que o usuário necessita.

_Isso me leva a pensar em como posso atuar para que eu e meus desenvolvedores conheçam mais e mais sobre o produto que desenvolvemos._

O livro traz muito sobre o contato com o cliente e trabalhar com ciclos de feedback.
Toda feature precisa passar por ciclos onde são exibidos protótipos e exemplos de
como resolver o problema do cliente para ele. Ter um retorno rápido e eficiente é a chave
principal para a construção de software de qualidade.

Outro ponto que ele traz e acredito ser um dos mais importantes é sobre como devemos
ser orgulhosos dos códigos que escrevemos, estar satisfeito com a solução que você pensou, prototipou,
validou por meio de várias interações com o cliente é o que motiva o programador.

_Me pergunto como posso fazer para que minha equipe tenha orgulho do trabalho dela, assim como um
artista assina o ser quadro ao finalizar a obra._

No livro ele cita algumas formas de alcançar esse objetivo, uma delas é justamente a interação
com o cliente, um bom desenvolvedor se preocupa se o cliente está satisfeito com a solução
que lhe foi entregue. _Aqui, o ideal é analisar outras formas de permitir que a equipe se orgulhe do projeto._

Outra coisa muito interessante que o livro trouxe é como nós programadores devemos ter certeza
sobre o que desenvolvemos, essa certeza deve vir de diferentes meios, seja por meio de testes automatizados
focados em comportamentos - não em linhas de código - também deve vir por meio de feedbacks constantes e iterativos
com o cliente e principalmente sobre como não devemos confiar cegamente na nossa intuição.

Falo isso por experiência própria, frequentemente me pego em situações em que estou confiando na minha
intuição e quando preciso explicar o porquê de eu estar fazendo algo de determinada forma, tenho
dificuldades para expressar minha intenção. A motivação pra isso é simples,
ao invés de pensar racionalmente sobre o problema que quero resolver, acabo confiando nos
meus sentimentos sobre aquilo.

**Esteja certo do que você está fazendo a ponto de conseguir explicar de forma clara
e objetiva do porquê está fazendo e, acima de tudo, expresse essa certeza no código.**

Automatizar tudo que for possivel, esse mantra se repete em diversos momentos do livro. Vivemos em
um mundo digital, somos programadores e podemos construir o que quisermos.

Os computadores seguem uma fila precisa de execuções em que nós definimos e eles são especialistas em
segui-las. Diferentemente de um ser humano, em que uma receita de bolo apresentada para 100 pessoas
irão resultar em 100 bolos completamente diferentes uns dos outros, pra um computador isso é impossível.

Devemos ser capazes de utilizar essa excelente previsibilidade dos computadores para garantir que etapas
essenciais do nosso dia a dia sejam feitas sempre com a perfeita precisão de como esperamos que
ela ocorra.

_Sempre buscar por formas de automatizar tudo que for importante no nosso dia-a-dia._

Testes automatizados precisam testar comportamentos, não linhas de código. Um exemplo muito bom que o autor
apresenta é uma função que divide dois números x e y, é uma função extremamente pequena e
fácil de testar, insira infinitos valores e então você terá o resultado, porém caso o denominador seja 0,
a função quebra totalmente. Isso significa que linhas testadas é uma métrica que dá uma boa visão
do sistema, porém definitivamente não é a mais importante. **Testes devem ser criados a partir do
que se espera que aquele bloco faça, não pelo que foi escrito nele.**

Documentação de requisitos é o código. O livro enfatiza muito o quão importante seguirmos o
DRY principle, de acordo com o autor a repetição é um dos principais motivos para projetos falharem ou
se tornarem extremamentes dificeis de alterar (junto com o acoplamento).

Documentação de requisitos extremamente detalhados, ou pior, extremamente técnicos são uma cópia direta do que o código precisa
representar, ocorrendo então cenários em que, por exemplo, caso encontrem um caso de borda será
necessário alterar no código, nos testes e na documentação.

Ou seja, qualquer alteração será extremamente custosa, envolvendo diversos arquivos e talvez até mesmo equipes.

Porém, o problema maior nem é somente o tempo gasto, existe outro fator que é ainda mais grave.
Caso o programador esqueça de alterar em um dos locais, pode ser que a informação passe a estar errada,
levando a outras pessoas acreditem que certo processo ocorra de determinada forma, porém na realidade
ocorre de um jeito completamente diferente.
