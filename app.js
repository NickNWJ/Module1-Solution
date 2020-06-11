// ( function(){
//   'use strict';
//
//   angular.module('LunchCheck',[])
//   .controller("LunchCheckController", LunchCheckController);
//
//   LunchCheckController.$inject = ['$scope','$injector'];
//   function LunchCheckController ($scope,
//                                   $injector) {
//     $scope.name = "test1";
//     $scope.totalValue = 0;
//
//     $scope.displayMessage = function () {
//        var totalItem = calculateStringItem($scope.name);
//        $scope.totalValue = totalItem;
//        $scope.message = "";
//
//        //check if empty
//        if($scope.totalValue === 0)
//        {
//          $scope.message = "Please enter data first";
//        }
//        //check if it is within the range of 1-4
//        else if($scope.totalValue >= 1 && $scope.totalValue < 4)
//        {
//          $scope.message = "Enjoy!";
//        }
//        //check if it is more than 3
//        else
//        {
//          $scope.message = "Too much!";
//        }
//     };
//
//   //Function to split string between comma using split() function
//   //Note: Item1,,Item2 is consider as 3 items
//   function calculateStringItem(string) {
//       if(string != "")
//       {
//         var array = string.split(',');
//         var NumberofItem = 0;
//           for(var i = 0; i < array.length; i++)
//           {
//             NumberofItem += 1;
//           }
//       }
//       else
//       {
//           NumberofItem = 0;
//       }
//       return NumberofItem;
//   }
//
//   };
//
// })();

//Minified JS
!function(){"use strict";function e(e,t){e.name="",e.totalValue=0,e.displayMessage=function(){var t=function(e){if(""!=e)for(var t=e.split(","),a=0,l=0;l<t.length;l++)a+=1;else a=0;return a}(e.name);e.totalValue=t,e.message="",0===e.totalValue?e.message="Please enter data first":e.totalValue>=1&&e.totalValue<4?e.message="Enjoy!":e.message="Too much!"}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope","$injector"]}();
