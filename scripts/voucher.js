
let arr=JSON.parse(localStorage.getItem("user"))||[]
let wal=document.getElementById("wallet_balance")




fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
.then(function(res){
    return res.json()
}).then(function(res){
    let data=res[0].vouchers
    console.log(data)
    displayvoucher(data)
}).catch(function(err){
    console.log(err)
})
let container=document.getElementById("voucher_list")
function displayvoucher(data){
    data.forEach(function(el){
        
        let image=document.createElement("img")
        image.src=el.image
        let name=document.createElement("p")
        name.innerText=el.name;
        let price=document.createElement("p");
        price.innerText=el.price;
        let div=document.createElement("div")
        div.setAttribute("class","voucher")
    let btn=document.createElement("button");
    btn.setAttribute("class","buy_voucher")
    btn.innerText="Buy"
    btn.addEventListener("click",function(){
        addvoucher(el)
    })
    div.append(image,name,price,btn)
    container.append(div)

    })
}
let arr2=JSON.parse(localStorage.getItem("purchase"))||[]

function addvoucher(el){
    if(wal>el.price){
        alert("Hurray! purchase successful" )
        arr2.push(el)
        wal=wal-el.price
    }
    else{
        alert("Sorry! insufficient balance")
    }
    


    localStorage.setItem("purchase",JSON.stringify(arr2))
    
    console.log(arr2)

}
function append(arr1){
    arr.forEach(function(el){

        
        
        wal.innerText=el.wallet;

        
        

    })
}
append(arr)



