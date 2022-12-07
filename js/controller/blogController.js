class BlogController{
    constructor(){

        this._linksOfNav = document.querySelectorAll('.linksNav > a');
        this._mainDivsNavigation = document.querySelectorAll('.divs-navigation')[0];
        this._divsNavigation = document.querySelectorAll('.divs-navigation > div');

        this.intialize();
    }
    //método dispara tudo que precisa acontecer após o dom carregar
    intialize(){
        //trecho abaixo adiciona funcionalidade ao clicar na logo
        this.addEvent(document.querySelector('.logotype'),'click',()=>{
            this.clearDisplay();
        });
        
        //trecho acima adiciona funcionalidade ao clicar na logo
        this.addEventsInLinksNav();
    }
    //método adiciona um evento ao elemento
    addEvent(element, event,fn){

        element.addEventListener(event, fn);
    }
    //aqui o será aplicado evento num determinado elemento e mudança do valor do display
    setEventAndDisplay(element, link, event, valueDisplay){
        this.addEvent(link,event,()=>{
            this.setDisplay(element, valueDisplay)
        })
    }
    //aqui os links de navegação recebem o evento click e as regras aplicadas após 
    addEventsInLinksNav(){
        for(let i=0; i <= this._linksOfNav.length-1; i++){
            let link = this._linksOfNav[i]
            switch(link.innerHTML){
                case 'Home':
                    this.addEvent(link,'click',()=>{
                        this.clearDisplay();
                    })
                    break;
                case 'Blog':
                    this.setEventAndDisplay(this._divsNavigation[2],link,'click','flex');
                    break;
                case 'About':
                    this.setEventAndDisplay(this._divsNavigation[0],link,'click','flex');
                    break;
                case 'Contacts':
                    this.setEventAndDisplay(this._divsNavigation[1],link,'click','flex');
                    break;
                default:
                    break;
            }   

        }
        
    }
    //método adiciona efeito hover e estilos
    hoverEfect(element){
        
    }
    //aqui acontece a troca do valor do display sem validação
    changeDisplay(element,value){
        element.style.display = value;
        this._mainDivsNavigation.style.display = value;
    }
    //aqui são as regras para se trocar o display
    setDisplay(element,value){
        let displayDivsNavigaton = this._mainDivsNavigation.style.display;
        if(displayDivsNavigaton == 'none' || displayDivsNavigaton == ''){
            this.changeDisplay(element,value)
        }else if( displayDivsNavigaton == 'flex' ){
            this.clearDisplay();
            this.changeDisplay(element, value);

        }
        
    }
    //aqui atribui o valor 'none' a todas as divs de navegação
    clearDisplay(){
        this._divsNavigation.forEach((divNavs)=>{
            divNavs.style.display ='none'
        });
        document.querySelector('.divs-navigation').style.display = 'none';
    }
};