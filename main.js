

    //link da API do airbn
    var url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
    var container  = document.querySelector('#response'); // pegando o elemnto no DOM com id response

    fetch(url)
        .then(resp => resp.json())
        .then(result => {
        

            for (i = 0; i <= result.length; i++){

                //console.log(result[i]);
                var img = document.createElement("img"); // criando elemento img
                var div1 = document.createElement("div"); // criando element div
                var div2 = document.createElement("div"); // criando element div
                var div3 = document.createElement("div"); // criando element div
                var title = document.createElement("h1");// criando element h1
                var price = document.createElement("div"); // criando element div

                div1.className = "wrapper-card"; // atribuindo nome da classe dentro da div.. essa div vai encapsular todos elemntos
                div2.className = "content"; // div vai conter o preço e o titulo
                div3.className = "img"; // colocando nome da class img na div 3
                img.className = "img"; // colocando nome da classe na tag img.. nem usei kkkk
                price.className = "preco"; // criando classe para div que do preço

                img.setAttribute('src', result[i].photo); // setando o atributo src dentro da tag img, endereço da url
                title.textContent = `${result[i].name}`; // colocando o nome  e colocando dentro da div h1
                price.textContent = ` R$${result[i].price},00`; //  colocando o preço dentro da vid preço

                container.appendChild(div1); // dentro da div com id="response", crie um elemento filho div1, ela que tem a classe wrapper-card
                div1.appendChild(div3); // dentro da div wrapper-card, crie um elemento filho div3, ela é a classe img
                div3.appendChild(img); // dentro da div3 crie o elemento filho, com a tag img.. 
                
                div1.appendChild(div2); // dentro da (Div 1)wrapper-card,  coloque a div class content.. essa div vai ser o pai dos elemento título e preço
                div2.appendChild(title); // dentro da div2 content, crie o elmento filho, vai receber o h1
                div2.appendChild(price); // dentro da div2 content, crie o elmento filho, vai receber o preço

                /**
                 * appendChild() -> cria um elemnto html  dentro da div pai.
                 * className -> atrubui um nome de classe dentro da div ex <div class="x"></div>
                 * textContent -> inseri um texto dentro da elemento selecionado
                 * setAttribute(parm1, parm2) -> Seta um atributo dentro de um elemnto html: primeiro parâmento é o nome do atribuito, segundo parâmetro é o valor do atributo
                 * ex: <img src="valor do atributo">
                 */
            }
        });