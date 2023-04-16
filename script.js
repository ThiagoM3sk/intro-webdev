function getValue(){
    let value = document.getElementById('name').value
    if(value == ""){
        alert('Nome inválido!')
        return
    }
    document.getElementById('result').innerHTML = `Bem vindo, ${value}`
}

function removeValue(){
    document.getElementById('name').value = ""
    document.getElementById('result').innerHTML = ""
}