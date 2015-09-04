
class BaseSvc
{
    constructor(http, cacheFactory, q){
        this.http=http;
      	this.q=q;
      	this.cacheFactory=cacheFactory;
        this.dataCache=null;
        if (cacheFactory && !cacheFactory.get('dataCache')) {
            this.dataCache = cacheFactory('dataCache');
        }else if(cacheFactory){
             this.dataCache = cacheFactory.get('dataCache');
        }
    }
    postRequest(url, data){
        return this.request({url:url, method:'POST', data:data});
    }
    getRequest(url){
         return this.request({url:url, method:'GET'});
    }
    request(config){
        var id=config.url+angular.toJson(config.data||{});
        if(this.dataCache && this.q){
            var  defer=this.q.defer();
            if(this.dataCache.get(id)){
                defer.resolve(this.dataCache.get(id));
            }else{
                this.http(config).success(res=>{
                    this.dataCache.put(id, res);
                    defer.resolve(res);
                });
            }
	        return defer.promise;
        }else{
            return this.http(config);
        }
    }
    getDummyData(obj){ 
      
           return this.postRequest('Jwt/GetDummyData',obj);  
           //return this.request({url:'Jwt/GetDummyData', method:'POST', data:obj}); 
    }
    get_1(spName, spParams){
        
        if(!angular.isArray(spParams)){
            spParams=this.getParams(spParams);
        }
         return  this.http.post('Repository/GetTableData',{spName:spName, spParams:spParams}); 
    }
    get_2(spName, spParams){
        
         if(!angular.isArray(spParams)){
            spParams=this.getParams(spParams);
         }
         return  this.http.post('Repository/getScalarValue',{spName:spName, spParams:spParams}); 
    }
    exportExcel(spName, spParams, fileName){
        
         if(!angular.isArray(spParams)){
            spParams=  angular.toJson(this.getParams(spParams));
         }
       window.location='Repository/ExportExcel/?spName='+spName+'&spParams='+spParams+'&fileName='+fileName;
    }
    getParams(obj){
        var paramList=[];
        for(var key in obj){
            paramList.push({name:key, value:obj[key]});
        }
        return paramList;
    }
}
export default BaseSvc;