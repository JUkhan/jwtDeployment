import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class widget1Ctrl extends BaseCtrl
{
	constructor(scope, svc, location){
		super(scope);
		this.svc = svc;
		this.location=location;
		
		this.initFilter();
		
		scope.$parent.vm.NAV_NAME='nav1';
		this.options={tplId:2, itemLimit:4, categoryList:['Share', 'Sales', 'Growth','Above/Below'],
		       onClick:item=>{this.location.path('/root/performance/nav2/'+item.title);}
		};
		this.list=[];
	    this.loadData();
	}
	loadData(){
	    var paramObj={period:this.period, comparison:this.comparison, chart:this.chart, 
	    measure:this.measure, marketCoverage:this.marketCoverage, mVolume:this.mVolume};
	    
	    this.svc.getData(paramObj).then(res=>{this.list=res;});
	}
	filterValueChanged(obj){
	   switch (obj.name) {
	       case 'period':
	           this.period=obj.newValue;
	           break;
	      
	   }
	   
	   if(this.initDone) this.loadData();
	  
	}
}
widget1Ctrl.$inject=['$scope', 'widget1Svc', '$location'];
export default widget1Ctrl;