const appritiation = document.getElementById("appritiation");
document.getElementById("myOrder").addEventListener("click", function() {
    let order = {
        breakfast: [],
        drinks: [],
        starters: [],
        mainDishes: [],
        desserts: []
    };

    document.querySelectorAll('input[name="breakfast[]"]:checked').forEach(function(checkbox) {
        order.breakfast.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="drink[]"]:checked').forEach(function(checkbox) {
        order.drinks.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="starter[]"]:checked').forEach(function(checkbox) {
        order.starters.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="main_dish[]"]:checked').forEach(function(checkbox) {
        order.mainDishes.push(checkbox.nextSibling.textContent.trim());
    });

    document.querySelectorAll('input[name="dessert[]"]:checked').forEach(function(checkbox) {
        order.desserts.push(checkbox.nextSibling.textContent.trim());
    });

    let msg = "You ordered: ";
    if (order.breakfast.length > 0) {
        msg += " " + order.breakfast ; 
    } else {
        msg += "";
    }

    if (order.drinks.length > 0) {
        msg += " ," + order.drinks ;
    } else {
        msg += "";
    }

    if (order.starters.length > 0) {
        msg += " ," + order.starters ;
    } else {
        msg += "";
    }

    if (order.mainDishes.length > 0) {
        msg += " ," + order.mainDishes ;
    } else {
        msg += "";
    }

    if (order.desserts.length > 0) {
        msg += " and " + order.desserts ;
    } else {
        msg += "";
    }

    document.getElementById("msg").textContent = msg;
    appritiation.textContent = "Thank You For Choosing Iviwe Restuarant, your order will be ready soon.";
});