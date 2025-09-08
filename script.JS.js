let input=document.querySelector("input")
let add_btn=document.querySelector("#btn")
let text=document.querySelector(".text")

add_btn.addEventListener("click",()=>{
    if(input.value===""){
        alert("please enter task first")
    }else{
        addTask(input.value)
        saveTask(input.value)
        input.value="";
    }
})

window.addEventListener('DOMContentLoaded',Loadtask)

function addTask(task){
    let newEle=document.createElement("ul")
    newEle.innerHTML=`<span>${task}</span> <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>`
    text.appendChild(newEle)

   
    newEle.querySelector("i").addEventListener("click",()=>{
        newEle.remove()
        deleteTask(task)
    })

}

function saveTask(task){
    let tasks=JSON.parse(localStorage.getItem("tasks"))|| [] ;
    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function Loadtask(task){
    let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(el => {
        addTask(el)
    });
    
}
 
function deleteTask(task){
    let tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    tasks=tasks.filter(function(t){
        return t!==task;
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
