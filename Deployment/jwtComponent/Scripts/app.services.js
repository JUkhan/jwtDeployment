
import home from 'Scripts/Components/home/homeSvc.js';
import jwtComWidget from 'Scripts/Components/jwtComWidget/jwtComWidgetSvc.js';

var moduleName='app.services';

angular.module(moduleName,[])
.factory('homeSvc', home)
.factory('jwtComWidgetSvc', jwtComWidget);

export default moduleName;