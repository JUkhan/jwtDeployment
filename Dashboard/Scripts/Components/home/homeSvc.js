import BaseSvc from 'Scripts/base/BaseSvc.js';

class homeSvc extends BaseSvc
{
	constructor(http, ngAuthSettings, CacheFactory, q){
		super(http, CacheFactory, q);
	    this.http=http;
      	this.baseUrl=ngAuthSettings.apiServiceBaseUri;
	}
  	getData(){
       
        return this.http.get(this.baseUrl+'api/orders', {cache:true});
  
    }
	static homeFactory(http, ngAuthSettings, CacheFactory, q)	{
		return new homeSvc(http, ngAuthSettings, CacheFactory, q);
	}
}
homeSvc.homeFactory.$inject=['$http','ngAuthSettings', 'CacheFactory', '$q'];
export default homeSvc.homeFactory;