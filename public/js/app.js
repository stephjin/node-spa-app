angular.module('routerApp', ['routerRoutes', 'ngAnimate'])

.controller('mainController', function(){
  var vm = this;
  vm.bigMessage = 'This is some big header text';
})

.controller('homeController', function(){
  var vm = this;
  vm.message = 'This is the home page';
})

.controller('aboutController', function(){
  var vm = this;
  vm.message = 'This is the about page';
})

.controller('contactController', function(){
  var vm = this;
  vm.message = 'This is the contact page';
});