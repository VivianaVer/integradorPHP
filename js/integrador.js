const valorTicket=200
const descEstudiante=80
const descTrainee=50
const descJunior=15

function calcTotal(){
    let cant=document.getElementById("cant").value
    let cat=document.getElementById("cat").value
    let total=0
    
    console.log(cant)
    console.log(cat)
    if (cat==1) {
        total = cant*valorTicket*(1-descEstudiante/100)
    } else { if (cat==2) {
        total = cant*valorTicket*(1-descTrainee/100)
    } else {
        total = cant*valorTicket*(1-descJunior/100)
    } 
    }
    let tot=Math.round(total)
    
    console.log(total)
    console.log(tot)
    document.getElementById("total").innerHTML=("Total a pagar: $" + tot)
}