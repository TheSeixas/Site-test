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
        this._color;
        this._colorBody;
        this.initialize();
    }
    initialize(){
        this.efectColor();
    }
    //Método contém as regras para aplicação do efeito de cores
    efectColor(){
        
        this.starterLinksNav();
        this.starterLogoAndTitle();
        this.starterDivs();
    };
    //método adiciona efeito de cores as divs de navegação
    starterDivs(){
        let index = 0;
        this._divsNavigation.forEach((divEl)=>{
            this.addEvent(divEl, 'mouseenter',()=>{
                this.addEventsAndClass(divEl,this._classToElements[index],this._classToBody[index]);
                index = this.IncrementValue(index, 5);
                this.addColorInElement(document.querySelectorAll('.linksNav > a'), 'white');
                this.addColorInElement(document.querySelector('.logotype'),'white');
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
                });
            }else{
                this.addEvent(element, 'mouseleave',()=>{
                this.removeClassCollors(element);
            });
            }
        }else{
        }
    };
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
            this.addColorInElement(document.querySelectorAll('.linksNav > a'), 'deepskyblue');
            this.addColorInElement(document.querySelector('.logotype'),'deepskyblue');
        
        }else{
            element.classList.remove(this.color)
            let child = element.children[0];
            if(child){
                element.children[0].style.color = 'deepskyblue';
            }
        }
    }
    //método adiciona classe de cor no elemento
    addClassCollors(element,classEl, classBody=false){
        if(element){
            if(element.localName == 'div'){
                element.classList.add(classEl);
                document.querySelector('body').classList.add(classBody);
                this.color = classEl;
                this.colorBody = classBody;
                this.addEventAndRemoveClass(element,classBody);
    
            }else{
                let child = element.children[0];
                element.classList.add(classEl);
                this.color = classEl;
                this.indexColors.linksNav++
                if(element.localName == "li"){
                    element.children[0].style.color = 'white';
                }
                this.addEventAndRemoveClass(element);
            }
        }
    }

}