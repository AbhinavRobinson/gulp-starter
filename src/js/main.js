class Car{
    constructor(id){
        this.id=id;
    }
    start(){
        console.log(this);
        console.log(this.id);
    }
}
let car = new Car(20);
car.start();

// let promise = new Promise(
//     function(resolve,reject){
//         setTimeout(reject,2000,'promise');
//     }
// );

// promise.then(
//     value => console.log('fulfilled '+ value),
//     error => console.error('rejected ' + error)
// );
