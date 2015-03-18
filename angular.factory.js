/**
 * Angular Factory using Revealing Module Pattern
 * WebStorm name: ngfactory
 */

/**
 * $name$Factory
 */
angular
	.module('$moduleName$')
	.factory('$name$', $name$Factory);

/* @ngInject */
function $name$Factory () {
	var service = {
		getData: getData,
		save: save
	};

	return service;

	// Private functions
	// --------------------------------------------------
	function getData () {

	}

	function save () {

	}
}