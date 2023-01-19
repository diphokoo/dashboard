"use strict";

var dashboardApp = angular.module('dashboardApp', []);
dashboardApp.controller('homeController', function ($scope) {
  $scope.main = "Main pages";
  $scope.dashboard = "Dashboard";
  $scope.balances = "Balances";
  $scope.transactions = "Transactions";
  $scope.analystics = "Analystics";
  $scope.marketing = "Marketing";
  $scope.exchange = "Exchange rates";
  $scope.accept = "Accept payments";
  $scope.checkout = "Checkout";
  $scope.payment = "Payment Links";
  $scope.send = "Send payments";
  $scope.wire = "Wire";
  $scope.support = "Support";
  $scope.hide = "Hide Panel";
  $scope.profile = "Profile";
  $scope.settings = "Settings";
  $scope.logout = "Logout";
  $scope.english = "EN";
  $scope.afrikaans = "AFR";
  $scope.zulu = "ZUL";
});