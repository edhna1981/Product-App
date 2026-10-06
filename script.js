let productId=document.getElementById("productId");
let username=document.getElementById("username");
let title=document.getElementById("title");
let price=document.getElementById("price");
let category=document.getElementById("category");
let rating=document.getElementById("rating");
let description=document.getElementById("description");
let image=document.getElementById("image");
let message=document.getElementById("message")



function searchProduct(){
    let id= productId.value;
    let url= "https://dummyjson.com/products/" + id;

    message.innerHTML=" ";

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Product not found");
            }
            return response.json();
        })
    
    .then(data=>{

        title.innerHTML=data.title
        price.innerHTML=data.price
        category.innerHTML=data.category
        rating.innerHTML=data.rating
        description.innerHTML=data.description
        image.src=data.thumbnail
        
    })

     .catch(error => {
        message.innerHTML = error.message
    })
    

}

