var Acme = (function(acme){


acme.fireworksChoice = function (categories, types, products) {
    var fireworksList = []

  products.forEach( function (product) {
      if (product.type <= 2){
         fireworksList.push(product)
      }
    })

    }
    acme.addProducts(categories, types, fireworksList)
    }


acme.demolitionChoice = function (categories, types, products) {
    var demolitonList = []
          products.forEach( function (product) {
      if (product.type > 2){
         demolitionList.push(product)
      }
    })
            }
        acme.addProducts(categories, types, demolitonList)
        }

    }




acme.addProducts = function(categories, types, selectedProducts) {

    var yourProducts = $("#yourProducts")
        yourProducts.html(" ")

        products.forEach( function (product) {
            yourProducts.append( `<div class="col-md-3 col-md-offset-1" <h1> ${product.name} </h1> <p>${product.description}</p></div>`)
        })
}

    return acme

})(Acme || {})