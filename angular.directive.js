/**
 * Angular Directive with most properties
 * WebStorm names: ngdirective, ngcomponent
 */

/**
 * $name$ Directive / Component
 */
angular
	.module('$moduleName$')
	.directive('$name$', $name$Component);

/* @ngInject */
function $name$Component () {
	return {
		restrict: 'E', // Restrict to (E = element, A = Attribute, C = CssClass)
		templateUrl: '', // Path to the html template
		scope: { // Isolated scope
			color: '@', // One way binding property,
			data: '=', // Two way data-binding property
			scopeFunction: '&amp;' // Execute Function in the Parent Scope
		},
		//require: '^outerDirectiveName', // If this directive requires another directive
		//controller: 'ControllerName', // Controller used for this directive
		//controllerAs: 'vm', // ViewModel for controller
		// bindToController: true // When set to true in a directive with isolated scope that uses controllerAs, the component’s properties are bound to the controller rather than to the scope.
		//replace: true, // Replace the HTML element on which the directive is attached
		//transclude: false, // Lets us wrap a directive around arbitrary content
		link: link, // Link function
		compile: compile // Compile function
	};

	// Mainly used for attaching event listeners to DOM elements,
	// watching model properties for changes, and updating the DOM
	function link (scope, elem, attrs) {

	}

	// Used to perform any DOM transformation before the link function runs
	function compile (tElem, attrs) {
		/* Just  note that the compile function does not have access to the scope,
		 and must return a link function.
		 But, if there is no compile function you can configure the link function as usual. */

		// Return a linking function
		return link;
	}
}