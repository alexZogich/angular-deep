angular.module('app')
  .factory('Photos', Photos);

  function Photos ($resource) {

    return {
      getPhotos: function() {
        var photos = [];

        $resource('http://jsonplaceholder.typicode.com/photos').query(function (res) {
          for (prop in res){
            photos.push(res[prop]);
            if (res[prop].id == 10) break; 
          }
        });
        return photos;
      }
    }
  }