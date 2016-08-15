var Acme = (function(acme){


acme.fireworksChoice = function (categories, types, products) {
    var fireworksList = []

     for(key in products) {
        if (products[key].type <= 2) {
        console.log(products[key].type)
        fireworksList.push(products[key].type)

            }
        }
    acme.addProducts(categories, types, fireworksList)
    }


acme.demolitionChoice = function (categories, types, products) {
    var demolitonList = []

         for(key in products) {
        if (products[key].type > 2) {
        console.log(products[key].type)
        fireworksList.push(products[key].type)

            }
        acme.addProducts(categories, types, demolitonList)
        }

    }




acme.addProducts = function(categories, types, selectedProducts) {

    var yourProducts = $("#yourProducts")
        yourProducts.html(" ")

        products.forEach( function (product) {
            yourProducts.append()

        })
}

    return acme

})(Acme || {})