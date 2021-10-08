document.write("<script src='script/Math.js'></script>");
var VertexShader = function VertexShader(){
    this.camera = null;
  this.vert = function(vertex){
      
       var cameraSpace = lookAt(this.camera.cameraPosition, this.camera.cameraLookAt, this.camera.cameraUp).timeVector3(vertex);
      var worldToProjection = projection(this.camera.radian, this.camera.aspectratio, 0.1, 10).timeVector4(cameraSpace);
      return NDC(worldToProjection);
      
  }
}
