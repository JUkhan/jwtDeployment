
import BaseCtrl from 'Scripts/base/BaseCtrl.js';
class performanceCtrl extends BaseCtrl
{
	constructor(scope){
	    super(scope);
		this.title='performance';
		this.isHidden=true;
	}
    
}
performanceCtrl.$inject=['$scope'];
export default performanceCtrl;