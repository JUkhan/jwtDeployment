import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class widget1Ctrl extends BaseCtrl
{
	constructor(scope, svc, location){
		super(scope);
		this.svc = svc;
		this.location=location;
		this.initFilter();
		scope.$parent.vm.NAV_NAME='nav1';
	
	
		this.options={tplId:2, itemLimit:4, categoryList:['Share', 'Sales', 'Growth','Above/Below'], onClick:item=>{this.location.path('/root/performance/nav2/'+item.title);}};
		this.list=[
		    {title:'Belgium', colorCode:'red', chart:'Absolute', period:'May/May', from:'JAN-2014', to:'MAR-2014',volume:'SU',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    },
		     {title:'Japan', colorCode:'red', chart:'Absolute', period:'May/May', from:'JAN-2014', to:'MAR-2014',volume:'SU',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    },
		    {title:'Belgium', colorCode:'green', chart:'Absolute', period:'May/May', from:'JAN-2014', to:'MAR-2014',volume:'SU',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    },
		     {title:'Japan', colorCode:'red', chart:'Absolute', period:'May/May', from:'JAN-2014', to:'MAR-2014',volume:'SU',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    },
		    {title:'Bangladesh', colorCode:'red', chart:'Absolute', period:'May/May', from:'JAN-2014', to:'MAR-2014',volume:'SU',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    }
		    ];
	}
	
	filterValueChanged(obj){
	   switch (obj.name) {
	       case 'period':
	           this.period=obj.newValue;
	           break;
	       
	       default:
	           // code
	   }
	}
}
widget1Ctrl.$inject=['$scope', 'widget1Svc', '$location'];
export default widget1Ctrl;