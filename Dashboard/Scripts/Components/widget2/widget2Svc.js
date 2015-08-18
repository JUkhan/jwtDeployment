import BaseSvc from 'Scripts/Base/BaseSvc.js';

class widget2Svc extends BaseSvc
{
	constructor(http, ngAuthSettings){
		super(http);
		this.http= http;
		this.apiServiceBaseUri=ngAuthSettings.apiServiceBaseUri;
	}
	static widget2Factory(http, ngAuthSettings)	{
		return new widget2Svc(http, ngAuthSettings);
	}
}
widget2Svc.widget2Factory.$inject=['$http', 'ngAuthSettings'];
export default widget2Svc.widget2Factory;