// import products from "./products.json" with {type: "json"};
const buttons=document.getElementsByClassName('remove');
var cart = []

cart= getCookies("productId")

// products.map(item=>{
//     cart.map((id)=>{
//         if(item?.id == id){
//             createRow(item)
//         console.log(item)
//         }
//     })
// })
console.log(cart)
const fetchData=()=>{
    fetch("http://localhost:3000/product")
    .then(res=>res.text())
    .then(data=>{
        //Display Table
        JSON.parse(data)?.map((item)=>{
        createRow(item)
})
    })
    .catch(err=>{
        console.log("err",err)
    })
}
fetchData()



// Delete Event
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e)=>{
        deleteCookie(e.target.value)
})
})

