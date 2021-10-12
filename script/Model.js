var Model = function(src){
    
    this.verties = null;
    this.Index = null;
    this.readModelFromSrc(src);
}

Model.prototype.readModelFromSrc = function (src){
    console.log(src.target);
     const reader = new FileReader();
  reader.onload = function(src) {
    console.log(src.target.result);
  };
 // reader.readAsText(file);
}
