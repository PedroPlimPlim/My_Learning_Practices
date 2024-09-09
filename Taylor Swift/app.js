function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos, pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == "") {
        section.innerHTML = "<p>Digite algo</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Loga no console para verificar se a seção foi encontrada
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let album = "";
  
    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        album = dado.album.toLowerCase()

        if (titulo.includes(campoPesquisa)||album.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2>
                ${dado.titulo}
              </h2>
              <h3>Álbum: ${dado.album}</h3>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Spotify</a>
            </div>
          `;
        }
      // Concatena o HTML de cada resultado à string 'resultados'
    }

    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atribui o conteúdo HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }



