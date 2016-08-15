

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

        // for (var product in products) {
        //   console.log(product)
        //   for (var item in product) {
        //      console.log(item.object)
        //   }
        // }

        products.forEach (function (productObj) {
          for (var obj in productObj) {
            console.log(productObj[obj].type)
            console.log(productObj[obj])
          }

        })

        // products.forEach(function(product) {
        //   console.log(product[product].type)
        // });

        // for (key in products) {
        //   products[key].type
        //   console.log(products[key].type)
        // }
        Acme.getSelection(categories, types, products)
      })
    }

    return acme

  // })


})(Acme || {})

Acme.getData();




// works but not really


// $(document).ready(function() {



// $( ".custom-select" ).change(function(whichOne) {
//   console.log(whichOne.target.value)
//  })


// var _catList
// var _typeList
// $.getJSON('categories.json')
//   .then(function (catList) {
//     _catList = catList // cache the data
//     return $.getJSON('types.json')
//   })
//   .then(function (typeList) {
//     _typeList = typeList
//     return $.getJSON('products.json')
//   })
//   .then(function (productsList){
//     console.log(productsList)
//     console.log(_typeList)
//     console.log(_catList)
//     console.log(productsList)

//   })

// })
