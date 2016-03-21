var beers = [];

$('.post-beer').on('click', function (e) {
  e.preventDefault();

  var name = $('#beer-name').val();

  var category = $('#beer-category').val();

  var rate = $('#rate').val();

  addBeer(name, category, rate);
  updateBeers();
});

var addBeer = function (name, category,rate) {
console.log("addBeer");
  var beer = {
    name: name,
    category: category,
    rate: rate
  };

// var beers = new Object;
//   beers.name = name; 
//   beers.category = category;
beers.push(beer);
};
 var updateBeers = function () {
 $('.beers').find('p').remove();
 for (var i = 0; i < beers.length; i++) {
   
$('.beers').append('<p>' + beers[i].name + ' ' + beers[i].category + ' ' + beers[i].rate + '</p>');

    }
};


