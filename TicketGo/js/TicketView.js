class TicketView {
  
    constructor(elementId){
        this.element = document.getElementById(elementId);
    }

    update(manager){
        if(manager.tickets.length === 0){
            this.element.innerText = "Nenhum ingresso comprado";
        } else {
            this.element.innerText =
                "Ingressos comprados: " + manager.tickets.length;
        }
}}