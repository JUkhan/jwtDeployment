import BaseSvc from 'Scripts/Base/BaseSvc.js';

class widget3Svc extends BaseSvc
{
	constructor(http, ngAuthSettings, CacheFactory, q){
		super(http,CacheFactory, q);
      	this.baseUrl=ngAuthSettings.apiServiceBaseUri;
	}
	static widget3Factory(http, ngAuthSettings, CacheFactory, q)	{
		return new widget3Svc(http, ngAuthSettings, CacheFactory, q);
	}
}
widget3Svc.widget3Factory.$inject=['$http', 'ngAuthSettings',  'CacheFactory', '$q'];
export default widget3Svc.widget3Factory;