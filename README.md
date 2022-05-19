# Descrição

Este aplicativo web consumirá informações de uma API e as exibirá na página.

Essa aplicação se conecta a uma [API do Studio Ghibli]([https://ghibliapi.herokuapp.com/), encontra os dados com o JavaScript 
e exibi no front-end de um site. 

A API do Studio Ghibli cataloga:
* pessoas ( cor dos olhos, cabelo...)
* lugares 
* e coisas encontradas nos mundos do Ghibli. 


Ele foi criado para ajudar os usuários a descobrir recursos, consumi-los por meio de solicitações HTTP e interagir com eles da maneira que fizer sentido.


# Pré-requisitos

Conhecimento básico em:

* HTML
* CSS
* SINTAXES E TIPO DE DADOS JAVASCRIPT
* OBJETOS JSON E JAVASCRIPT


# Overview API

Uma API é um conjunto de métodos de comunicação entre vários componentes de software. Em outras palavras, uma API permite que um software se comunique com outro software.

Vamos focar no conceito de que uma API permite que um servidor web interaja com software de terceiros através de requests HTTP

Vamos focar em GET e POST ou Contexto = Solicitação + Resposta

<img src="img/api.png" alt="freecodecamp" style="height: 500px; width:800px;"/>
<img src="img/api2.png" 
alt="dev.to" style="height: 500px; width:800px;"/>
<img src="img/http_method.jpg" alt="medium.con" style="height: 500px; width:800px;"/>
<img src="img/www.png" alt="medium.com"style="height: 500px; width:800px;"/>


# Como se comunicam?

Os cabeçalhos HTTP passam mais informações entre o cliente e o servidor por meio dos cabeçalhos de solicitação e resposta. Os cabeçalhos não diferenciam maiusculas e minusculas e sao separados por dois pontos (:) 

Neste cabeçalho, contem informações:

* Content-Type:text/html
* Date
* Server 
* Accept-Econding 
* Accept-Language


Essas informações é possível você analisar em qualquer página WEB > Inspect the page > Network > Seleciona a requisição > Headers.

A rolar a barra de rolagem, é possível verificar: 
General > Response Headers > Request Headers


Assim, o servidor Web está usando requests HTTP para se comunicar com um endereço URL ou endpoint disponível na internet contendo dados em JSON.

Uma API web usa requests HTTP que correspondem aos verbos CRUD.

Açao          |	Método HTTP	 | Descrição
------        |--------------|------------
Criar/Create  | POST |Cria um novo recurso
Ler / Read	  | GET  | Recupera um recurso
Atualizar/Update |	PUT/PATCH	| Atualiza um recurso existente
Excluir/Delete	 | DELETE  |	Exclui um recurso



# Como Conectar ao API do Studio Ghibli?

As solicitações (os GETs) são feitas com o comando `curl`

~~~
`curl https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49`

~~~

Este comando retornará uma resposta NO FORMATO JSON (os POSTs)

~~~
{
"id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
"title": "My Neighbor Totoro",
"original_title": "となりのトトロ",
"original_title_romanised": "Tonari no Totoro",
"description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
"director": "Hayao Miyazaki",
"producer": "Hayao Miyazaki",
"release_date": "1988",
"running_time": "86",
"rt_score": "93",
...
}
~~~
