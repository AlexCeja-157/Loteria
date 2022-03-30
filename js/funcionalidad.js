

let Tablero1 = [];
let Tablero2 = [];
let Tablero3 = [];


function crearTableros(limInferior, LimSuperior){
    for(let i = 0; i < 16; i++){
    Tablero1.push (Math.floor(Math.random() * (LimSuperior - limInferior)) + limInferior);
    Tablero2.push (Math.floor(Math.random() * (LimSuperior - limInferior)) + limInferior);
    Tablero3.push (Math.floor(Math.random() * (LimSuperior - limInferior)) + limInferior);

    }

   console.log(Tablero1);
   console.log(Tablero2);
   console.log(Tablero3);

//     // Se genera el Tablero1 en base a los resultados aleatorios

    let t1_1 = document.getElementById("img_t1_1");
    t1_1.src=`img/Cartas lotería/${Tablero1[0]}.jpg`
    let t1_2 = document.getElementById("img_t1_2");
    t1_2.src=`img/Cartas lotería/${Tablero1[1]}.jpg`
    let t1_3 = document.getElementById("img_t1_3");
    t1_3.src=`img/Cartas lotería/${Tablero1[2]}.jpg`
    let t1_4 = document.getElementById("img_t1_4");
    t1_4.src=`img/Cartas lotería/${Tablero1[3]}.jpg`
    let t1_5 = document.getElementById("img_t1_5");
    t1_5.src=`img/Cartas lotería/${Tablero1[4]}.jpg`
    let t1_6 = document.getElementById("img_t1_6");
    t1_6.src=`img/Cartas lotería/${Tablero1[5]}.jpg`
    let t1_7 = document.getElementById("img_t1_7");
    t1_7.src=`img/Cartas lotería/${Tablero1[6]}.jpg`
    let t1_8 = document.getElementById("img_t1_8");
    t1_8.src=`img/Cartas lotería/${Tablero1[7]}.jpg`
    let t1_9 = document.getElementById("img_t1_9");
    t1_9.src=`img/Cartas lotería/${Tablero1[8]}.jpg`
    let t1_10 = document.getElementById("img_t1_10");
    t1_10.src=`img/Cartas lotería/${Tablero1[9]}.jpg`
    let t1_11 = document.getElementById("img_t1_11");
    t1_11.src=`img/Cartas lotería/${Tablero1[10]}.jpg`
    let t1_12 = document.getElementById("img_t1_12");
    t1_12.src=`img/Cartas lotería/${Tablero1[11]}.jpg`
    let t1_13 = document.getElementById("img_t1_13");
    t1_13.src=`img/Cartas lotería/${Tablero1[12]}.jpg`
    let t1_14 = document.getElementById("img_t1_14");
    t1_14.src=`img/Cartas lotería/${Tablero1[13]}.jpg`
    let t1_15 = document.getElementById("img_t1_15");
    t1_15.src=`img/Cartas lotería/${Tablero1[14]}.jpg`
    let t1_16 = document.getElementById("img_t1_16");
    t1_16.src=`img/Cartas lotería/${Tablero1[15]}.jpg`

//     // Se genera el Tablero Numero 2 en base a los resultados aleatorios

    let t2_1 = document.getElementById("img_t2_1");
    t2_1.src=`img/Cartas lotería/${Tablero2[0]}.jpg`
    let t2_2 = document.getElementById("img_t2_2");
    t2_2.src=`img/Cartas lotería/${Tablero2[1]}.jpg`
    let t2_3 = document.getElementById("img_t2_3");
    t2_3.src=`img/Cartas lotería/${Tablero2[2]}.jpg`
    let t2_4 = document.getElementById("img_t2_4");
    t2_4.src=`img/Cartas lotería/${Tablero2[3]}.jpg`
    let t2_5 = document.getElementById("img_t2_5");
    t2_5.src=`img/Cartas lotería/${Tablero2[4]}.jpg`
    let t2_6 = document.getElementById("img_t2_6");
    t2_6.src=`img/Cartas lotería/${Tablero2[5]}.jpg`
    let t2_7 = document.getElementById("img_t2_7");
    t2_7.src=`img/Cartas lotería/${Tablero2[6]}.jpg`
    let t2_8 = document.getElementById("img_t2_8");
    t2_8.src=`img/Cartas lotería/${Tablero2[7]}.jpg`
    let t2_9 = document.getElementById("img_t2_9");
    t2_9.src=`img/Cartas lotería/${Tablero2[8]}.jpg`
    let t2_10 = document.getElementById("img_t2_10");
    t2_10.src=`img/Cartas lotería/${Tablero2[9]}.jpg`
    let t2_11 = document.getElementById("img_t2_11");
    t2_11.src=`img/Cartas lotería/${Tablero2[10]}.jpg`
    let t2_12 = document.getElementById("img_t2_12");
    t2_12.src=`img/Cartas lotería/${Tablero2[11]}.jpg`
    let t2_13 = document.getElementById("img_t2_13");
    t2_13.src=`img/Cartas lotería/${Tablero2[12]}.jpg`
    let t2_14 = document.getElementById("img_t2_14");
    t2_14.src=`img/Cartas lotería/${Tablero2[13]}.jpg`
    let t2_15 = document.getElementById("img_t2_15");
    t2_15.src=`img/Cartas lotería/${Tablero2[14]}.jpg`
    let t2_16 = document.getElementById("img_t2_16");
    t2_16.src=`img/Cartas lotería/${Tablero2[15]}.jpg`

//     // Se genera el Tablero Numero 3 en base a los resultados aleatorios

    let t3_1 = document.getElementById("img_t3_1");
    t3_1.src=`img/Cartas lotería/${Tablero3[0]}.jpg`
    let t3_2 = document.getElementById("img_t3_2");
    t3_2.src=`img/Cartas lotería/${Tablero3[1]}.jpg`
    let t3_3 = document.getElementById("img_t3_3");
    t3_3.src=`img/Cartas lotería/${Tablero3[2]}.jpg`
    let t3_4 = document.getElementById("img_t3_4");
    t3_4.src=`img/Cartas lotería/${Tablero3[3]}.jpg`
    let t3_5 = document.getElementById("img_t3_5");
    t3_5.src=`img/Cartas lotería/${Tablero3[4]}.jpg`
    let t3_6 = document.getElementById("img_t3_6");
    t3_6.src=`img/Cartas lotería/${Tablero3[5]}.jpg`
    let t3_7 = document.getElementById("img_t3_7");
    t3_7.src=`img/Cartas lotería/${Tablero3[6]}.jpg`
    let t3_8 = document.getElementById("img_t3_8");
    t3_8.src=`img/Cartas lotería/${Tablero3[7]}.jpg`
    let t3_9 = document.getElementById("img_t3_9");
    t3_9.src=`img/Cartas lotería/${Tablero3[8]}.jpg`
    let t3_10 = document.getElementById("img_t3_10");
    t3_10.src=`img/Cartas lotería/${Tablero3[9]}.jpg`
    let t3_11 = document.getElementById("img_t3_11");
    t3_11.src=`img/Cartas lotería/${Tablero3[10]}.jpg`
    let t3_12 = document.getElementById("img_t3_12");
    t3_12.src=`img/Cartas lotería/${Tablero3[11]}.jpg`
    let t3_13 = document.getElementById("img_t3_13");
    t3_13.src=`img/Cartas lotería/${Tablero3[12]}.jpg`
    let t3_14 = document.getElementById("img_t3_14");
    t3_14.src=`img/Cartas lotería/${Tablero3[13]}.jpg`
    let t3_15 = document.getElementById("img_t3_15");
    t3_15.src=`img/Cartas lotería/${Tablero3[14]}.jpg`
    let t3_16 = document.getElementById("img_t3_16");
    t3_16.src=`img/Cartas lotería/${Tablero3[15]}.jpg`

    const msj = document.getElementById("Mensaje");
    msj.className = "verMensaje"

 return

}

