const tbody=document.getElementById('tbody')



// setting value to cookies
function setCookies(name, value, days){
    const d = new Date()
    d.setTime(d.getTime()+(days*24*60*60*1000))
    document.cookie=`${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

// Getting value from cookies
 function getCookies(name){
    let newCart
    const data = document.cookie.split(';')
    data.forEach(value=>{
        let v =value.split('=')
        let keyName=v[0]
        if(keyName.charAt(0)==' '){
            keyName=keyName.substring(1)
        }
        if(name == keyName){
            newCart = v[1].split(',')
        }
    })
    return  newCart
}

var cart = getCookies("productId")

//Create Table
function createRow(item){
    //<tr class="row">
    const tr=document.createElement('tr')
    tr.className="row"
    tbody.appendChild(tr)
    
    //<td>
    const td1=document.createElement('td')
    tr.appendChild(td1)
    
    //<td class="content">
    const td2=document.createElement('td')
    td2.className="content"
    tr.appendChild(td2)
    
    // <p id="name">
    const p=document.createElement('p')
    p.innerHTML=item?.title
    p.id="name"
    td2.appendChild(p)
    
    // <button>
    const button=document.createElement('button'); 
        button.value=item?.id;
        if(cart?.includes(item?.id)){
            button.innerHTML="Remove"
            button.className="remove"
        } else {
            button.innerHTML="Add"
            button.className="add"
        }
    
    td2.appendChild(button);
    
    //<img> 
    const img=document.createElement('img')
    img.id="image"
    img.src=item?.image
    td1.appendChild(img)  
}

// Delete items from cookie
function deleteCookie(id){
    let newCart=cart.filter(val=>{
        return val != id
    })
    setCookies("productId",newCart,100)
}