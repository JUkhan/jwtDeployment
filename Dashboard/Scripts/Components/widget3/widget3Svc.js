import BaseSvc from 'Scripts/Base/BaseSvc.js';

class widget3Svc extends BaseSvc
{
	constructor(http, ngAuthSettings){
		super(http);
		this.http= http;
		this.apiServiceBaseUri=ngAuthSettings.apiServiceBaseUri;
	}
	static widget3Factory(http, ngAuthSettings)	{
		return new widget3Svc(http, ngAuthSettings);
	}
}
widget3Svc.widget3Factory.$inject=['$http', 'ngAuthSettings'];
export default widget3Svc.widget3Factory;