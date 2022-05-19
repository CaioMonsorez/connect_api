fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    //Aqui iremos trabalhar com o JSON
    data.forEach(movie => {
      // Log de cada nome de filme
      console.log(movie.title)
    })
  }).catch(err => {
    //Fazer algo com os erros aqui
    console.log(err)
  });

  ~~~

