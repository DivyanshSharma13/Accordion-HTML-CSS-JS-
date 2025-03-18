let btn = document.querySelectorAll(".button");
let para = document.querySelectorAll(".para")

btn.forEach((btn,index) =>{
    let flag =0;
    btn.addEventListener("click", () => {
    para[index].classList.toggle("hide");
    if(flag === 0){
        btn.innerHTML = "&minus;"
        flag = 1;
    }
    else{
        btn.innerHTML = "&plus;"
        flag=0;
    }
    });
})