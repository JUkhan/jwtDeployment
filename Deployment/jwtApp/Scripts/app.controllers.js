
import home from 'Scripts/Components/home/homeCtrl.js';
import login from 'Scripts/Components/login/loginCtrl.js';
import signup from 'Scripts/Components/signup/signupCtrl.js';
import associate from 'Scripts/Components/associate/associateCtrl.js';
import widget007 from 'Scripts/Components/widget007/widget007Ctrl.js';
import root from 'Scripts/Layouts/root/rootCtrl.js';
import sublayout from 'Scripts/Layouts/sublayout/sublayoutCtrl.js';

var moduleName='app.controllers';

angular.module(moduleName,[])
.controller('homeCtrl', home)
.controller('loginCtrl', login)
.controller('signupCtrl', signup)
.controller('associateCtrl', associate)
.controller('widget007Ctrl', widget007)
.controller('rootCtrl', root)
.controller('sublayoutCtrl', sublayout);

export default moduleName;