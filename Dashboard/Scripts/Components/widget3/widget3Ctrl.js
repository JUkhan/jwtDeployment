import BaseCtrl from 'Scripts/Base/BaseCtrl.js';
import JwtGrid from 'Scripts/Modules/jwtComponents/JwtGrid.js';

class widget3Ctrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.svc = svc;
		this.title='widget3';
		scope.$parent.vm.NAV_NAME='nav3';
		 var opt={
      	       loadingText:'loading...',filter:true,limit:20, 
      	      columns:[{field:'name', onClick:row=>{alert(row.name)}}, {field:'age', sort:true}, {field:'price'},
      	      {field:'selling', spark:true, options:{type:'line'}}
      	      ]
  	    }; 
  	    
  	 
      this.grid=React.render(React.createElement(JwtGrid, {options: opt}), document.getElementById('grid'));
      this.loadGridData(125);
	}
	loadGridData(countryId){
	    
	    var data_config={
  	     limit:countryId,
  	     columns:[{field:'age', type:'int', min:20, max:35},{field:'name', type:'human'},
  	     {field:'price', type:'double', min:50000, max:500000},{field:'selling', type:'int', array:true, limit:15, min:1, max:15} ]  
  	   };
  	   
  	  this.svc.getDummyData(data_config).then(res=>{
  	       this.grid.setData(angular.fromJson(res.data));
  	   });
  	  
  	   
	}
}
widget3Ctrl.$inject=['$scope', 'widget3Svc'];
export default widget3Ctrl;