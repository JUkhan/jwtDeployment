import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class widget2Ctrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.svc = svc;
		this.title='widget2';
		scope.$parent.vm.NAV_NAME='nav2';
	}
}
widget2Ctrl.$inject=['$scope', 'widget2Svc'];
export default widget2Ctrl;