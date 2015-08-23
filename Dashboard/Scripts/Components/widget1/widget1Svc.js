import BaseSvc from 'Scripts/Base/BaseSvc.js';

class widget1Svc extends BaseSvc
{
	constructor(http, ngAuthSettings, q){
		super(http);
		this.http= http;
		this.apiServiceBaseUri=ngAuthSettings.apiServiceBaseUri;
		this.q=q;
		//console.log(this.apiServiceBaseUri);
	}
	getData(paramObj){
	    overlay(1);
	   var  defer=this.q.defer();
	   setTimeout(function() {defer.resolve(this.getRes());overlay(0);}.bind(this), 1000);
	   return defer.promise;
	}
	getRes(){
	    return 	[
		    {title:'Belgium', colorCode:'red', chart:'Absolute', period:'May/May', from:'JAN-2014', to:'MAR-2014',volume:'SU',
		    sparkList:[
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13'},
    		    {min:'-3%', max:'10%', data:'9,4,-3,7,8,10,12,8,9,4,14,12,13', options:{type:'line'}},
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
	static widget1Factory(http, ngAuthSettings, q)	{
		return new widget1Svc(http, ngAuthSettings, q);
	}
}
widget1Svc.widget1Factory.$inject=['$http', 'ngAuthSettings', '$q'];
export default widget1Svc.widget1Factory;