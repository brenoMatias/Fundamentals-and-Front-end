let color1 = document.getElementsByClassName("color")[0].style.border = " 1px solid black"; // Até rePadding é o exercício 2 
let black = document.querySelector("#black").style.backgroundColor = "black";
let blackPadding = document.querySelector("#black").style.padding = "60px 60px";


let color2 = document.getElementsByClassName("color")[1].style.border = " 1px solid black";
let green = document.querySelector("#green").style.backgroundColor = "green";
let greenPadding = document.querySelector("#green").style.padding = "60px 60px"

let color3 = document.getElementsByClassName("color")[2].style.border = " 1px solid black";
let yellow = document.querySelector("#yellow").style.backgroundColor = "yellow";
let yellowPadding = document.querySelector("#yellow").style.padding = "60px 60px";  

let color4 = document.getElementsByClassName("color")[3].style.border = " 1px solid black";
let blue = document.querySelector("#blue").style.backgroundColor = "blue";
let bluePadding = document.querySelector("#blue").style.padding = "60px 60px";

// 4 - Adicione à página um quadro de pixels, com 25 pixels.

let table = document.querySelector('#pixel-board'); // seleciona a table pelo id
function pixelTable() {
  let rowsAndColumns = 5; // define o número de linhas e colunas 
  for (let i = 0; i < rowsAndColumns; i += 1) {
    let pixelsRow = document.createElement('tr'); // cria elemento de linha no pai
    table.appendChild(pixelsRow); // adiciona as linhas ao pai (pixel-board)
    for (let j = 0; j < rowsAndColumns; j += 1) {  // loop cria elementos ate o valor definido
      let pixel = document.createElement('td'); // cria elemento de coluna 
      pixel.classList.add('pixel');
      pixelsRow.appendChild(pixel);  
    }
  }
}
pixelTable();

// Quesito 6

let selectClass1 = document.getElementsByClassName("color")[0];
selectClass1.classList.add("selected");


// Quesito 7 // referencia https://stackoverflow.com/questions/50883690/remove-class-from-one-element-while-adding-that-class-to-another-element-using

let colorsArray = document.querySelectorAll(".color"); // selector all cria uma array com todos elementos com a classe "color"

for (let i = 0; i < colorsArray.length; i += 1) { 
  colorsArray[i].addEventListener("click", addClassColors); // cria um evento de click para todos os elementos do array [colors]
   function addClassColors(event) { // cria uma funçao para adicionar classe a elemento clicado (no array);
   clearClass(); //invoca a função de remoção para proxima seleção;
    event.target.classList.add("selected"); // seleciona o target (elemento clicado e adciona a classe "selected")
  } // a classe "colors" são as cores primárias(paleta)
}

function clearClass(){ // função de remoção (usada dentro do loop inicial de seleção para remover pos outro item selecionado)
  for (let i = 0; i < colorsArray.length; i += 1) { // faz o loop dentro dos elementos com a classe color
    colorsArray[i].classList.remove("selected");
  }
}

// Quesito 8 
let pixelArray = document.querySelectorAll(".pixel"); // pixel sao os elementos do board de pixels a ser criado

for (let i = 0; i < pixelArray.length; i += 1) { // passa por todos elementos do araray contendo os valores pixel
    pixelArray[i].addEventListener("click", addColorPixel);
    function addColorPixel(event) { // função de adcionar cor aos pixels (o evento target é o pixel clicado (com a class selected))
    let backColor = document.querySelector(".selected").style.backgroundColor; // armazena a variavel da cor de fundo do elemento que foi criado
    event.target.style.backgroundColor = backColor; // o evento target (o que foi cliclado receb a cor do selected)
  }
}

