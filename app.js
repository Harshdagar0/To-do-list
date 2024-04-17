const listitem = document.getElementById("list");
const inputbox= document.getElementById("input_box");
const btnn= document.getElementById("btn");

 
btnn.addEventListener("click",()=>{
    if (inputbox.value=="") {
            alert("first you need to add task");
            
        } else{
              let li=document.createElement("li");
              li.classList.add("un");
              li.innerHTML = inputbox.value;
             listitem.append(li); 
            let span= document.createElement("span");
            span.innerHTML="\u00d7";
            span.classList.add("span");
            span.addEventListener("click",()=>{
              li.remove();              
             })
             li.addEventListener("click",()=>{
              li.classList.toggle("checked");
            });
            li.appendChild(span);
            listitem.appendChild(li);

            inputbox.value="";
          }
        });