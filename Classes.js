class Autor{
/** @type {string} */
jmeno;
/** @type {string} */
prijmeni;
/** @type {Date} */
#datNar;

    constructor(jmeno, prijmeni,datNar){
        this.jmeno = jmeno;
        this.prijmeni = prijmeni; 
        this.#datNar = datNar;
    }

    autorInfo(){
        return `${this.jmeno} ${this.prijmeni} - ${this.#datNar.getDay()}.${this.#datNar.getMonth()+1}.${this.#datNar.getFullYear()}`;
    }
    jmeno(){
        return`${this.jmeno}`;
    }
}


class Obraz{
/** @type {Autor} */
autor;
/** @type {string} */
nazev;
/** @type {number} */
cena;
/** @type {number} */
rokV;

    constructor(autor, nazev, cena, rokV){
        this.autor = autor;
        this.nazev = nazev;
        this.cena = cena;
        this.rokV = rokV;
    }

    obrazInfo(){
        return`${this.autor.autorInfo()} - ${this. nazev}- ${this.cena} - ${this.rokV}`;
    }
    
    
}

let GoodArtist = new Autor("Frank" , " Artberg", new Date(1970, 3, 1));
let GObraz = new Obraz(GoodArtist, "Klidná Zahrada", 127000, "7.9.1983"  );
let GObraz1 = new Obraz(GoodArtist, "Neklidná Zahrada", 135000, "8.9.1983"  );
let GObraz2 = new Obraz(GoodArtist, "Poklidná Zahrada", 154000, "9.9.1983"  );
let GObraz3 = new Obraz(GoodArtist, "Vyklidněná Zahrada", 160000, "10.9.1983"  );
let GObraz4 = new Obraz(GoodArtist, "Vylidněná Zahrada", 1180000, "11.9.1983"  );


let AnotherAtrist = new Autor("Christopher" , "Tolkieny", new Date(1990, 8, 5));
let AnObraz = new Obraz(AnotherAtrist, "Pán Draků", 178000, "1.1.2004"  );
let AnObraz1 = new Obraz(AnotherAtrist, "Udoli Pallancar", 350000, "9.6.2004"  );
let AnObraz2 = new Obraz(AnotherAtrist, "Urubaen", 120000, "5.11.2007"  );
let AnObraz3 = new Obraz(AnotherAtrist, "Jezero u Skály Slz", 165000, "15.3.2006"  );
let AnObraz4 = new Obraz(AnotherAtrist, "Odkaz Krysařův", 860000, "17.9.2008"  );

const obrazy = [GObraz,GObraz1,GObraz2,GObraz3,GObraz4,AnObraz,AnObraz1,AnObraz2,AnObraz3,AnObraz4];
//console.log(obrazy)

const autori = [GoodArtist, AnotherAtrist];

//Count pro pocet obrazu v constantě
let countObrazu = 0;
obrazy.forEach(() => {
    countObrazu++;
  });

//Count pro pocet autoru v constantě
let countAutoru = 0;
autori.forEach(() => {
    countAutoru++;
});

let celkovaCena = 0;
obrazy.forEach(element => {
    celkovaCena += element.cena;

});
console.log(celkovaCena);


obrazy.sort((a , b) => b.cena - a.cena);

console.log(obrazy)

//Vypise tri nejdrazsi obrazy
function triNej(){
    for(let i = 0; i < 3; i ++){
        console.log(obrazy[i].obrazInfo());
    }
}   


//Nazev a cena obrazu od zadaneho autora
//function obrazyOd(jmenoAutora){
    
    let jmenoAutora = AnotherAtrist;
    for(let i = 0; i < countAutoru; i ++){
        if(jmenoAutora == obrazy[i].autor.jmeno){
            console.log(obrazy[i].obrazInfo())
        }
    }
    
//}
//obrazyOd(GoodArtist);

//function seznamAutoruADel(autori, obrazy){
for(let i = 0; i < countAutoru; i++){
    console.log(autori[i].autorInfo())
    for(let j = 0; j < countObrazu; j++){
        if(autori[i].jmeno == obrazy[j].autor.jmeno){
            console.log(obrazy[j].obrazInfo())
        }
    }
//}

//seznamAutoruADel(autori,obrazy);

}

document.getElementById("submitButton").addEventListener("click", function(eventArg){
    eventArg.preventDefault();
    const jmenoNovehoAutora = document.getElementById(name);
    const prijmeniNovehoAutora = document.getElementById(sureNameOfAutor);

    const jmenoNovehoObrazu = document.getElementById(nameOfPicture);
    const cenaNovehoObrazu = document.getElementById(costOfPicture);
    const rokVytvoreni = document.getElementById(yearOfCreation);

    let newArtist = new Autor(jmenoNovehoAutora ,prijmeniNovehoAutora);
    let newObraz = new Obraz(newArtist, jmenoNovehoObrazu,cenaNovehoObrazu, rokVytvoreni);

    autori.push(newArtist);
    obrazy.push(newObraz);

    console.log(autori)
    console.log(obrazy)
});














