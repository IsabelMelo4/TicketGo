class Observer{

  constructor(){
        this.observers = [];
    }

    AddObserver(observer){
        this.observers.push(observer);
    }

    notify(){
       
for (let observer of this.observers) {
    observer.update(this);
}
  
}}