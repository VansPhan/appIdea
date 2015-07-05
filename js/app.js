(function() {
  var app = angular.module('waterCooler', []);

  app.controller('IdeaController', function(){
  	this.idea = {};
    this.addIdea = function(product){
    	console.log(product);
      product.push(this.idea);
      this.idea = {};
    };
  });

})();
