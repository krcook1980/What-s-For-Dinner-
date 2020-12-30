var dinnerArray = ["Spaghetti", "Chicken Enchiladas", "Fajitas", "Shepard's Pie", "Raspberry Chicken", "TaterTot Casserole", "Chicken Alfredo", "Chicken Noodle Casserole", "Texas Dinner", "Red Beans and Rice", "Meatloaf", "Tacos", "Fried Chicken", "Lasagna", "Pizza", "French Dip", ""  ];

function dinner () {
  var food = dinnerArray[Math.floor(Math.random()*dinnerArray.length)];
    document.querySelector("#display").textContent = food;
}

document.querySelector("#btn").addEventListener("click", dinner);