function selector(){
const selector1 = document.getElementById("tab1");
selector1.className = "btn";
selector1.className = "btn-primary";
}


function selecTablero1() {
    const banner1 = document.getElementById("tableros");
    banner1.className = "bannerOculto";

    const banner2 = document.getElementById("juego");
    banner2.className = "bannerPrincipal"

    const btn1 = document.getElementById("btn1");
    btn1.className = "bannerOculto"

    const msj = document.getElementById("Mensaje");
    msj.className = "bannerOculto"

    let miTab_1 = document.getElementById("miTab_1");
    miTab_1.src=`img/Cartas lotería/${Tablero1[0]}.jpg`
    let miTab_2 = document.getElementById("miTab_2");
    miTab_2.src=`img/Cartas lotería/${Tablero1[1]}.jpg`
    let miTab_3 = document.getElementById("miTab_3");
    miTab_3.src=`img/Cartas lotería/${Tablero1[2]}.jpg`
    let miTab_4 = document.getElementById("miTab_4");
    miTab_4.src=`img/Cartas lotería/${Tablero1[3]}.jpg`
    let miTab_5 = document.getElementById("miTab_5");
    miTab_5.src=`img/Cartas lotería/${Tablero1[4]}.jpg`
    let miTab_6 = document.getElementById("miTab_6");
    miTab_6.src=`img/Cartas lotería/${Tablero1[5]}.jpg`
    let miTab_7 = document.getElementById("miTab_7");
    miTab_7.src=`img/Cartas lotería/${Tablero1[6]}.jpg`
    let miTab_8 = document.getElementById("miTab_8");
    miTab_8.src=`img/Cartas lotería/${Tablero1[7]}.jpg`
    let miTab_9 = document.getElementById("miTab_9");
    miTab_9.src=`img/Cartas lotería/${Tablero1[8]}.jpg`
    let miTab_10 = document.getElementById("miTab_10");
    miTab_10.src=`img/Cartas lotería/${Tablero1[9]}.jpg`
    let miTab_11 = document.getElementById("miTab_11");
    miTab_11.src=`img/Cartas lotería/${Tablero1[10]}.jpg`
    let miTab_12 = document.getElementById("miTab_12");
    miTab_12.src=`img/Cartas lotería/${Tablero1[11]}.jpg`
    let miTab_13 = document.getElementById("miTab_13");
    miTab_13.src=`img/Cartas lotería/${Tablero1[12]}.jpg`
    let miTab_14 = document.getElementById("miTab_14");
    miTab_14.src=`img/Cartas lotería/${Tablero1[13]}.jpg`
    let miTab_15 = document.getElementById("miTab_15");
    miTab_15.src=`img/Cartas lotería/${Tablero1[14]}.jpg`
    let miTab_16 = document.getElementById("miTab_16");
    miTab_16.src=`img/Cartas lotería/${Tablero1[15]}.jpg`

}

