import jwtFilter from 'Scripts/Directives/jwtFilter/jwtFilter.js';
import spark from 'Scripts/Directives/spark/spark.js';


var moduleName='app.Directives';

angular.module(moduleName, [])
.directive('jwtFilter', jwtFilter.builder)
.directive('spark', spark.builder)
;

export default moduleName;