// deasfio 9
    let clickClear = document.querySelector(".button-section"); // seleciona o local de append child 
    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "Limpar";  
    clickClear.appendChild(buttonClear);
    buttonClear.setAttribute("id", "clear-board"); // define atributes, dá o id
    buttonClear.addEventListener("click", clearBox);

    function clearBox() {
    let allPixels = document.querySelectorAll('td'); // seleciona todos elementos do estilo (elementos que vao disparar a função)
    for (let i = 0; i < allPixels.length; i += 1) { // faz o loop por todos elementos de pixel 
          allPixels[i].style.backgroundColor = 'white';
        }
      }
      
   // requisito 10 referencia https://github.com/tryber/sd-013-b-project-pixels-art/blob/guihtryb-project-pixels-art/script.js
   let input = document.querySelector(".size-button"); // seleciona o local de append child 
   let inputSize= document.createElement("input"); // cria elemento de input
   inputSize.type = "number";
   inputSize.id = "board-size";
   inputSize.min = "5"; // define min e max da entrada do input (isso cria input interativo)
   inputSize.max = "50";
   input.appendChild(inputSize);

   let buttonResize = document.querySelector(".size-button");
   let clickResize = document.createElement("button");
   clickResize.type = "submit"; // The button is a submit button (submits form-data)
   clickResize.id = "generate-board";
   clickResize.innerText = "VQV";
   buttonResize.appendChild(clickResize);
   clickResize.addEventListener("click", defineTableSize)

   let inputValue = document.querySelector('#board-size'); // variável para armazenar o valor do input 
   function defineTableSize() {
     table.innerHTML = ''; // Exercicio 4 (recupera o valor e define uma matriz null para fazer os loops de add) let table = document.querySelector('#pixel-board'); // seleciona a table pelo id
     for (let i = 0; i < inputValue.value; i += 1) { // os loops entao vao se realizar com base no valor do input
       let newPixelsRow = document.createElement('tr'); // os loops criam as rows e columns e adicionam na table inicial (vazia)
       table.appendChild(newPixelsRow);
       for (let j = 0; j < inputValue.value; j += 1) {
         let newPixelsColums = document.createElement('td');
         newPixelsColums.classList.add('pixel');
         newPixelsRow.appendChild(newPixelsColums);
         newPixelsColums.addEventListener('click', addColorPixel); // aqui invoca a função definida no exercício 8 de adicionar a cor ao elemento selected
       }
     }
   } // a função de selecionar (add class selected) roda antes dessa independente
   
   clickResize.addEventListener('click', boardNullAlert); // aqui adiciona mais um evento ao botão VQV (no final serão 3)
   function boardNullAlert() { // essa função emite alerta se a intrada do input for nula e o botão VQV
    if (inputSize.value == '') { // input valor nulo
      alert('Board Inválido! Sem valor adcionado');
      pixelTable(); // aqui invoca a função de construção do board de pixel feita no quesito 4
    }
   } 

   // Quesito 11
   
   function maxTableSize() { // essa função vai restringir a criação de blocos de pixel
    table.innerHTML = '';
    let maxInput = 50; // define o valor máximo de entrada possível
    for (let index = 0; index < maxInput; index += 1) {
      let pixelsRow = document.createElement('tr'); 
      table.appendChild(pixelsRow);
      for (let index1 = 0; index1 < maxInput; index1 += 1) {
        let pixel = document.createElement('td');
        pixel.classList.add('pixel');
        pixelsRow.appendChild(pixel);
        pixel.addEventListener('click', addColorPixel);
      }
    }
  }
  clickResize.addEventListener('click', boardLimitSize); // adciona ao botão mais um evento e função (a função de restringir o valor máximo)
  // função criada para emitir alerta -> se o clique for com os valores de max e min emite alerta
  function boardLimitSize() {
    if (inputSize.value < 5) { // cria uma restrição de valor de maximo e mínimo
      alert('Board inválido!');
      pixelTable(); // invoca novamente a função inicial de construçao do board
    }
  
    if (inputSize.value > 50) {
      alert('Board inválido!');
      maxTableSize(); // retorna o valor máximo que é maxInput = 50 para a criação da matrix
    }
  }
  
  
 