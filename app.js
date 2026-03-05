async function signup(){

let username=document.getElementById("user").value
let password=document.getElementById("pass").value

await fetch("/signup",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({username,password})
})

alert("Signup success")

}

async function login(){

let username=document.getElementById("user").value
let password=document.getElementById("pass").value

let res=await fetch("/login",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({username,password})
})

let data=await res.text()

alert(data)

}

async function loadTasks(){

let res=await fetch("/tasks")

let tasks=await res.json()

let html=""

tasks.forEach(t=>{

html+=`<div>

<h3>${t.title}</h3>
<p>${t.description}</p>
<b>$${t.reward}</b>
</div>`

})

document.getElementById("tasks").innerHTML=html

}

if(document.getElementById("tasks")){

loadTasks()

}
