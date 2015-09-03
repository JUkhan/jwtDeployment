
class BaseSvc
{
    constructor(http, CacheFactory, q){
        
        this.http=http;
        this.q=q;
        this.dataCache=null;
        if (CacheFactory && !CacheFactory.get('dataCache')) {
            this.dataCache = CacheFactory('dataCache');
        }
    }
    postRequest(url, data){
        var id=url+angular.toJson(data||{});
        if(this.dataCache&& this.q){
            var  defer=this.q.defer();
            if(this.dataCache.get(id)){
                defer.resolve(this.dataCache.get(id));
            }else{
                this.http.post(url, data||{}).success(res=>{
                    this.dataCache.put(id, res);
                    defer.resolve(res);
                });
            }
	        return defer.promise;
        }else{
            return this.http.post(url, data||{});
        }
    }
    getRequest(url){
        if(this.dataCache&& this.q){
            var  defer=this.q.defer();
            if(this.dataCache.get(url)){
                defer.resolve(this.dataCache.get(url));
            }else{
                this.http.post(url, data||{}).success(res=>{
                    this.dataCache.put(url, res);
                    defer.resolve(res);
                });
            }
	        return defer.promise;
        }else{
            return this.http.get(url);
        }
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
      
           //return this.postRequest('Jwt/GetDummyData',obj);  
           return this.request({url:'Jwt/GetDummyData', method:'POST', data:obj}); 
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