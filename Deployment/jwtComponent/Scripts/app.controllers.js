
import home from 'Scripts/Components/home/homeCtrl.js';
import login from 'Scripts/Components/login/loginCtrl.js';
import signup from 'Scripts/Components/signup/signupCtrl.js';
import associate from 'Scripts/Components/associate/associateCtrl.js';
import jwtComWidget from 'Scripts/Components/jwtComWidget/jwtComWidgetCtrl.js';
import root from 'Scripts/Layouts/root/rootCtrl.js';
import comLayout from 'Scripts/Layouts/comLayout/comLayoutCtrl.js';

var moduleName='app.controllers';

angular.module(moduleName,[])
.controller('homeCtrl', home)
.controller('loginCtrl', login)
.controller('signupCtrl', signup)
.controller('associateCtrl', associate)
.controller('jwtComWidgetCtrl', jwtComWidget)
.controller('rootCtrl', root)
.controller('comLayoutCtrl', comLayout);

export default moduleName;