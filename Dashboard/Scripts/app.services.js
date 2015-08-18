
import home from 'Scripts/Components/home/homeSvc.js';
import WidgetViewRights from 'Scripts/Components/WidgetViewRights/WidgetViewRightsSvc.js';
import userInRoles from 'Scripts/Components/userInRoles/userInRolesSvc.js';
import widget1 from 'Scripts/Components/widget1/widget1Svc.js';
import widget2 from 'Scripts/Components/widget2/widget2Svc.js';
import widget3 from 'Scripts/Components/widget3/widget3Svc.js';
import root from 'Scripts/Layouts/root/rootSvc.js';

var moduleName='app.services';

angular.module(moduleName,[])
.factory('homeSvc', home)
.factory('WidgetViewRightsSvc', WidgetViewRights)
.factory('userInRolesSvc', userInRoles)
.factory('widget1Svc', widget1)
.factory('widget2Svc', widget2)
.factory('widget3Svc', widget3)
.factory('rootSvc', root);

export default moduleName;