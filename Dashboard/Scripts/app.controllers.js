
import home from 'Scripts/Components/home/homeCtrl.js';
import login from 'Scripts/Components/login/loginCtrl.js';
import signup from 'Scripts/Components/signup/signupCtrl.js';
import associate from 'Scripts/Components/associate/associateCtrl.js';
import WidgetViewRights from 'Scripts/Components/WidgetViewRights/WidgetViewRightsCtrl.js';
import userInRoles from 'Scripts/Components/userInRoles/userInRolesCtrl.js';
import widget1 from 'Scripts/Components/widget1/widget1Ctrl.js';
import widget2 from 'Scripts/Components/widget2/widget2Ctrl.js';
import widget3 from 'Scripts/Components/widget3/widget3Ctrl.js';
import root from 'Scripts/Layouts/root/rootCtrl.js';
import performance from 'Scripts/Layouts/performance/performanceCtrl.js';

var moduleName='app.controllers';

angular.module(moduleName,[])
.controller('homeCtrl', home)
.controller('loginCtrl', login)
.controller('signupCtrl', signup)
.controller('associateCtrl', associate)
.controller('WidgetViewRightsCtrl', WidgetViewRights)
.controller('userInRolesCtrl', userInRoles)
.controller('widget1Ctrl', widget1)
.controller('widget2Ctrl', widget2)
.controller('widget3Ctrl', widget3)
.controller('rootCtrl', root)
.controller('performanceCtrl', performance);

export default moduleName;