



let arr=JSON.parse(localStorage.getItem("user"))||[]

function wallet(n,e,a,am){

    this.name=n;
    this.email=e;
    this.address=a;
    this.wallet=am;

}


function submitfn(e){
    event.preventDefault()
    let name=document.getElementById("name").value
    
    let email=document.getElementById("email").value
    let address=document.getElementById("address").value
    let amount=document.getElementById("amount").value

    let p=new wallet(name,email,address,amount)
    arr.push(p)
    localStorage.setItem("user",JSON.stringify(arr))
    console.log(arr)
    
    window.location.reload()
    
}