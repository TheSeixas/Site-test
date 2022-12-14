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
    var arrayNavs = ['Blog','Home','About','Contacts'];
    var arraysDivs = ['div-blog','div-about','div-contacts'];
    var allComentarys = [
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
    var settings = {
        displayFlex : (li, divClass)=>{
            let divWrap = document.querySelectorAll('.divs-navigation')[0];
            li.children[0].addEventListener('click',()=>{
                tirarDisplay(li);
                console.log('veio aqui')
                document.querySelectorAll(divClass)[0].style.display="flex";
                divWrap.style.display="flex";
            })
        },
        changeColor: (element,cor,index=false, indexLogo=false)=>{
            if(indexLogo >= 0){
                if( indexLogo == 0 ){
                    element.classList.add('cYellow');
                    element.style.color = 'white';
                    cor = 'cYellow';
    
                }else if( indexLogo == 1){
                    element.classList.add('cRed');
                    element.style.color = 'white';
                    cor = 'cRed';
                }else if( indexLogo == 2){
                    element.classList.add('cGreen');
                    element.style.color = 'white';
                    cor = 'cGreen';
                }else if( indexLogo == 3){
                    element.classList.add('cBlue');
                    element.style.color = 'white';
                    cor = 'cBlue';
                }else if( indexLogo == 4){
                    element.classList.add('cOrange');
                    element.style.color = 'white';
                    cor = 'cOrange';
                }else if( indexLogo == 5){
                    element.classList.add('cPink');
                    element.style.color = 'white';
                    cor = 'cPink';
                }

            }else if(index >= 0){
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
            }
            tirarClasse(element,cor);
        },
        changeColorBg:(element,indexBody)=>{
            let index = indexBody;
            if( index == 0 ){
                element.classList.add('cYellow');
                bodyContainer.classList.add('bYellow')
                corBody = 'bYellow';
                cor = 'cYellow';

            }else if( index == 1){
                element.classList.add('cRed');
                bodyContainer.classList.add('bRed')
                corBody = 'bRed';
                cor = 'cRed';
            }else if( index == 2){
                element.classList.add('cGreen');
                bodyContainer.classList.add('bGreen')
                corBody = 'bGreen';
                cor = 'cGreen';
            }else if( index == 3){
                element.classList.add('cBlue');
                bodyContainer.classList.add('bBlue')
                corBody = 'bBlue';
                cor = 'cBlue';
            }else if( index == 4){
                element.classList.add('cOrange');
                bodyContainer.classList.add('bOrange')
                corBody = 'bOrange';
                cor = 'cOrange';
            }else if( index == 5){
                element.classList.add('cPink');
                bodyContainer.classList.add('bPink')
                corBody = 'bPink';
                cor = 'cPink';
            }
            tirarClasse(element,cor, corBody);
        },

    }
    var indexBody=0;
    for(i=0; i<3; i++){
        let divs = document.querySelectorAll('.'+arraysDivs[i]);
        divs[0].addEventListener('mouseenter',()=>{
            document.querySelectorAll('.logotype')[0].style.color='black';
            let li = document.querySelectorAll('.linksNav');
            for( i = 0; i < 4; i++){
                li[i].children[0].style.color='black';
            }
            settings.changeColorBg(divs[0], indexBody); 
            if( indexBody == 5 ){
                indexBody = 0;
            }else{
                indexBody++;
            }
        });
    }
    
    //volta para o inicio e esconde as div de navegação q tiver aberta
    function voltarInicio(){
        let home = document.querySelectorAll('.linksNav')[0];
        home.addEventListener('click',()=>{
            tirarDisplay(home);
        })
        let logo = document.querySelectorAll('.logotype')[0];
        logo.addEventListener('click',()=>{
            tirarDisplay(logo);
        })
    }
    //tira o display das divs dos links de navegação
    function tirarDisplay( element ){
        let dp = document.querySelectorAll('.divs-navigation')[0];
        if(element.classList[0] == 'logotype'|| element.children[0].innerHTML == 'Home'){
            dp.style.display = 'none';
            for(i=0; i<3; i++){
                dp.children[i].style.display = 'none';
            }
        }else{
            for(i=0; i<3; i++){
                dp.children[i].style.display = 'none';
            }
        }
    }
    //mostra a div refente ao link de navegação.
    function mostrarDiv( element ){

    }
    //muda o estilo ao passar o mouse por cima
    function mudarEstilo( element ){
        let index=0;
        let indexLogo=0;
        element.addEventListener('mouseenter',()=>{
            let htmlOfLink;
            //faz o efeito das cores da logo e dos links de navegação
            if (element.innerHTML == 'Blog' || element.innerHTML == 'Seja bem-vindo!'){
                settings.changeColor(element,cor,false,indexLogo )
                if( indexLogo == 5 ){
                    indexLogo = 0;
                }else{
                    indexLogo++;
                }
            }else{
                htmlOfLink = element.children[0].innerHTML;
                if (arrayNavs.includes(htmlOfLink)){
                    settings.changeColor(element,cor,index,-1);        
                }
                if( index == 5 ){
                    index = 0;
                }else{
                    index++;
                }
            }
            //deixa a corda das letras da navegação branca
            if(element.childElementCount >= 1 ){
                element.children[0].style.color='white';
            }
        });
    }
    function tirarClasse(element, cor, corBody=false){
        let classBody =['bGreen','bYellow','bRed','bOrange','bBlue','bPink'];
        
        element.addEventListener('mouseleave',()=>{
            if(element == document.querySelectorAll('.logotype')[0]){
                element.classList.remove(cor);
                document.querySelectorAll('.logotype')[0].style.color='deepskyblue';
            }else if(element == document.querySelectorAll('.title')[0]){
                element.classList.remove(cor);
                document.querySelectorAll('.title')[0].style.color='deepskyblue';
            }else if(classBody.includes(corBody)){
                
                document.querySelectorAll('.logotype')[0].style.color='deepskyblue';
                document.querySelectorAll('.title')[0].style.color='deepskyblue';
                let li = document.querySelectorAll('.linksNav');
                for( i = 0; i < 4; i++){
                    li[i].children[0].style.color='deepskyblue';
                }
                bodyContainer.classList.remove(corBody);
                element.classList.remove(cor);
            }else if(arrayNavs.includes(element.children[0].innerHTML) ){
                element.children[0].style.color='deepskyblue';
                element.classList.remove(cor)
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
    for( i=0; i < quantFilhos; i++){
        let filho = el[i].children[0];
        let textLength = filho.innerHTML.length;

        if( textLength > maxL){
            let newText = filho.innerHTML.slice(0,(maxL-3))+'...';
            filho.innerHTML = newText;
            
        }

    }
}
//adiciona uma class que troca as cores
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