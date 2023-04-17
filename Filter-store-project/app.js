const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Casual",
    },
  ];

const products = document.querySelector('.products');
const input = document.querySelector('.searchInp');
const categories = document.querySelector('.cats');
const priceInp = document.querySelector('.rangePrice');
const rangeMoney = document.querySelector('.rangeMoney')

function dataProd(sortedList){
    products.innerHTML = sortedList.map((product) =>
    `
    <div class="prod">
        <img class='prodImg' src="${product.img}" alt="">
        <span class="prodName">${product.name}</span>
        <span class="prodPrice">$${product.price}</span>
    </div>
    `
    ).join(" ");
};

dataProd(data)

input.addEventListener('keyup', function(word){
    const inp = word.target.value.toLowerCase();
    if(inp){
        dataProd(data.filter((product) => product.name.toLowerCase().indexOf(inp) !== -1))
    }
    else{
        dataProd(data)
    }

})

function setCategories(){
    const cats = data.map((i) => i.cat)
    const filtercats = ["All",...cats.filter((product, i) => {
          return cats.indexOf(product) === i;
        }),
      ];
    categories.innerHTML = filtercats.map((i) => 
    `
    <span class="cat">${i}</span>
    `
    ).join(""); 
}

setCategories();
changePrice();

const filteredCat = document.querySelectorAll('.cat')

for(let i of filteredCat){
    i.addEventListener('click', function(){
    if(i.textContent == 'All') dataProd(data)
    else{
        dataProd(data.filter((product) => product.cat == i.textContent))
    }
    })
}

function changePrice(){
    let listPrice = data.map((i) => i.price);
    let maxPrice = Math.max(...listPrice);
    let minPrice = Math.min(...listPrice);

    priceInp.min = minPrice;
    priceInp.max = maxPrice;
    priceInp.value = maxPrice;
    rangeMoney.textContent = '$' + maxPrice

    priceInp.addEventListener('input', function(event){
        rangeMoney.textContent = '$' + event.target.value;
        dataProd(data.filter((i) => i.price <= event.target.value))
    })
}





