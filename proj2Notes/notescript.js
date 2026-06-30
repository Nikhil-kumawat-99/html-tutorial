let products = JSON.parse(localStorage.getItem("products")) || [];

const productsDiv = document.getElementById("products");

function saveProducts(){
    localStorage.setItem("products", JSON.stringify(products));
}

function renderProducts(){

    const search =
    document.getElementById("search").value.toLowerCase();

    productsDiv.innerHTML="";

    products
    .filter(product =>
        product.name.toLowerCase().includes(search)
    )
    .forEach((product,index)=>{

        productsDiv.innerHTML += `
        <div class="card">

            <img src="${product.image}">

            <div class="card-content">
                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button onclick="buyProduct('${product.name}')">
                    Buy Now
                </button>

                <button onclick="deleteProduct(${index})">
                    Delete
                </button>
            </div>

        </div>
        `;
    });
}

function addProduct(){

    const name =
    document.getElementById("name").value;

    const price =
    document.getElementById("price").value;

    const imageFile =
    document.getElementById("image").files[0];

    if(!name || !price || !imageFile){
        alert("Fill all fields");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(){

        products.push({
            name:name,
            price:price,
            image:reader.result
        });

        saveProducts();
        renderProducts();
    };

    reader.readAsDataURL(imageFile);
}

function buyProduct(name){
    alert("Purchased: " + name);
}

function deleteProduct(index){

    products.splice(index,1);

    saveProducts();

    renderProducts();
}

document
.getElementById("search")
.addEventListener("input", renderProducts);

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
});

renderProducts();