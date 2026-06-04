const btn =document.getElementById("btn");
const input =document.getElementById("input");
const ul=document.getElementById("list");

btn.addEventListener("click",()=>{
    const text=input.value.trim();
    if(text==="")return;
    const li=document.createElement("li");
    li.textContent=text;
    const btnsupp=document.createElement("button");
    btnsupp.textContent="Enlevez";
    btnsupp.classList.add("supp");
    li.appendChild(btnsupp);
    ul.appendChild(li);
    btnsupp.addEventListener("click",()=>{
        li.remove();
    });

    input.value="";
});