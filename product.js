
// import products from "./products.json" with {type: "json"};
const add=document.getElementsByClassName('add');
const remove=document.getElementsByClassName('remove');
var cart = []

cart= getCookies("productId")

function mergeArray(arr){
    arr.sort();
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] != arr[i+1]){
            newArr=[...newArr, arr[i]]
        }
    }
    cart=newArr
}
var products;
const fetchData=()=>{
     fetch("http://localhost:5000/product")
    .then(res=>res.text())
    .then(data=>{
        //Display Table
        JSON.parse(data)?.map((item)=>{
                createRow(item)
            })
            Array.from(add).forEach(button =>{
                button.addEventListener('click', (e)=>{
                    JSON.parse(data).map(item=>{
                  if(item?.id == e.target.value){
                    cart=[...cart,item?.id]
                    }  
                    mergeArray(cart)
                })
                // productId=[...productId, cart]
                setCookies("productId", cart, 100)
            })
            })
    })
    .catch(err=>{
        console.log("err",err)
    })
}


fetchData()
   

//Display Table
// products?.map((item)=>{
//     console.log(item)
//     createRow(item)
// })


// Add Event


// Delete Event
Array.from(remove).forEach(button =>{
    button.addEventListener('click', (e)=>{
        deleteCookie(e.target.value)
})
})
