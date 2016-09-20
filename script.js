var $ = {
  
  ajax: function(options){
    var xhr = new XMLHttpRequest();

    if(options.complete){
      xhr.addEventListener("load", function(){
        options.complete(this, this.statusText);
      })

      xhr.addEventListener("error", function(){
        options.complete(this, this.statusText, this.status);
      })
    }

    if(options.data){
      xhr.responseType = options.data;
    }


    if(options.error){
      xhr.addEventListener("error", function(){
        options.error(this, this.statusText, this.status);
      })
    }

    if(options.headers){
      for(var header in options.headers){
        xhr.setRequestHeader(header, options.headers[header]);
      }
    }

    if(options.method){
      var method = options.method;
    }

    if(options.success){
      if(this.status >= 200 && this.status < 400){
        options.success(this.responseText, this.statusText, this);
      } else {
        options.error(this, this.statusText, this.status);
      }
    }

    
    if(options.url){
      var url = options.url;
    }

    if(options.async){
      var async = options.async;
    }

    xhr.open(method, url, async);

    xhr.send(options.data);
  },

  get: function(url, data, success, dataType){
     var options = {method: "get",
                    async: true,
                    url: url,
                    data: data,
                    success: success,
                    dataType: dataType
                 };
      return $.ajax(options);
   },
 
   post: function(url, data, success, dataType){
     var options = {method: "post",
                    async: true,
                    url: url,
                    data: data,
                    success: success,
                    dataType: dataType
                 };
      return $.ajax(options);
   }
 
}