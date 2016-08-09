$(document).ready(function() {

//first try
  // $.getJSON("categories.json")
  //   .then(function(categories) {
  //     $.getJSON("types.json")
  // })
  //   .then(function(types){
  //     $.getJSON("products.json")
  //   })
  //   .then(function(products) {
  //     console.log(categories)
  //     console.log(types)
  //     console.log(products)
  //   })


// if you need both sets of data you will need to cache the first dataset

var _catList // create a state variable to hold the data
var _typeList
$.getJSON('categories.json')
  .then(function (catList) {
    _catList = catList // cache the data
    return $.getJSON('types.json')
  })
  .then(function (typeList) {
    _typeList = typeList
    return $.getJSON('products.json')
  })
  .then(function (productsList){
    console.log(productsList)
    console.log(_typeList)
    console.log(_catList)

  })

})