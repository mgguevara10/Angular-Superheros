var app = angular.module("mainApp", []); // must match ng-app name
app.factory("Heros",function(){    //factory--return variable and return objects
    return [{ name: "wolverine", howAwesome: "meh" }, { name: "NinjaTurtle", howAwesome: "uber" }]
});
app.controller("CreateController", function ($scope, Heros) {    // method not properties-- annonymous function--dependency injection also a form a loose cuppling
    $scope.heros = Heros;
    $scope.test = "testing 1, 2, 3";
    $scope.addSuperhero = function () {
        var name = $scope.superHero.name;
       alert(name);
        var howAwesome = $scope.superHero.howAwesome;
        $scope.heros.push({name: name, howAwesome: howAwesome});  //object literal notation
        };
});
app.controller("DisplayController", function ($scope, Heros) {  
    $scope.heros = Heros;
    $scope.editHero = function (hero) {
        var index = $scope.heros.indexOf(hero);
        $('#myModal').modal();
        $scope.modal = {};
        $scope.modal.name = hero.name;
        $scope.modal.howAwesome = hero.howAwesome;
        $scope.modal.index = index;
    }
    $scope.saveHero = function (hero) {
        $scope.heros[hero.index].name = hero.name; /////allows us to get to the index number of the saved object
        $scope.heros[hero.index].howAwesome = hero.howAwesome;
        ('#myModal').modal('hide');


    }
    $scope.deleteHero = function (hero) {
        var index = $scope.heros.indexOf(hero);
        $scope.heros.splice(index, 1)

    }
});

