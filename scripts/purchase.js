
let arr2=JSON.parse(localStorage.getItem("purchase"))||[]
let container=document.getElementById("purchased_voucher")
function append(arr2){
    arr2.forEach(function(el){
        let image=document.createElement("img")
        image.src=el.image
        let name=document.createElement("p")
        name.innerText=el.name;
        let price=document.createElement("p");
        price.innerText=el.price;
        let div=document.createElement("div")
        div.setAttribute("class","voucher")
        div.append(image,name,price);
        container.append(div)

    })
}
append(arr2)