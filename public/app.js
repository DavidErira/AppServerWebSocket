const socket = io() // este io() dever recibir el dominio

let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');


btn.addEventListener('click',function(){
    socket.emit('chat:message',{
        message: message.value,
        username: username.value
    })
    console.log(username.value,message.value);
})

output.innerHTML =`
    <p> La variable no ha sido actualizada </p>
    `


socket.on('chat:message', function(data){
    output.innerHTML =`<p>
    Variable en tiempo real actualizada por <strong> ${data.username} </strong> es: 
        </p>
        <h1>${data.message}</h1>`
})