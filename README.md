# Points of interest - Frontend
* Aplicação desenvolvida para permitir cadastrar pontos de interesse em uma localidade e em seguida calcular a sua distancia de um determinado ponto.
* Ao clicar no card "Clique para adicionar novo ponto" você será levado ao um modal para preencher o nome e as cordenadas X e Y do ponto.
* Na tela principal, é possivel pesquisar por pontos de interesse na localidade informando as coordenadas X e Y e o raio de pesquisa.
* A distancia é medida usando o calculo de distancia entre dois pontos, onde a distancia é igual a raiz quadrada do delta X ao quadrado somado ao delta Y ao quadrado. 
```
(d = √(x2 - x1)²+(y2 - y1)²)
```
## Executar a aplicação
* Modifique o arquivo docker-compose mudando o valor de REACT_APP_API_URL para o endereço apropriado do seu servidor.
* Certifique-se que o servidor [POIs-finder](https://github.com/Gustavomgu/POIs-finder) está sendo executado.
* Utilize o seguinte comando no terminal estando na pasta do projeto:
  ```
  docker-compose up --build
  ```
  Esse comando deverá criar a imagem da aplicação e subir
* Em seguida acesse a aplicação na porta 3001 (pode ser modificada mudando o arquivo package.json, dockerfile e docker-compose da aplicação)

  Obs.: Para o projeto funcionar é necessário utilizar o servidor que pode ser baixado através [desse link](https://github.com/Gustavomgu/POIs-finder).