function selecTablero2() {
    const banner1 = document.getElementById("tableros");
    banner1.className = "bannerOculto";

    const banner2 = document.getElementById("juego");
    banner2.className = "bannerPrincipal"

    const btn1 = document.getElementById("btn1");
    btn1.className = "bannerOculto"

    const msj = document.getElementById("Mensaje");
    msj.className = "bannerOculto"

    let miTab_1 = document.getElementById("miTab_1");
    miTab_1.src=`img/Cartas lotería/${Tablero2[0]}.jpg`
    let miTab_2 = document.getElementById("miTab_2");
    miTab_2.src=`img/Cartas lotería/${Tablero2[1]}.jpg`
    let miTab_3 = document.getElementById("miTab_3");
    miTab_3.src=`img/Cartas lotería/${Tablero2[2]}.jpg`
    let miTab_4 = document.getElementById("miTab_4");
    miTab_4.src=`img/Cartas lotería/${Tablero2[3]}.jpg`
    let miTab_5 = document.getElementById("miTab_5");
    miTab_5.src=`img/Cartas lotería/${Tablero2[4]}.jpg`
    let miTab_6 = document.getElementById("miTab_6");
    miTab_6.src=`img/Cartas lotería/${Tablero2[5]}.jpg`
    let miTab_7 = document.getElementById("miTab_7");
    miTab_7.src=`img/Cartas lotería/${Tablero2[6]}.jpg`
    let miTab_8 = document.getElementById("miTab_8");
    miTab_8.src=`img/Cartas lotería/${Tablero2[7]}.jpg`
    let miTab_9 = document.getElementById("miTab_9");
    miTab_9.src=`img/Cartas lotería/${Tablero2[8]}.jpg`
    let miTab_10 = document.getElementById("miTab_10");
    miTab_10.src=`img/Cartas lotería/${Tablero2[9]}.jpg`
    let miTab_11 = document.getElementById("miTab_11");
    miTab_11.src=`img/Cartas lotería/${Tablero2[10]}.jpg`
    let miTab_12 = document.getElementById("miTab_12");
    miTab_12.src=`img/Cartas lotería/${Tablero2[11]}.jpg`
    let miTab_13 = document.getElementById("miTab_13");
    miTab_13.src=`img/Cartas lotería/${Tablero2[12]}.jpg`
    let miTab_14 = document.getElementById("miTab_14");
    miTab_14.src=`img/Cartas lotería/${Tablero2[13]}.jpg`
    let miTab_15 = document.getElementById("miTab_15");
    miTab_15.src=`img/Cartas lotería/${Tablero2[14]}.jpg`
    let miTab_16 = document.getElementById("miTab_16");
    miTab_16.src=`img/Cartas lotería/${Tablero2[15]}.jpg`

}

