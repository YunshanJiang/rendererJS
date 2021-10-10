document.write("<script src='script/Math.js'></script>");
var VertexShader = function VertexShader(){
    this.camera = null;
  this.vert = function(vertex){
      //console.log(vertex);
       var cameraSpace = lookAt(this.camera.cameraPosition, this.camera.cameraLookAt, this.camera.cameraUp).timeVector3(vertex.position);
      var worldToProjection = projection(this.camera.radian, this.camera.aspectratio, 0.1, 10).timeVector4(cameraSpace);
      var ndc = NDC(worldToProjection);
      var screenPosition = screenSpace(Math.width, Math.height, ndc);
      //console.log(screenPosition);
      return new VertexOut(screenPosition.x,screenPosition.y,screenPosition.z, vertex.color.r, vertex.color.g, vertex.color.b);
      
  }
}
