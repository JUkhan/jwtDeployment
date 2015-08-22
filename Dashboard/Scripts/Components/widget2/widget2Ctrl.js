import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class widget2Ctrl extends BaseCtrl
{
	constructor(scope, svc, stateParams){
		super(scope);
		this.svc = svc;
		this.title='widget2';
		scope.$parent.vm.NAV_NAME='nav2';
		this.country=stateParams.country;
	
		this.initFilter();
	
		this.loadData();
		
	}
	setChart(val){
	    this.chart=val;
	}
	filterValueChanged(obj){
	    switch (obj.name) {
	        case 'measure':
	            this.measure=obj.newValue;
	            break;
	        case 'mVolume':
	            this.mVolume=obj.newValue;
	            break;
            case 'marketCoverage':
                this.marketCoverage=obj.newValue;
                break;
	        default:
	            // code
	    }
	}
	goWidget3(item){
	    alert(item.title);
	}
	
	loadData(){
	    this.category='Market Share';
	    this.options={tplId:2, itemLimit:4, selectableItem:'Market Share', 
	    categoryList:['Dynamics', 'Trend', 'Absolute'], onClick:item=>{ this.category=item.title; this.loadCategoryDetails();}};
		this.list=[
		    {title:'Market Share', chart:'Trend', from:'May 2014', to:'May 2015',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    },
		    {title:'Sales',chart:'Trend', from:'May 2014', to:'May 2015',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		   
    		    ]
		    },
		    {title:'Growth',chart:'Trend', from:'May 2014', to:'May 2015',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		   
    		    ]
		    },
		    
		    {title:'Above/Below Mkt',chart:'Trend', from:'May 2014', to:'May 2015',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		   
    		    ]
		    }
		    
		    ];
		    
		    this.loadCategoryDetails();
	}
	
	loadCategoryDetails(){
	        this.marketSummery={
	            title:'Full Market Summery', 
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    
	        };
	    	this.categoryDetails=[
		    {title:'Channels', 
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		    ]
		    },
		    {title:'Region',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		   
    		    ]
		    },
		    {title:'Rx/NonRx',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'}
    		   
    		    ]
		    }
		    
		    ];
	}
}
widget2Ctrl.$inject=['$scope', 'widget2Svc','$stateParams'];
export default widget2Ctrl;