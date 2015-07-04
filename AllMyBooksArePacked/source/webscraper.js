function Webscraper(url){
  this.url = url;
}

Webscraper.prototype.scrapeAndCreateBook = function(warehouse){
  $.ajax({
      url: this.url,
      type: 'get',
      dataType: 'html'
    }).done(function(response){
      var price = $(response).find(".bb_price").text();
      var title = $(response).find("#btAsinTitle").text();
      var author = $(response).find(".byLinePipe").prev("a").text();
      var shippingWeight = $(response).find("li").filter(":contains(Shipping Weight)").text();
      var isbn10 = $(response).find("li").filter(":contains(ISBN-10)").text();
      warehouse.contents.push(new Book(price, title, author, shippingWeight, isbn10));
    })
}


// needs to scrape certain attributes
// controllers job to create the book objects with the information webscraper returns