/**
 * Angular Controller with a named function using controllerAs syntax
 * WebStorm names: ngcontroller, ngctrl
 * Recommended naming conventions:
 * moduleName = lowercase,
 * ControllerName = PascalCase
 */


/**
 * $name$ Controller
 */
angular
	.module('$moduleName$')
	.controller('$name$Ctrl', $name$Ctrl);

/* @ngInject */
function $name$Ctrl (  ) {
	// "Controller as" the ViewModel
	var vm = this;

	// Public ViewModel
	// --------------------------------------------------
	vm.data = [];

	// Run
	// --------------------------------------------------
	activate();

	// Private functions
	// --------------------------------------------------
	function activate () {

	}
}

