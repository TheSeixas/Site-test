class BlogViews{
    constructor(){
        this._classToElements = ['cYellow','cOrange','cBlue','cRed','cPink','cGreen'];
        this._classToBody = ['bYellow','bOrange','bBlue','bRed','bPink','bGreen'];
        this._linksOfNav = document.querySelectorAll('.linksNav');
        this._mainDivsNavigation = document.querySelectorAll('.divs-navigation')[0];
        this._divsNavigation = document.querySelectorAll('.divs-navigation > div');
        this.indexColors = {
            linksNav: 0,
            divsNav: 0,
            logo: 0,    
            title:0
        };
        this._colorToRevert;
        this._color;
        this._colorBody;
        this.initialize();
    }
    initialize(){
        this.efects();
        
    }
    //Método contém as regras para aplicação do efeito de cores
    efects(){
        
        this.starterLinksNav();
        this.starterLogoAndTitle();
        this.starterDivs();
        this.initHoverInElementsOfDivsNavigation();
        this.gettAndHideTexts()
    };
    //método adiciona efeito de cores as divs de navegação
    starterDivs(){
        let index = 0;
        this._divsNavigation.forEach((divEl)=>{
            this.addEvent(divEl, 'mouseenter',()=>{
                this.addEventsAndClass(divEl,this._classToElements[index],this._classToBody[index]);
                index = this.IncrementValue(index, 5);
                if(this._colorToRevert == undefined ){
                    this._colorToRevert = 'black';
                }
                this.choiceColorWords();
            });
        });
    }
    //método adiciona efeito de cores ao link de navegação
    starterLinksNav(){
        for(let i=0; i < this._linksOfNav.length; i++){
            let el = this._linksOfNav[i];
            let index=0;
            this.addEvent(el,'mouseenter', ()=>{
                this.addEventsAndClass(el,this._classToElements[index]);
                if(index >= 5){
                    index = 0;
                }else{
                    index++;
                }
            })
        }
    }
    addColorInElement(element, color){
        if(element.length > 1 ){
            element.forEach( el =>{
                el.style.color = color;
            });
        }else if(element[0]){
            element[0].style.color = color;
        }else{
            element.style.color = color;
        }
    };
    //método adiciona o efeito de cores ao logo e ao title
    starterLogoAndTitle(){
        let logo = document.querySelector('.logotype');
        let title = document.querySelector('.title');
        let els = [logo,title];
        let indLogo = 0;
        let indTitle = 0;
        els.forEach((el)=>{
            if(el == logo ){
                this.addEvent(el,'mouseenter',()=>{
                    this.addEventsAndClass(logo, this._classToElements[indLogo]);
                    indLogo = this.IncrementValue(indLogo, 5);
                });
             }else{
                this.addEvent(el,'mouseenter',()=>{
                    this.addEventsAndClass(title,this._classToElements[indTitle]);
                    indTitle = this.IncrementValue(indTitle, 5);
                });
             };
            
        });
    }
    //método incrementa +1 no valor da variável
    IncrementValue(index, theAmount){
        if( index == theAmount ){
            index = 0;
        
        }else{
            index++;
        }
        return index;
    }
    //adiciona o mousenter atraves do addEvent, adiciona cor ao elemento e incrementa o index referente ao elemento
    addEventsAndClass(element ,classColor, classBody=false){
        
        this.addEventAndRemoveClass(element, classBody);
        this.addClassCollors(element, classColor, classBody);
    };
    //método tira o efeito de cor ao tirar o mouse
    addEventAndRemoveClass(element, classBody=false){
        if(element){
            let noColorBody = ['li','span','h1'];
            if(!noColorBody.includes(element.localName)){
                this.addEvent(element, 'mouseleave',()=>{
                this.removeClassCollors(element, classBody);
                this.choiceColorWords('continue');
                });
            }else{
                this.addEvent(element, 'mouseleave',()=>{
                this.removeClassCollors(element);
            });
            }
        }else{
        }
    };
    getAllWords(){
        let allP = document.querySelectorAll('p');
        let allLinks= document.querySelectorAll('a');
        let allH3 = document.querySelectorAll('h3');
        let allSpanDataUser= document.querySelectorAll('span');
        let logo = document.querySelectorAll('.logotype');
        let title = document.querySelectorAll('.title');
        
        let allWords =[allH3,allLinks, allP,allSpanDataUser,logo, title];
        return allWords;
    }
    choiceColorWords(deep = false){
        if(deep){
            this._colorToRevert = 'white';
        }else if(deep = 'continue'){
            
        }else{
            this._colorToRevert = 'black'
        }
        let allWords = this.getAllWords();
        switch(this._colorToRevert){
            case 'black':
                this.addColorAllElements(allWords, 'white');
                this._colorToRevert = 'white';
                break;
            case 'white':
                this.addColorAllElements(allWords, 'black');  
                this._colorToRevert = 'black';         
                break;
        }
              
    }
    //aqui todas as letras recebem cor 
    addColorAllElements(element,cl){
        element.forEach((el)=>{
            el.forEach( (e)=>{
                if(e.length > 1){
                    e.forEach((words)=>{
                        words.style.color = cl;
                    });
                }else{
                    
                    e.style.color = cl;
                }
            });
        });
    }
    //método adiciona um evento ao elemento
    addEvent(element, event,fn){
        if( element.length > 1){
            element.forEach((el)=>{
                el.addEventListener(event, fn)
            });
        }else{
            element.addEventListener(event, fn);
        };
    };
    //método remove a classe de cor do elemento
    removeClassCollors(element,corBody=false){
        if(corBody){
            element.classList.remove(this.color);
            document.querySelector('body').classList.remove(corBody);
        
        }else{
            element.classList.remove(this.color)
            let child = element.children[0];
            if(child){
                element.children[0].style.color = 'black';
            }else if(element.localName == 'h1' || element.localName == 'span'){
                element.style.color = 'black';
            }
        }
    }
    //método adiciona classe de cor no elemento
    addClassCollors(element,classEl, classBody=false){
        if(element){
            if(element.localName == 'div'){
                this.addEventAndRemoveClass(element,classBody); 
                element.classList.add(classEl);
                document.querySelector('body').classList.add(classBody);
                this.color = classEl;
                this.colorBody = classBody;
                
    
            }else{
                this.addEventAndRemoveClass(element);
                element.classList.add(classEl);
                this.color = classEl;
                this.indexColors.linksNav++
                if(element.localName == "li"){
                    element.children[0].style.color = 'white';
                }else if(element.localName == 'span' || element.localName == 'h1'){
                    element.style.color = 'white';
                }
                
            }
        }
    }
    //método chama todos os efeitos hover das divis de navegação
    initHoverInElementsOfDivsNavigation(){
        let posts = document.querySelectorAll('.post');
        let distacs = document.querySelectorAll('.content-destac');
        let coments = document.querySelectorAll('.user-coment');
        let titleInputComentary = document.querySelector('.comentarios h3');
        let titleLastComents = document.querySelector('.users-comentary h3');
        this.mForEachToHover(posts,'ef-hover','p');
        this.mForEachToHover(distacs,'ef-hover','a');
        this.mForEachToHover(coments,'ef-hover', 'p');
        this.mForEachToHover(coments,'ef-hover', 'a');
        this.mForEachToHover(coments,'ef-hover', 'span');
        this.mForEachToHover(coments,'ef-hover', 'ion-icon');
        this.addHover(titleInputComentary,'ef-hover-titles');
        this.addHover(titleLastComents,'ef-hover-titles');
    }
    //adiciona todos os filhos do elemento dentro do método que adiciona o efeito hover
    mForEachToHover(element,clEfect, son){
        element.forEach((el)=>{
            if(el){
                this.addHover(el,clEfect,son);
            }
        });
    }
    //adiciona o efeito hover no elemento
    addHover(element, clEfect,son=false){
        if(son){
            this.addEvent(element, 'mouseenter',()=>{
                this.removeHover(element,clEfect, son);
                this.hoverEfectToElements(element,clEfect, son)
                
            });
        }else{
            this.addEvent(element, 'mouseenter',()=>{
                this.removeHover(element,clEfect);
                this.hoverEfectToElements(element,clEfect)
                
            });
        }
        
    }
    //remove o efeito hover do elemento 
    removeHover(element,clEfect, son=false){
        if(son){
            this.addEvent(element, 'mouseleave',()=>{
                this.removeHoverInElement(element,clEfect, son);
            });
        }else{
            this.addEvent(element, 'mouseleave',()=>{
                this.removeHoverInElement(element,clEfect);
            });
        }
    };
    //adiciona efeito hover e estilo
    hoverEfectToElements(element,clEfect, son=false){
        if(son){
            element.classList.add(clEfect);
            element.querySelector(son).style.color = 'black';
        }else{
            element.classList.add(clEfect);
            element.style.color = 'black';
        }      
    }
    //remove efeito hover e estilo
    removeHoverInElement(element, clEfect,son=false){
        if(son){
            element.classList.remove(clEfect);
            element.querySelector(son).style.color = 'white';
        }else{
            element.classList.remove(clEfect);
            element.style.color = 'white';
        }
    }
    //cria um erray dos textos q receberão elipisis caso excedam tamanho de caracteres e adiciona aos metodos que farão o resto
    gettAndHideTexts(){
        let postP = document.querySelectorAll('.post p');
        this.mForEachToText(postP,56)
        let txtDestA = document.querySelectorAll('.content-destac a');
        this.mForEachToText(txtDestA,56)
    }
    //que esconde o texto com elipsis
    hideText(el, maxL){    
        let textLength = el.innerHTML.length;
        if( textLength > maxL){
            let newText = el.innerHTML.slice(0,(maxL-3))+'...';
            el.innerHTML = newText;
            
        }
    }
    //percorre o elemento pra adicionar cada filho ao método que esconde o texto com elipsis
    mForEachToText(element,maxL){
        element.forEach((el)=>{
            this.hideText(el, maxL)
        });
    }
}