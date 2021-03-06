
function authInterceptorService($q, $injector, $location, localStorageService) {

    var authInterceptorServiceFactory = {};

    var _request = function (config) {

        config.headers = config.headers || {};
       
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }
        overlay(1);
        return config;
    }

    var _responseError = function (rejection) {
        overlay(0);
        if (rejection.status === 401) {
            var authService = $injector.get('authService');
            var authData = localStorageService.get('authorizationData');

            if (authData) {
                if (authData.useRefreshTokens) {
                    $location.path('/refresh');
                    return $q.reject(rejection);
                }
            }
            authService.logOut();
            $location.path('/login');
        }
        return $q.reject(rejection);
    }
    
    var _response= function(response) {
        overlay(0);
        return response;
    }
    authInterceptorServiceFactory.response=_response;
    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;

    return authInterceptorServiceFactory;
}

authInterceptorService.$inject=['$q', '$injector','$location', 'localStorageService'];
export default authInterceptorService;