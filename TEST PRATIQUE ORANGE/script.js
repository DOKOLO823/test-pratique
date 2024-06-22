var liste=''
var tab=[
    
]
var div=document.getElementById('task-list')
function Ajout(){
    tab.push(document.getElementById('nom').value)
    tab.push(document.getElementById('description').value)
    tab.push(document.getElementById('date').value)
    tab.forEach(element => {
        liste+=element+'<br>'
    });
    div.innerHTML=liste
}
