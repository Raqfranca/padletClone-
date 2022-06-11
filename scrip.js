function adicionarNovoItem() {addCard()
}



const createCard = () => {

    //Criação da estrutura do card

    const cardCol = document.createElement('div');
    cardCol.classList.add("col-sm-6", "col-lg-4", "col-xl-3", "mb-3")
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body')

    //Captura e adição nome 

    var tituloItem = document.getElementById("tituloItem").value
    console.log(tituloItem);

    const cardTitle = document.createElement('h1')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = tituloItem

    //captura e adição da imagem

    const cardImg = document.createElement('img');

    var urlImg = document.getElementById("urlImg").value
    console.log(urlImg);

    cardImg.src = urlImg
    cardImg.classList.add('card-img-top')
    cardImg.alt = tituloItem

    //Captura e adição idade 

    var idadeItem = document.getElementById("idadeItem").value
    console.log(idadeItem);

    const cardIdade = document.createElement('h2')
    cardIdade.classList.add('card-title')
    cardIdade.innerText = "Idade: " + idadeItem + " anos";

    //Captura e adição cidade  

    var cityItem = document.getElementById("cityItem").value
    console.log(cityItem);

    const cardCity = document.createElement('h2')
    cardCity.classList.add('card-title')
    cardCity.innerText = cityItem;

    //Captura e adição informação sore o conhecimento com JS.

    var jsItem = document.getElementById("jsItem").value
    console.log(jsItem);

    const cardJs = document.createElement('h2')
    cardJs.classList.add('card-title')
    cardJs.innerText = "O quanto conhece de JS de 0 a 10: " + jsItem;


    //Captura e adição da descrição

    var descricaoItem = document.getElementById("descricaoItem").value

    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText = "Expectativa para disciplina: " + descricaoItem;
    

    //Criação dos nós

    cardCol.appendChild(card);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardIdade);
    cardBody.appendChild(cardCity);
    cardBody.appendChild(cardJs);
    cardBody.appendChild(cardText)
  
    return cardCol
}



const addCard = () => {
    const cardsRow = document.querySelector('.cards-row')
    const firstCard = cardsRow.children.item(0)
    const card = createCard();

    firstCard.before(card) 
}