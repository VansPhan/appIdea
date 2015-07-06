(function() {
  var app = angular.module('waterCooler', []);

  app.controller('IdeaController', function(){
  	this.blocks = ideas;
    this.addIdea = function() {
 		this.blocks.push({
 			email: $('.email').text(),
  			description: $('.description').text()
 		});
 		}

  });

  var ideas = [
  	{
  		email: "VanPhan514@gmail.com",
  		description: "This is my idea"
  	},
  	{
  		email: "Vertway@gmail.com",
  		description: "My brother's idea"
  	}
  ];

})();
