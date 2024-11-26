const menuContent = document.createElement("div");
menuContent.setAttribute("class", "menu-section");


const appetizerSection = document.createElement("div");
const mainDishesSection = document.createElement("div");
const dessertSection = document.createElement("div");
const drinkSection = document.createElement("div");



const appetizers = [
    {
        "name": "Gado-Gado",
        "description": "Indonesian salad with fresh vegetables, boiled eggs, tofu, tempeh, and a rich peanut sauce.",
        "price": "$8.50"
    },
    {
        "name": "Pisang Goreng",
        "description": "Fried bananas coated in batter and deep-fried to crispy perfection.",
        "price": "$6.00"
    },
    {
        "name": "Sate Ayam",
        "description": "Skewered grilled chicken served with a savory peanut dipping sauce.",
        "price": "$9.00"
    },
    {
        "name": "Pempek",
        "description": "Traditional Palembang fish cake served with vinegar-based sweet and spicy sauce.",
        "price": "$7.50"
    }
]

const mainDishes = [
      {
        "name": "Nasi Goreng",
        "description": "Indonesian fried rice stir-fried with vegetables, eggs, and your choice of chicken or shrimp, topped with a fried egg.",
        "price": "$12.50",
        "addOns": [
          { "item": "Chicken", "price": "$2.00" },
          { "item": "Shrimp", "price": "$3.00" }
        ]
      },
      {
        "name": "Mie Goreng",
        "description": "Indonesian fried noodles stir-fried with vegetables, eggs, and your choice of chicken or shrimp.",
        "price": "$13.00",
        "addOns": [
          { "item": "Chicken", "price": "$2.00" },
          { "item": "Shrimp", "price": "$3.00" }
        ]
      },
      {
        "name": "Rendang",
        "description": "Slow-cooked beef in a rich and spicy coconut milk-based sauce, served with steamed rice.",
        "price": "$16.00"
      },
      {
        "name": "Ayam Penyet",
        "description": "Smashed fried chicken served with sambal, fried tofu, tempeh, and steamed rice.",
        "price": "$14.00"
      },
      {
        "name": "Nasi Uduk",
        "description": "Fragrant coconut rice served with fried chicken, sambal, fried tempeh, and peanuts.",
        "price": "$14.50"
      },
      {
        "name": "Tahu Tempe Penyet",
        "description": "Smashed fried tofu and tempeh served with sambal, vegetables, and steamed rice.",
        "price": "$12.00"
      },
      {
        "name": "Sayur Lodeh",
        "description": "A hearty vegetable soup made with tofu, tempeh, and mixed vegetables in a coconut milk broth.",
        "price": "$10.50"
      },
      {
        "name": "Nasi Goreng Vegetarian",
        "description": "Vegetable stir-fried rice with tofu, tempeh, and a fried egg on top.",
        "price": "$11.00"
      }
    ]

const desserts = [
        {
          "name": "Klepon",
          "description": "Sweet glutinous rice balls filled with palm sugar and rolled in grated coconut.",
          "price": "$5.00"
        },
        {
          "name": "Es Cendol",
          "description": "Traditional Indonesian dessert with green jelly noodles, coconut milk, palm sugar syrup, and shaved ice.",
          "price": "$6.50"
        },
        {
          "name": "Dadar Gulung",
          "description": "Green pancake rolled with sweet coconut and brown sugar filling.",
          "price": "$5.50"
        },
        {
          "name": "Lapis Legit",
          "description": "Layered spice cake made with butter, eggs, and a blend of Indonesian spices.",
          "price": "$6.00"
        },
        {
          "name": "Roti Bakar",
          "description": "Grilled bread with chocolate, cheese, and sweet condensed milk.",
          "price": "$4.50"
        }
      ]

const drinks = [
    {
      "name": "Teh Botol",
      "description": "Indonesian sweetened iced tea.",
      "price": "$3.50"
    },
    {
      "name": "Es Kelapa Muda",
      "description": "Fresh young coconut water served chilled.",
      "price": "$4.00"
    },
    {
      "name": "Kopi Bali",
      "description": "Traditional Indonesian coffee brewed to perfection.",
      "price": "$4.50"
    },
    {
      "name": "Bandrek",
      "description": "A warm, sweet, and spicy traditional Indonesian drink made with ginger, palm sugar, and spices.",
      "price": "$3.00"
    },
    {
      "name": "Jus Mangga",
      "description": "Fresh mango juice, served chilled.",
      "price": "$4.00"
    }
  ]

function addFood(array, name, container){

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = name;

    container.appendChild(sectionTitle);

    array.forEach(element => {
    
        const food = document.createElement("div");
        food.setAttribute("class", "dish-section");

    
        const foodName = document.createElement("p");
        const foodDescription = document.createElement("p");
        const foodPrice = document.createElement("p");
    
        foodName.textContent = element.name;
        foodDescription.textContent = element.description;
        foodPrice.textContent = element.price;
    
        food.appendChild(foodName);
        food.appendChild(foodDescription);
        food.appendChild(foodPrice);
    
        container.appendChild(food);
    
    })
}

addFood(appetizers, "APPETIZER", appetizerSection);
addFood(mainDishes, "MAIN DISHES", mainDishesSection);
addFood(desserts, "DESSERT", dessertSection);
addFood(drinks, "DRINKS", drinkSection);



menuContent.appendChild(appetizerSection)
menuContent.appendChild(mainDishesSection)
menuContent.appendChild(dessertSection)
menuContent.appendChild(drinkSection)



export {menuContent}