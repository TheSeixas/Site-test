window.addEventListener('DOMContentLoaded',()=>{
    // mudança de estilo das palavras
    var titleH1 = document.querySelectorAll('.title');
    var contentTitle = titleH1[0];
    var nodeLogo = document.querySelectorAll('.logotype');
    var logo = nodeLogo[0];
    var distacs = document.querySelectorAll('.content-destac');
    var dataComent = document.querySelectorAll('.data-coment');
    var divBlog = document.querySelectorAll('.div-blog')[0];
    var bodyContainer = document.getElementsByTagName('body')[0];
    var cor;
    var corBody;
    var errorComentary = 'false';
    let allComentarys = [
        {nameUser: 'Fulano de Tal', userComentary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae velit officia ...'},
        {nameUser: 'Fulano de Tal', userComentary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae velit officia ...'}   
    ];
    mudarEstilo(logo);
    mudarEstilo(contentTitle);
    mudarEstilo(divBlog);
    voltarInicio();
    esconderTexto(distacs, 56);
    esconderTexto(dataComent, 154);
    getDataUser();
    for( i=0; i < 4; i++){
        let linksNav = document.querySelectorAll('.linksNav');
        let link = linksNav[i]; 
        let divWrap = document.querySelectorAll('.divs-navigation')[0];
        if(link.children[0].textContent == 'Blog'){

            link.children[0].addEventListener('click',()=>{
                tirarDisplay();
                document.querySelectorAll('.div-blog')[0].style.display="flex";
                divWrap.style.display="flex";
            })
        }else if(link.children[0].textContent =='About'){
            link.children[0].addEventListener('click',()=>{
                tirarDisplay();
                document.querySelectorAll('.div-about')[0].style.display="flex";
                divWrap.style.display="flex";
            })
        }else if(link.children[0].textContent =='Contacts'){
            link.children[0].addEventListener('click',()=>{
                tirarDisplay();
                document.querySelectorAll('.div-contacts')[0].style.display="flex";
                divWrap.style.display="flex";
            })
        }
        mudarEstilo(link);
    }
    //volta para o inicio e esconde as div de navegação q tiver aberta
    function voltarInicio(){
        let home = document.querySelectorAll('.linksNav')[0];
        home.addEventListener('click',()=>{
            tirarDisplay();
        })
    }
    //tira o display das divs dos links de navegação
    function tirarDisplay(){
        let divs = document.querySelectorAll('.divs-navigation')[0];
        divs.style.display="none";
        for( i = 0; i < 3; i++){
            var sonDiv = divs.children[i];
            sonDiv.style.display='none';
        }
    }
    //mostra a div refente ao link de navegação
    function mostrarDiv( element ){

    }
    //muda o estilo ao passar o mouse por cima
    function mudarEstilo( element ){
        let index = 0;
        let arrayNavs = ['Blog','Home','About','Contacts'];
        let arraysDivs = ['div-blog','div-about','div-contacts'];
        let indexLogo = 0;
        let htmlOfLink;
        element.addEventListener('mouseenter',()=>{
            //faz o efeito das cores da logo e dos links de navegação
            if (element.innerHTML == 'Blog'){
                if( indexLogo == 0 ){
                    element.classList.add('cYellow');
                    cor = 'cYellow';

                }else if( indexLogo == 1){
                    element.classList.add('cRed');
                    cor = 'cRed';
                }else if( indexLogo == 2){
                    element.classList.add('cGreen');
                    cor = 'cGreen';
                }else if( indexLogo == 3){
                    element.classList.add('cBlue');
                    cor = 'cBlue';
                }else if( indexLogo == 4){
                    element.classList.add('cOrange');
                    cor = 'cOrange';
                }else if( indexLogo == 5){
                    element.classList.add('cPink');
                    cor = 'cPink';
                }
                if( indexLogo == 5 ){
                    indexLogo = 0;
                }else{
                    indexLogo++;
                }
                tirarClasse(element,cor);
            }else{
                htmlOfLink = element.children[0].innerHTML;
                if (arrayNavs.includes(htmlOfLink)){
                    if( index == 0 ){
                        element.classList.add('cYellow');
                        cor = 'cYellow';
    
                    }else if( index == 1){
                        element.classList.add('cRed');
                        cor = 'cRed';
                    }else if( index == 2){
                        element.classList.add('cGreen');
                        cor = 'cGreen';
                    }else if( index == 3){
                        element.classList.add('cBlue');
                        cor = 'cBlue';
                    }else if( index == 4){
                        element.classList.add('cOrange');
                        cor = 'cOrange';
                    }else if( index == 5){
                        element.classList.add('cPink');
                        cor = 'cPink';
                    }
                    if( index == 5 ){
                        index = 0;
                    }else{
                        index++;
                    }
                    
                    tirarClasse(element,cor);
                }
            }
            //deixa a corda das letras da navegação branca
            if(element.childElementCount >= 1 ){
                element.children[0].style.color='white';
            }
            //faz o efeito de troca dd cores das divs de navegação e do body
            if( arraysDivs.includes(element.classList[0])){
                document.querySelectorAll('.logotype')[0].style.color='black';
                let li = document.querySelectorAll('.linksNav');
                for( i = 0; i < 4; i++){
                    li[i].children[0].style.color='black';
                }
                if( index == 0 ){
                    console.log(index)
                    element.classList.add('cYellow');
                    bodyContainer.classList.add('bYellow');
                    cor = 'cYellow';
                    corBody = 'bYellow';
    
                }else if( index == 1){
                    element.classList.add('cRed');
                    bodyContainer.classList.add('bRed');
                    cor = 'cRed';
                    corBody = 'bRed';
                }else if( index == 2){
                    element.classList.add('cGreen');
                    bodyContainer.classList.add('bGreen');
                    cor = 'cGreen';
                    corBody = 'bGreen';
                }else if( index == 3){
                    element.classList.add('cBlue');
                    bodyContainer.classList.add('bBlue');
                    cor = 'cBlue';
                    corBody ='bBlue';
                }else if( index == 4){
                    element.classList.add('cOrange');
                    bodyContainer.classList.add('bOrange');
                    cor = 'cOrange';
                    corBody = 'bOrange';
                }else if( index == 5){
                    element.classList.add('cPink');
                    bodyContainer.classList.add('bPink');
                    cor = 'cPink';
                    corBody = 'bPink';
                }
                if( index == 5 ){
                    index = 0;
                }else{
                    index++;
                }
                
                tirarClasse(element,cor);
            }
            /* */ 
        });
    }
    function tirarClasse(element, cor){
        let classContent = element.classList.value.split(' ');
        console.log(cor)
        console.log(classContent.includes(cor));
        element.addEventListener('mouseleave',()=>{
            if(element.childElementCount >= 1 ){
                element.children[0].style.color='deepskyblue';
                bodyContainer.classList.remove(corBody);
                
            }
            element.classList.remove(cor)
            document.querySelectorAll('.logotype')[0].style.color='deepskyblue';
            let li = document.querySelectorAll('.linksNav');
            for( i = 0; i < 4; i++){
                li[i].children[0].style.color='deepskyblue';
            }

        })
    }
    //Grava o nome e o comentário do usuário
    function getDataUser(){
        let btnSubmit = document.querySelectorAll('.btn-submit')[0];
        btnSubmit.addEventListener('click',()=>{
            let nameUser = document.querySelectorAll('.comentary')[0].value;
            let userCom = document.querySelectorAll('.comentary')[1].value;
            createComentary(nameUser, userCom);
            if(!errorComentary){
                document.querySelectorAll('.comentary')[0].value = '';
                document.querySelectorAll('.comentary')[1].value ='';
            }
        });
    }
    //função pega os dados descritos pelo usuario na caixa de comentario e mostra na tela
    //obs: era pra ser com um form, mas quero fazer dessa forma no momento. devendo mudar mais tarde
    function createComentary(name, comentary){
        if( name.length < 2 || comentary < 1 || name == null || comentary == null ){
            errorComentary = 'true';
        }else{
            errorComentary = false;
            let dataUser = {nameUser: name, userComentary: comentary};
            allComentarys.unshift(dataUser);
            let last3Comentarys = [ allComentarys[0], allComentarys[1], allComentarys[2]];
            let comentarysInWindow = document.querySelectorAll('.data-user');
            let userOne = comentarysInWindow[0].children[1];
            let userTwo = comentarysInWindow[1].children[1];
            let userTwree = comentarysInWindow[2].children[1];
            let userComentarys = document.querySelectorAll('.data-coment');
            let userComentaryOne = userComentarys[0].children[0];
            let userComentaryTwo = userComentarys[1].children[0];
            let userComentaryTwree = userComentarys[2].children[0];
            rewriteComment(last3Comentarys[0],last3Comentarys[1],last3Comentarys[2]);
            function rewriteComment(one, two, twree){

                userOne.innerHTML = one.nameUser;
                userComentaryOne.innerHTML = one.userComentary;
                userTwo.innerHTML = two.nameUser;
                userComentaryTwo.innerHTML = two.userComentary;
                userTwree.innerHTML = twree.nameUser;
                userComentaryTwree.innerHTML = twree.userComentary;
            }
        }        
    };
})
//função coloca elipsis ao final da quantidade de caracteres que deseja exibir de um texto
function esconderTexto(el, maxL){
    let quantFilhos = el.length;
    console.log(el)
    for( i=0; i < quantFilhos; i++){
        let filho = el[i].children[0];
        let textLength = filho.innerHTML.length;

        if( textLength > maxL){
            let newText = filho.innerHTML.slice(0,(maxL-3))+'...';
            filho.innerHTML = newText;
            
        }

    }
}
function setStyle(element, index ){
    let colorAdd;
    if( index == 0 ){
        element.classList.add('cYellow');
        colorAdd = 'cYellow';

    }else if( index == 1){
        element.classList.add('cRed');
        colorAdd = 'cRed';
    }else if( index == 2){
        element.classList.add('cGreen');
        colorAdd = 'cGreen';
    }else if( index == 3){
        element.classList.add('cBlue');
        colorAdd = 'cBlue';
    }else if( index == 4){
        element.classList.add('cOrange');
        colorAdd = 'cOrange';
    }else if( index == 5){
        element.classList.add('cPink');
        colorAdd = 'cPink';
    }
    if( index == 5 ){
        index = 0;
    }else{
        index++;
    }
    cor = colorAdd;
}