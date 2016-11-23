/// <reference path="../typings/index.d.ts" />
var mod: ng.IModule;

namespace MySite {

    export class Bootstrapper {

        public init() {
            var mod = angular.module("mysite", ['ui.router']);

            mod.controller("DashboardController",
            () => {

            });

            mod.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", '$httpProvider', ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {
                $stateProvider
                    .state('dashboard',
                    {
                        url: "/",
                        templateUrl: "/partials/home/index"
                    })
                    ;

                $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode(true);
            }]);


            mod.run(['$rootScope', '$state', '$stateParams', ($rootScope, $state, $stateParams) => {
                (<any>$rootScope).$state = $state;
                $rootScope.$on('$locationChangeStart', (event, toUrl, fromUrl) => {
                    console.log(toUrl);
                });
            }]);



            angular.bootstrap(document.getElementsByTagName("html")[0], ['mysite']);

        }
    }
}

var bs = new MySite.Bootstrapper();
bs.init();