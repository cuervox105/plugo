var app = angular.module("app", []);

app.controller("ServiceController", function($scope) {
  $scope.services=[
    {
      icon:"fa fa-4x fa-pencil-square-o wow bounceIn text-primary",
      title:"Inscríbete",
      description:"No esperes más, ¡hazlo ya!"
    },
    {
      icon:"fa fa-4x fa-search wow bounceIn text-primary",
      title:"Reserva",
      description:"Sómos totalmente flexibles... Por hora o día"
    },
    {
      icon:"fa fa-4x fa-credit-card wow bounceIn text-primary",
      title:"Abre",
      description:"Sólo coloca la tarjeta en el lector"
    },
    {
      icon:"fa fa-4x fa-car wow bounceIn text-primary",
      title:"¡Conduce!",
      description:"Nosotros pagamos la carga y el seguro"
    },
  ];
});
