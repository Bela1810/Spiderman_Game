class Personaje {
    #lema;
    #atacando = false;
    #nivel = 1000;
    
    constructor(nombre, alter) {
        this.nombre = nombre;
        this.alter = alter;
    }
    
    decirLema() {
        return this.#lema;
    }
    
    recibirAtaque(valor) {
        this.#nivel -= valor;
    }
    
    get getNivel() {
        return this.#nivel;
    }

    setNivel(nuevoNivel) {
        this.#nivel = nuevoNivel; 
    }
    
    set setLema(lema) {
        this.#lema = lema;
    }
    
    get getLema() {
        return `Hola soy ${this.nombre}, ${this.#lema}`;
    }
    
    set setAtacando(value){
        this.#atacando = value
    }
    
    get getAtacando(){
        return this.#atacando
    }
    
    
    }
   
    
    class Hero extends Personaje {
    
    
    
    saludar() {
        console.log('Hola');
    }
    }


    
    class Villano extends Personaje {
    decirLema() {
        console.log(`SOY EL MAS MALO ${super.decirLema()}`);
    }
    }
    
    let spiderman = new Hero('Spiderman', 'Queens');
    let ironman = new Hero('Ironman', 'New York');
    let greenGoblin = new Villano('Green Goblin', 'New York');
    
    spiderman.saludar();
    console.log(spiderman.getNivel)
    ironman.decirLema();
    greenGoblin.decirLema();
    
    
    const spidermanAtaca = () => {
        let valorAtaque = Math.floor(Math.random() * 100);
        
        greenGoblin.recibirAtaque(valorAtaque);
        window.document.getElementById('goblinLevel').innerText = greenGoblin.getNivel;
        
        let spidermanImg = document.getElementById('Spiderman');
        spidermanImg.src = "../images/spiderman.png"; 

        if (valorAtaque <= 0 || greenGoblin.getNivel <= 0) {
            finalizarJuego('Spiderman'); 
        }
    
    }
    
    const goblinAtaca = () => {
        let valorAtaque = Math.floor(Math.random() * 100);
        
        spiderman.recibirAtaque(valorAtaque);
        window.document.getElementById('spidermanLevel').innerText = spiderman.getNivel;
        
        element = document.getElementById('Green_goblin')
        element.src="../images/Green Gobling.png"

        if (valorAtaque <= 0 || spiderman.getNivel <= 0) {
            finalizarJuego('Green Gobling'); 
        }
    
    
    }

    const telaraña = () => {
        let valorAtaque = Math.floor(Math.random() * 200);
        
        greenGoblin.recibirAtaque(valorAtaque);
        window.document.getElementById('goblinLevel').innerText = greenGoblin.getNivel;

        let spidermanImg = document.getElementById('Spiderman');
        spidermanImg.src = "../images/lanzar_telaraña.jpg"; 
    
        if (valorAtaque <= 0 || greenGoblin.getNivel <= 0) {
            finalizarJuego('Spiderman'); 
        }
    }

    

    const bomba = () => {
        let valorAtaque = Math.floor(Math.random() * 200);
        
        spiderman.recibirAtaque(valorAtaque);
        window.document.getElementById('spidermanLevel').innerText = spiderman.getNivel;

        let spidermanImg = document.getElementById('Green_goblin');
        spidermanImg.src = "../images/Green_Gobling_bomb.jpg"; 

        if (valorAtaque <= 0 || spiderman.getNivel <= 0) {
            finalizarJuego('Green Gobling');
        }
    
        
    }

    const finalizarJuego = (ganador) => {
        let winnerText = document.getElementById('winnerText');
        winnerText.innerText = `Ganador: ${ganador}`;
        winnerText.style.display = 'block'; 


        alert('¡El juego ha terminado!');
    };

    const reiniciarJuego = () => {
    
        greenGoblin.setNivel(1000); 
        document.getElementById('goblinLevel').innerText = greenGoblin.getNivel;
    
        spiderman.setNivel(1000); 
        document.getElementById('spidermanLevel').innerText = spiderman.getNivel;
    
        let winnerText = document.getElementById('winnerText');
        winnerText.style.display = 'none';
    };
    


