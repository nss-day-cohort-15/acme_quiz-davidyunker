

var Acme = (function(acme) {



    var categories
    var types
    var products

  acme.getSelection = function (categories, types, products) {

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

        categories = data[0].categories
        types = data[1].types
        products = data[2].products



        Acme.getSelection(categories, types, products)
      })
    }

    return acme

  // })


})(Acme || {})

Acme.getData();



