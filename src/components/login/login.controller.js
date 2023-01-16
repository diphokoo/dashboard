var loginPage = angular.module('loginPage',[]);

loginPage.controller('loginPageController',function($scope){
    $scope.user={'username':'','password':''};
	
	//----- Users json
	var validUsers= [ 
        {'username':'admin@gmail.com','password':'admin@1Password'},
        {'username':'llew.adamson@tengen.co.za','password':'Password@01'},
        {'username':'diphokoo@outlook.com','password':'Password@01'}
	];
	
	$scope.showError = false; // set Error flag
	$scope.showSuccess = false; // set Success Flag

	//------- Authenticate function
	$scope.authenticate = function (){
		var flag= false;
		
		for(var i in validUsers){ // loop on users array
			if($scope.user.username == validUsers[i].username && $scope.user.password == validUsers[i].password){
				flag = true;
				break;
			}
			else{
				flag = false;
			}				
		}

		//-------- set error or success flags
		if(flag){
			$scope.showError = false;
			$scope.showSuccess = true;
		}
		else{
			$scope.showError = true;
			$scope.showSuccess = false;
		}


	}
});










