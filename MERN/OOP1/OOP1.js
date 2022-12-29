// FUNCIONES FLECHA


const user1 = {
  name: "Kermit",
  email: "kermit@sesame.org",
  friend: {
      name: "Miss Piggy",
      email: "piggy@sesame.org"
  }
}

class Vehicle {
  constructor (manufacturarer, model, color){
    this.miles = 0;
    this.model = model;
    this.manufacturarer = manufacturarer;
    this.color = color;
  }

  drive (){
    this.miles +=10;
  }
}



const car = new Vehicle ("BMW","M5", "BLUE");
//car.drive();
//console.log(car.miles);
//console.log(car);

class m5 extends Vehicle {
  constructor(color){
    super ("BMW","M5",color);
    this.hp=616;
  }
  printsumarry(){
    console.log(
    `bmw con 4.4l v7 tiwn turbo ${this.hp} hp and")`);
  }
    
}
const car2 = new m5 ("BLUE");

car2.printsumarry();
console.log(car2.manufacturarer);




