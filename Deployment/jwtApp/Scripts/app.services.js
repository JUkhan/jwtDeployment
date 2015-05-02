
import home from 'Scripts/Components/home/homeSvc.js';
import widget007 from 'Scripts/Components/widget007/widget007Svc.js';

var moduleName='app.services';

angular.module(moduleName,[])
.factory('homeSvc', home)
.factory('widget007Svc', widget007);

export default moduleName;