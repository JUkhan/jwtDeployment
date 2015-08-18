import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class widget1Ctrl extends BaseCtrl
{
	constructor(scope, svc, location){
		super(scope);
		this.svc = svc;
		this.title='widget1';
		this.location=location;
		this.initFilter();
	    
		scope.$parent.vm.NAV_NAME='nav1';
	}
	filterValueChanged(obj){
	    console.log(obj);
	}
}
widget1Ctrl.$inject=['$scope', 'widget1Svc', '$location'];
export default widget1Ctrl;