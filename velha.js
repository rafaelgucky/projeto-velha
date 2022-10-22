
var vez = 1
var clicouq1 = false
var clicouq2 = false
var clicouq3 = false
var clicouq4 = false
var clicouq5 = false
var clicouq6 = false
var clicouq7 = false
var clicouq8 = false
var clicouq9 = false
var tentativa = 0
var q1 = 0
var q2 = 0
var q3 = 0
var q4 = 0
var q5 = 0
var q6 = 0
var q7 = 0
var q8 = 0
var q9 = 0
var vencedor = window.document.getElementById('vencedor')
var p10 = window.document.getElementById('p1')
var p20 = window.document.getElementById('p2')
var escolha = 0
function j1(){
    vez = 1
    var j2 = window.document.getElementById('j2')
    if(escolha % 2 == 0){
    var j1 = window.document.getElementById('j1')
    j1.style.background = 'green'
    j2.style.background = 'none'
    }
    escolha = 1
}
function j2(){
    vez = 0
    escolha = 1
    var j1 = window.document.getElementById('j1')
    if(escolha / 2 == 0.5){
    var j2 = window.document.getElementById('j2')
    j2.style.background = 'green'
    j1.style.background = 'none'
    }
    escolha = 0
}
function velha1(){
    var quadrado1 = document.getElementById('q1')
    if(clicouq1 == false){
        vez += 1
        if(vez % 2 == 0){
        quadrado1.style.backgroundImage = 'url(X.png)'
        quadrado1.style.backgroundRepeat = 'no-repeat'
        q1 += 1
        }
        else{
            quadrado1.style.backgroundImage = 'url(O.png)'
            quadrado1.style.backgroundRepeat = 'no-repeat'
            q1 += 2
        }
        clicouq1 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha2(){
    var quadrado2 = document.getElementById('q2')
    if(clicouq2 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado2.style.backgroundImage = 'url(X.png)'
            quadrado2.style.backgroundRepeat = 'no-repeat'
            q2 = 1
            }
        else{
            quadrado2.style.backgroundImage = 'url(O.png)'
            quadrado2.style.backgroundRepeat = 'no-repeat'
            q2 = 2
        }
        clicouq2 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha3(){
    var quadrado3 = document.getElementById('q3')
    if(clicouq3 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado3.style.backgroundImage = 'url(X.png)'
            quadrado3.style.backgroundRepeat = 'no-repeat'
            q3 = 1
        }
        else{
            quadrado3.style.backgroundImage = 'url(O.png)'
            quadrado3.style.backgroundRepeat = 'no-repeat'
            q3 = 2
        }
        clicouq3 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha4(){
    var quadrado4 = document.getElementById('q4')
    if(clicouq4 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado4.style.backgroundImage = 'url(X.png)'
            quadrado4.style.backgroundRepeat = 'no-repeat'
            q4 = 1
            }
        else{
            quadrado4.style.backgroundImage = 'url(O.png)'
            quadrado4.style.backgroundRepeat = 'no-repeat'
            q4 = 2
        }
        clicouq4 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha5(){
    var quadrado5 = document.getElementById('q5')
    if(clicouq5 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado5.style.backgroundImage = 'url(X.png)'
            quadrado5.style.backgroundRepeat = 'no-repeat'
            q5 = 1
            }
        else{
            quadrado5.style.backgroundImage = 'url(O.png)'
            quadrado5.style.backgroundRepeat = 'no-repeat'
            q5 = 2
        }
        clicouq5 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha6(){
    var quadrado6 = document.getElementById('q6')
    if(clicouq6 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado6.style.backgroundImage = 'url(X.png)'
            quadrado6.style.backgroundRepeat = 'no-repeat'
            q6 = 1
            }
        else{
            quadrado6.style.backgroundImage = 'url(O.png)'
            quadrado6.style.backgroundRepeat = 'no-repeat'
            q6 = 2
        }
        clicouq6 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha7(){
    var quadrado7 = document.getElementById('q7')
    if(clicouq7 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado7.style.backgroundImage = 'url(X.png)'
            quadrado7.style.backgroundRepeat = 'no-repeat'
            q7 = 1
            }
        else{
            quadrado7.style.backgroundImage = 'url(O.png)'
            quadrado7.style.backgroundRepeat = 'no-repeat'
            q7 = 2
        }
        clicouq7 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha8(){
    var quadrado8 = document.getElementById('q8')
    if(clicouq8 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado8.style.backgroundImage = 'url(X.png)'
            quadrado8.style.backgroundRepeat = 'no-repeat'
            q8 = 1
            }
        else{
            quadrado8.style.backgroundImage = 'url(O.png)'
            quadrado8.style.backgroundRepeat = 'no-repeat'
            q8 = 2
        }
        clicouq8 = true
        tentativa += 1
        if(q1 == 1 && q2 == 1 && q3 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        } 
        if(q4 == 1 && q5 == 1 && q6 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q7 == 1 && q8 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q5 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q5 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q1 == 1 && q4 == 1 && q7 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q2 == 1 && q5 == 1 && q8 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }
        if(q3 == 1 && q6 == 1 && q9 == 1){
            vencedor.innerHTML = `Vitória de ${p10.value}`
        }


        if(q1 == 2 && q2 == 2 && q3 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        } 
        if(q4 == 2 && q5 == 2 && q6 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q7 == 2 && q8 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q5 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q5 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q1 == 2 && q4 == 2 && q7 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q2 == 2 && q5 == 2 && q8 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
        if(q3 == 2 && q6 == 2 && q9 == 2){
            vencedor.innerHTML = `Vitória de ${p20.value}`
        }
    }
}
function velha9(){
    var quadrado9 = document.getElementById('q9')
    if(clicouq9 == false){
        vez += 1
        if(vez % 2 == 0){
            quadrado9.style.backgroundImage = 'url(X.png)'
            quadrado9.style.backgroundRepeat = 'no-repeat'
            q9 = 1
            }
        else{
            quadrado9.style.backgroundImage = 'url(O.png)'
            quadrado9.style.backgroundRepeat = 'no-repeat'
            q9 = 2
        }
        clicouq9 = true
        tentativa += 1
            if(q1 == 1 && q2 == 1 && q3 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            } 
            if(q4 == 1 && q5 == 1 && q6 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }
            if(q7 == 1 && q8 == 1 && q9 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }
            if(q1 == 1 && q5 == 1 && q9 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }
            if(q3 == 1 && q5 == 1 && q7 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }
            if(q1 == 1 && q4 == 1 && q7 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }
            if(q2 == 1 && q5 == 1 && q8 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }
            if(q3 == 1 && q6 == 1 && q9 == 1){
                vencedor.innerHTML = `Vitória de ${p10.value}`
            }


            if(q1 == 2 && q2 == 2 && q3 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            } 
            if(q4 == 2 && q5 == 2 && q6 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
            if(q7 == 2 && q8 == 2 && q9 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
            if(q1 == 2 && q5 == 2 && q9 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
            if(q3 == 2 && q5 == 2 && q7 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
            if(q1 == 2 && q4 == 2 && q7 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
            if(q2 == 2 && q5 == 2 && q8 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
            if(q3 == 2 && q6 == 2 && q9 == 2){
                vencedor.innerHTML = `Vitória de ${p20.value}`
            }
    }
}