function selecTablero3() {
    const banner1 = document.getElementById("tableros");
    banner1.className = "bannerOculto";

    const banner2 = document.getElementById("juego");
    banner2.className = "bannerPrincipal"

    const btn1 = document.getElementById("btn1");
    btn1.className = "bannerOculto"

    const msj = document.getElementById("Mensaje");
    msj.className = "bannerOculto"

    let miTab_1 = document.getElementById("miTab_1");
    miTab_1.src=`img/Cartas lotería/${Tablero3[0]}.jpg`
    let miTab_2 = document.getElementById("miTab_2");
    miTab_2.src=`img/Cartas lotería/${Tablero3[1]}.jpg`
    let miTab_3 = document.getElementById("miTab_3");
    miTab_3.src=`img/Cartas lotería/${Tablero3[2]}.jpg`
    let miTab_4 = document.getElementById("miTab_4");
    miTab_4.src=`img/Cartas lotería/${Tablero3[3]}.jpg`
    let miTab_5 = document.getElementById("miTab_5");
    miTab_5.src=`img/Cartas lotería/${Tablero3[4]}.jpg`
    let miTab_6 = document.getElementById("miTab_6");
    miTab_6.src=`img/Cartas lotería/${Tablero3[5]}.jpg`
    let miTab_7 = document.getElementById("miTab_7");
    miTab_7.src=`img/Cartas lotería/${Tablero3[6]}.jpg`
    let miTab_8 = document.getElementById("miTab_8");
    miTab_8.src=`img/Cartas lotería/${Tablero3[7]}.jpg`
    let miTab_9 = document.getElementById("miTab_9");
    miTab_9.src=`img/Cartas lotería/${Tablero3[8]}.jpg`
    let miTab_10 = document.getElementById("miTab_10");
    miTab_10.src=`img/Cartas lotería/${Tablero3[9]}.jpg`
    let miTab_11 = document.getElementById("miTab_11");
    miTab_11.src=`img/Cartas lotería/${Tablero3[10]}.jpg`
    let miTab_12 = document.getElementById("miTab_12");
    miTab_12.src=`img/Cartas lotería/${Tablero3[11]}.jpg`
    let miTab_13 = document.getElementById("miTab_13");
    miTab_13.src=`img/Cartas lotería/${Tablero3[12]}.jpg`
    let miTab_14 = document.getElementById("miTab_14");
    miTab_14.src=`img/Cartas lotería/${Tablero3[13]}.jpg`
    let miTab_15 = document.getElementById("miTab_15");
    miTab_15.src=`img/Cartas lotería/${Tablero3[14]}.jpg`
    let miTab_16 = document.getElementById("miTab_16");
    miTab_16.src=`img/Cartas lotería/${Tablero3[15]}.jpg`

}

var mazo = [];

function barajearMazo(limInferior, LimSuperior){
    for(let i = 0; i < LimSuperior; i++){
    mazo.push (Math.floor(Math.random() * (LimSuperior - limInferior)) + limInferior);
    }

    console.log(mazo);
    alert("Cartas Barajeadas, Listos para iniciar")
 }


let interval;
var i = -1;
var x = 0;

function iniciarJuego(){
    interval = setInterval(temporizador, 2000);        
}
    
function temporizador(){
    let carta = document.getElementById("mz");
    carta.src=`img/Cartas lotería/${mazo[x]}.jpg`

    i = i + 1;
    x = x + 1;

    if(i >= 53){
        clearInterval(interval);
    }

    console.log(i)
    console.log(mazo[i])
}

function detener(){
    clearInterval(interval);
}











    


