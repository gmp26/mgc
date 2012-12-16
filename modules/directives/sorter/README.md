# scope directive

This directive allows the creation of passive scopes without the need for a controller declaration.
The aim is to replace 

		<div ng-controller="SomeController">
			directives that communicate using parent scope
		</div>

and:

		angular.module['SomeController', function() {
		}];

with either:

		<scope shared="true">
			directives that share their scope with their parent
		</scope>
		
or:

		<scope shared="false">
			directives that use their own child scope, but read/write to the parent scope.
		</scope>
