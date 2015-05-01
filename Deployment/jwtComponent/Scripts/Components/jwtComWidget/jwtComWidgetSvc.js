import BaseSvc from 'Scripts/Base/BaseSvc.js';
const HTTP=new WeakMap();
class jwtComWidgetSvc extends BaseSvc
{
	constructor(http){
		super(http);
		HTTP.set(this, http);
	}
	getData(){
	    var config={
	        limit:50,
	        columns:[
	            {name:'Name', type:'human'},
	            {name:'Country', type:'country'},
	            {name:'Age', type:'int', min:20, max:60},
	            {name:'spark', type:'int', array:true, limit:12, min:1, max:15}
	            ]
	    };
	    return HTTP.get(this).post('jwt/getDummyData',config);
	}
	static jwtComWidgetFactory(http)	{
		return new jwtComWidgetSvc(http);
	}
}
jwtComWidgetSvc.jwtComWidgetFactory.$inject=['$http'];
export default jwtComWidgetSvc.jwtComWidgetFactory;