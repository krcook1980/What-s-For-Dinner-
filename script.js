var dinnerArray = ["Spaghetti", "Chicken Enchiladas", "Fajitas", "Shepard's Pie", "Raspberry Chicken", "TaterTot Casserole", "Chicken Alfredo", "Chicken Noodle Casserole", "Texas Dinner", "Red Beans and Rice", "Meatloaf", "Tacos", "Fried Chicken", "Lasagna", "Pizza", "French Dip", "Philly Cheese steak", "Pancakes", "Breakfast in a Pan", "Chicken Caesar", "Steak and Potatoes", "Fish and Veggies", "Mac & Cheese", "Biscuits and Gravy", "Roast and Veggies", "Hamburgers/Dogs", "Kebabs", "Kolaches", "Sloppy Joes", "Stir Fry", "Chicken Curry", "Fish-heads and Rice", "Stroganoff"];


function dinner () {
  var food = dinnerArray[Math.floor(Math.random()*dinnerArray.length-1)];
    document.querySelector("#display").textContent = food;
}

document.querySelector("#btn").addEventListener("click", dinner);