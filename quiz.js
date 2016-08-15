

var Acme = (function(acme) {

// $(document).ready(function() {


    var categories
    var types
    var products

  acme.getSelection = function (categories, types, products) {

        // var yourChoice = $("#yourChoice").val()

        $( ".custom-select" ).change(function(yourChoice) {
        console.log(yourChoice.target.value)

        var yourChoice = yourChoice.target.value
        console.log(yourChoice)

        if (yourChoice === "fireworks") {
            Acme.fireworksChoice(categories, types, products)
        }
        if (yourChoice === "demolition") {
            Acme.demolitionChoice(categories, types, products)
        }
    })
  }



   acme.getData = function () {

    Promise.all([
      $.getJSON('categories.json'),
      $.getJSON('types.json'),
      $.getJSON('products.json')
    ])
      .then(function (data) {
        console.log(data[0])
        console.log(data[1])
        console.log(data[2])
        categories = data[0].categories
        types = data[1].types
        products = data[2].products
        console.log(categories)
        console.log(types)
        console.log(products)

        for (var key in categories)
        console.log(categories[key].name)

        for (var key in types)
        console.log(types[key].name)





        Acme.getSelection(categories, types, products)
      })
    }

    return acme

  // })


})(Acme || {})

Acme.getData();



