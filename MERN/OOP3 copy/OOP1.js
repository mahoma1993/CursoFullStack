// clase principal de Vehicle 
class ninja {
    constructor (nombre,salud){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;

    }
    sayname(){
        this.nombre="Ninja";
    }
    showstats(){
        console.log(this.nombre, this.velocidad, this.fuerza,this.salud);
    }
    drink(){
        this.salud+=10;
    }
    

}

const prueba= new ninja("Mohamad",5);

prueba.drink();
prueba.showstats();

prueba.sayname();

prueba.showstats();




