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

// notes from last quiz

// `<div class="col-md-3 col-md-offset-1></div>`


// ${cars.color}

$( ".custom-select" ).change(function(whichOne) {
  console.log(whichOne.target.value)
  if (whichOne.target.value === 1) {
    // add fireworks content

  }

  else {
    // add demolition content
  }



  // 1 = fireworks
  // 2 = demolition
  // $(".whichOne").html(`<div class="col-md-3 col-md-offset-1>Here's my div</div>`)

  alert( "Handler for .change() called." );
});

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