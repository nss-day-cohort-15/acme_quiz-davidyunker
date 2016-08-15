var Acme = (function(acme){

    // fireworks types 0 - 2
    // demolition types 3 - 5


acme.fireworksChoice = function (categories, types, products) {
    var fireworksList = []

        $('#yourProducts').html("")

   products.forEach (function (productObj) {
          for (var obj in productObj) {
            console.log(productObj[obj].type)
          }
        if (productObj[obj].type <= 2) {
            fireworksList.push(productObj[obj])

        }

        })


    Acme.addProducts(categories, types, fireworksList)
    }


acme.demolitionChoice = function (categories, types, products) {
    var demolitionList = []

     $('#yourProducts').html("")

       products.forEach (function (productObj) {
          for (var obj in productObj) {
            console.log(productObj[obj].type)
          }
        if (productObj[obj].type >= 3) {
            demolitionList.push(productObj[obj])
        }

        })


    Acme.addProducts(categories, types, demolitionList)
}




acme.addProducts = function(categories, types, selectedProducts) {

    var yourProducts = $("#yourProducts")
        yourProducts.html(" ")

        selectedProducts.forEach( function (product) {
            yourProducts.append( `<div class="col-md-3 col-md-offset-1" <h1> ${product.name} </h1> <p>${product.description}</p> <p>This is the ${types[product.type].name} type of the
                ${categories[types[product.type].category].name} category</p></div>`)
        })
}

    return acme

})(Acme || {})