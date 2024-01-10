class Autor{
    constructor(jmeno, prijmeni,datNar){
        this.jmeno = jmeno;
        this.prijmeni = prijmeni; 
        this.dat = datNar;
    }

    autorInfo(){
        return`${this.jmeno} - ${this.prijmeni}- ${this.datNar}`;
    }
}

class Obraz{
    constructor(autor, nazev, cena, rokV){
        this.autor = autor;
        this.nazev = nazev;
        this.cena = cena;
        this.rokV = rokV;
    }

    autorInfo(){
        return`${this.autor} - ${this. nazev}- ${this.cena} - ${this.rokV}`;
    }
    
}

let GoodArtist = new Autor("Frank" , " Artberg", '5.8.1958');
let GObraz = new Obraz(GoodArtist, "Klidná Zahrada", 127000, "7.9.1983"  );
let GObraz1 = new Obraz(GoodArtist, "Neklidná Zahrada", 135000, "8.9.1983"  );
let GObraz2 = new Obraz(GoodArtist, "Poklidná Zahrada", 154000, "9.9.1983"  );
let GObraz3 = new Obraz(GoodArtist, "Vyklidněná Zahrada", 160000, "10.9.1983"  );
let GObraz4 = new Obraz(GoodArtist, "Vylidněná Zahrada", 1180000, "11.9.1983"  );


const obrazy = [GObraz,GObraz1,GObraz2,GObraz3,GObraz4];
console.log(obrazy)


let celkovaCena = 0;
obrazy.forEach(element => {
    celkovaCena += element.cena;

});
console.log(celkovaCena);

obrazy.sort((a , b) => b.cena - a.cena);

console.log(obrazy)


let triNej = 0;
for(let i = 0; i < 3; i ++){
    console.log(obrazy[i]);
}



