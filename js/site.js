/// <reference path="../typings/index.d.ts" />
var mod;
var MySite;
(function (MySite) {
    var Bootstrapper = (function () {
        function Bootstrapper() {
        }
        Bootstrapper.prototype.init = function () {
            var mod = angular.module("mysite", ['ui.router']);
            mod.controller("DashboardController", function () {
            });
            mod.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
                    $stateProvider
                        .state('dashboard', {
                        url: "/",
                        templateUrl: "/partials/home/index"
                    });
                    $urlRouterProvider.otherwise('/');
                    $locationProvider.html5Mode(true);
                }]);
            mod.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
                    $rootScope.$state = $state;
                    $rootScope.$on('$locationChangeStart', function (event, toUrl, fromUrl) {
                        console.log(toUrl);
                    });
                }]);
            angular.bootstrap(document.getElementsByTagName("html")[0], ['mysite']);
        };
        return Bootstrapper;
    }());
    MySite.Bootstrapper = Bootstrapper;
})(MySite || (MySite = {}));
var bs = new MySite.Bootstrapper();
bs.init();
