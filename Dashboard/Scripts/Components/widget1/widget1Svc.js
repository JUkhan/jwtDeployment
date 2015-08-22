import BaseSvc from 'Scripts/Base/BaseSvc.js';

class widget1Svc extends BaseSvc
{
	constructor(http, ngAuthSettings){
		super(http);
		this.http= http;
		this.apiServiceBaseUri=ngAuthSettings.apiServiceBaseUri;
		//console.log(this.apiServiceBaseUri);
	}
	static widget1Factory(http, ngAuthSettings)	{
		return new widget1Svc(http, ngAuthSettings);
	}
}
widget1Svc.widget1Factory.$inject=['$http', 'ngAuthSettings'];
export default widget1Svc.widget1Factory;