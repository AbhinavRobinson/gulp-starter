class Car{
    constructor(id){
        this.id=id;
    }
    start(){
        console.log(this);
        console.log(this.id);
    }
}

let car = new Car(2);
car.start();