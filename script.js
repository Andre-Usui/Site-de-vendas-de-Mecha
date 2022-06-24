const items = [
    {
        id : 0,
        nome : "Gundam-Mini",
        img : '/images/gundam1.png', //buscar imagens
        quantidade : 0
    },
    {
        id : 1,
        nome : "Gundam-A1",
        img : '/images/gundam4.png', //buscar imagens
        quantidade : 0
    },
    {
        id : 2,
        nome : "Gundam-A2",
        img : '/images/gundam3.png', //buscar imagens
        quantidade : 0
    },
    {
        id : 3,
        nome : "Gundam-red",
        img : '/images/gundam2.png', //buscar imagens
        quantidade : 0
    }
]


inicializarLoja = () => {
    var contProdutos = document.getElementById('produtos');
        items.map((val)=>
        contProdutos.innerHTML += 
        `<div class="produto-single"> 
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a class="linkCarrinho" key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
        </div>`
        /* `é uma forma de editar texto mais precisa
            ela respeita "espaços" e quebras de linha`
            Ideal para editar HTML pelo Js*/
    
    )

}
inicializarLoja();

atualizarCarrinho = () => {
    var contCarrinho = document.getElementById('carrinho');
    contCarrinho.innerHTML = "";
        items.map((val)=>{
            if(val.quantidade > 0){
            contCarrinho.innerHTML+=
            `<img src="`+val.img+`"/> 
            <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
            </div>`
            }
        })
}


var links = document.getElementsByClassName('linkCarrinho');

    for(var i = 0; i < links.length; i++){
        links[i].addEventListener("click",function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
            return false; //estudar melhor a funcionalidade deste método
        })
    }
