// async function getData() {
//     let response = await fetch("https://fakestoreapi.com/products")
//     let data = await response.json()
// }
// let products= getData()
// console.table(products)


let products =[];  // Declare a variable to store the data

// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => {
//         products = data;  
//         console.table(products);
//         displayUsers();  
//     })
//     .catch(error => console.error('Error:', error));


//     function displayUsers() {
//         let usersTableBody = document.getElementById("usersTableBody");
//         usersTableBody.innerHTML = "";
//         for (let i = 0; i < products.length; i++) {
//             // let user = users[i];
//             let row = document.createElement("tr");
//     // declare user and use it nasted of arr of users 
//             row.innerHTML = `

//                 <td>${products[i].title}</td>
//                 <td>${products[i].price}</td>
//                 <td>${products[i].decribtion}</td>
//                 <td>${products[i].category}</td>
//                 <td>${products[i].address}</td>
//                 <td>${products[i].city}</td>
//                 <td>${products[i].zip}</td>
//                 <td>${products[i].uniName}</td>
//                 <td>${products[i].uniYear}</td>
//             `;
    
//             usersTableBody.appendChild(row);
//             // mmkn te4el append child w w t7ot user table body fe ineer html fe line 38
//         }
//     }



// Function to fetch data and create cards
// async function fetchData() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         createCards(data);
//         console.table(data)
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Function to create and display cards
// function createCards(products) {
//     const cardContainer = document.getElementById('card-container');
//     cardContainer.innerHTML = ''; 

//     products.forEach(product => {
//         const card = document.createElement('div');
//         card.innerHTML = `
//             <div class="card ">
//             <div class="img ">
//                 <img src="${product.image}" class="card-img-top" alt="${product.title}">
//             </div>
//             <div class="card-body">
//                 <div class="categ d-flex align-items-center justify-content-between">
//                     <a href="#"><p class="card-text">${product.category}</p></a>
//                     <a href="#"><i class="fa-solid fa-heart" aria-hidden="true"></i></a>
//                 </div>
//                 <div class="title my-3">
//                     <a href="#">${product.title}</h4></a>
//                     <p>${product.description}</p>
//                 </div>
//                 <div class="rate d-flex align-items-center">
//                     <div class="icons">
//                         <i class="fa-solid fa-star active"  aria-hidden="true" style="color:#f89d13"></i>
//                         <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
//                         <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
//                         <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
//                         <i class="fa-solid fa-star" aria-hidden="true"></i>
//                     </div>
//                     <p>(3 Reviews)</p>
//                 </div>
//             </div>
//         </div>
//         `;

//         cardContainer.appendChild(card);
//     });
// }

// // Call fetchData to load and display the cards
// fetchData();
async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        createCards(data);
        console.table(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to create and display cards
function createCards(products) {
    const cardContainer = document.getElementById('product-container');
    cardContainer.innerHTML = ''; 

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6'; // Grid column classes for responsiveness

        card.innerHTML = `
            <div class="card" data-aos="fade-down" data-aos-delay="${product.id*100}">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <div class="categ d-flex align-items-center justify-content-between">
                        <a href="#"><p class="card-text">${product.category}</p></a>
                        <a href="#"><i class="fa-solid fa-heart" aria-hidden="true"></i></a>
                    </div>
                    <div class="title my-3">
                        <a href="#"><h5>${product.title}</h5></a>
                        <p>${product.description}</p>
                    </div>
                    <div class="rate d-flex align-items-center">
                        <div class="icons">
                            <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
                            <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
                            <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
                            <i class="fa-solid fa-star active" aria-hidden="true" style="color:#f89d13"></i>
                            <i class="fa-solid fa-star" aria-hidden="true"></i>
                        </div>
                        <p>(3 Reviews)</p>
                    </div>
                </div>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

// Call fetchData to load and display the cards
fetchData();













// function createCard(product) {
//     return `
//       <div class="col-md-4 mb-4">
//         <div class="card h-100">
//           <img src="${product.image}" class="card-img-top" alt="${product.title}">
//           <div class="card-body">
//             <h5 class="card-title">${product.title}</h5>
//             <p class="card-text">Category: ${product.category}</p>
//             <p class="card-text">${product.description}</p>
//             <p class="card-text"><strong>Price: ${product.price}</strong></p>
//           </div>
//         </div>
//       </div>
//     `;
//   }
