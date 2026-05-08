class TicketManager extends Observer{

static #instance;
    
    constructor(){

        super();

        if(TicketManager.#instance){
            return TicketManager.#instance;
        }

            this.tickets = [];
            TicketManager.#instance = this;
    }



    static instance(){
    if(!TicketManager.#instance) TicketManager.#instance = new TicketManager();
    return TicketManager.#instance;
    }


    buy(movie){
        this.tickets.push(movie); //quando essa função for chamada ela vai adicionar o filme na lista 
        this.notify();
    }


}