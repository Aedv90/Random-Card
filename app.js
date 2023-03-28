function devuelveNumero(){
    let numero = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let positionNumero = (Math.floor(Math.random() * numero.length + 0));

    if(numero[positionNumero]=='10'){   
        document.getElementById("numero").style.left = "32%";
    }

    document.getElementById("numero").innerHTML = numero[positionNumero];
}

function devuelvepinta(){
    let pinta = ['♦','♥','♠','♣'];
    let positionpinta = (Math.floor(Math.random() * pinta.length + 0));

    if(pinta[positionpinta]=='♦' || pinta[positionpinta]=='♥'){   
        document.getElementById("pintaizquierda").style.color = "red";
        document.getElementById("pintaderecha").style.color = "red";
    } else{
        document.getElementById("pintaizquierda").style.color = "black";
        document.getElementById("pintaderecha").style.color = "black";
    }
    document.getElementById("pintaizquierda").innerHTML = pinta[positionpinta];
    document.getElementById("pintaderecha").innerHTML = pinta[positionpinta];
}
console.log(devuelveNumero());
console.log(devuelvepinta());

    document.getElementById("card").innerHTML = devuelvepinta();
    document.getElementById("card").innerHTML = devuelveNumero();