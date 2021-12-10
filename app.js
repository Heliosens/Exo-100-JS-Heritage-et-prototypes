function Vehicule(couleur, roues, marque){
    this.color = couleur;
    this.wheel = roues;
    this.mark = marque;

    this.demarrer = function (){
        console.log("le véhicule démarre.");
    }

    this.arreter = function (){
        console.log("le véhicule s'arrête.");
    }
}

function Velo (couleur, roues, marque, rayonRoues, typePeinture){
    Vehicule.call(this, couleur, roues, marque);
    this.rayon = rayonRoues;
    this.paintType = typePeinture;

    this.monter = function (){
        console.log("L'utilisateur monte sur le vélo");
    }
}


let car_01 = new Vehicule("noir", "4", "renault");
car_01.demarrer();

let test = new Velo("bleu", "2", "bmx", "30", "brillant");
test.demarrer();
