/**
 * Angular Controller with a named function using controllerAs syntax
 * WebStorm names: ngcontroller, ngctrl
 */


/**
 * $name$Controller
 */
angular
	.module('app')
	.controller('$name$', $name$Ctrl);

/* @ngInject */
function $name$Ctrl ( $scope ) {
	// "Controller as" the ViewModel
	var vm = this;

	// Public ViewModel
	// --------------------------------------------------
	vm.data = [];

	// Private functions
	// --------------------------------------------------
	function activate () {

	}

	// Run
	// --------------------------------------------------
	activate();
}