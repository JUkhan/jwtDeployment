
export default function config(stateprovider, routeProvider){
	routeProvider.otherwise('login');

	stateprovider.state('root',{abstract:true,url:'/root',templateUrl:'template/root__LAYOUT__',controller:'rootCtrl as vm'});
	stateprovider.state('root.performance',{abstract:true,url:'/performance',templateUrl:'template/performance__LAYOUT__',controller:'performanceCtrl as vm'});

	stateprovider.state('root.home',{url:'/home',templateUrl:'template/home',controller:'homeCtrl as vm'});
	stateprovider.state('login',{url:'/login',templateUrl:'template/login',controller:'loginCtrl as vm'});
	stateprovider.state('signup',{url:'/signup',templateUrl:'template/signup',controller:'signupCtrl as vm'});
	stateprovider.state('associate',{url:'/associate',templateUrl:'template/associate',controller:'associateCtrl as vm'});
	stateprovider.state('root.WidgetViewNav',{url:'/WidgetViewNav',templateUrl:'template/WidgetViewRights',controller:'WidgetViewRightsCtrl as vm'});
	stateprovider.state('root.userInRoles',{url:'/userInRoles',templateUrl:'template/userInRoles',controller:'userInRolesCtrl as vm'});
	stateprovider.state('root.performance.nav1',{url:'/nav1',templateUrl:'template/widget1',controller:'widget1Ctrl as vm'});
	stateprovider.state('root.performance.nav2',{url:'/nav2',templateUrl:'template/widget2',controller:'widget2Ctrl as vm'});
	stateprovider.state('root.performance.nav3',{url:'/nav3',templateUrl:'template/widget3',controller:'widget3Ctrl as vm'});
}
config.$inject=['$stateProvider', '$urlRouterProvider'];
