/**
 * Template for ui.router, used inside a config function for a module
 * WebStorm names: uiroute
 */

// Route configs
// -----------------------------------------------------

// ----- Abstract parent state -----
var abstract = {
	name: '$routeName$',
	url: '/$routePath$',
	abstract: true,
	templateUrl: '$routeName$.template.html'
};

// ----- Child states -----
var index = {
	name: '$routeName$.index',
	url: '/',
	templateUrl: '$routeName$.index.html',
	controller: 'HomeCtrl',
	controllerAs: 'vm'
};

// ----- Register states -----
$stateProvider
	.state(abstract)
	.state(index);