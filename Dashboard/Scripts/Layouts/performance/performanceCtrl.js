
import BaseCtrl from 'Scripts/base/BaseCtrl.js';
class performanceCtrl extends BaseCtrl
{
	constructor(scope){
	    super(scope);
    	this.name='blue';
		this.isHidden=true;
		this.measure='Volume';
		this.chart='Dynamics';
		this.comparison='Year Ago';
		this.period='Month';
		this.mVolume='SU';
		this.marketCoverage='Indirect Only';
		this.initFilter();
		
	}
	filterValueChanged(obj){
	    switch (obj.name) {
	        case 'chart':
	            this.chart=obj.newValue;
	            break;
	       
	        default:
	            // code
	    }
	}
    setMesaure(val){
        this.measure=val;
    }
    setChart(val){
       this.chart=val; 
    }
    setComparison(val){
       this.comparison=val; 
    }
    setPeriod(val){
        this.period=val;
    }
}
performanceCtrl.$inject=['$scope'];
export default performanceCtrl;