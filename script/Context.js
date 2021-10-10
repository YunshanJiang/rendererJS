document.write("<script src='script/Device.js'></script>");
var Context = function Context(){
  this.renderTargetView = null;  
  this.viewport = null;
  this.vertexShader = null;
  this.pixelShader = null;
  this.setRenderTargetView = function(renderTargetView){
      this.renderTargetView = renderTargetView;
  }
  this.setViewport = function(viewport){
      this.viewport = viewport;
  }
  this.clear = function(){
    for (var y = viewport.startHeight; y <viewport.endHeight; y++)
    {
        var startBufferIndex = y * viewport.canvasWidth * 4;
        for (var x = viewport.startWidth; x < viewport.endWidth; x++)
            {
             renderTargetView[startBufferIndex + x * 4] = 255;
             renderTargetView[startBufferIndex + x * 4 + 1] = 255;
             renderTargetView[startBufferIndex + x * 4 + 2] = 0;
             renderTargetView[startBufferIndex + x * 4 + 3] = 255;
                
            }
    }
  }
  this.drawLine = function(vector1, vector2){
      if (vector1 != null && vector2 != null)
          {
              
          
      var dx = vector2.x - vector1.x;
      var dy = vector2.y - vector1.y;
      
      var steps = Math.abs(dy);
      if (Math.abs(dx) > Math.abs(dy))
          {
              steps = Math.abs(dx);
          }
      var startX = vector1.x;
      var startY = vector1.y;
      
      dx /= steps;
      dy /= steps;
     
      for (var i = 0; i < steps; i++)
          {
              var startBufferIndex = Math.round(startY) * viewport.canvasWidth * 4;
              renderTargetView[startBufferIndex + Math.round(startX) * 4] = 0;
             renderTargetView[startBufferIndex + Math.round(startX) * 4 + 1] = 255;
             renderTargetView[startBufferIndex + Math.round(startX) * 4 + 2] = 0;
             renderTargetView[startBufferIndex + Math.round(startX) * 4 + 3] = 255;
              startX = startX + dx;
              startY = startY + dy;
          }
          }
  }
  
  this.drawTrianglesLineMode = function(verties){
      //console.log(verties);
      for (var i = 0; i < verties.length; i+=3)
          {
      this.drawLine(verties[i].position, verties[i+1].position);
      this.drawLine(verties[i+1].position, verties[i+2].position);
      this.drawLine(verties[i+2].position, verties[i].position);
          }
}
  this.drawTrianglesFace = function(verties){
      for (var i = 0; i < verties.length; i+=3)
          {
              this.drawTriangleFace(verties[i],verties[i + 1],verties[i + 2]);
    //  this.drawLine(verties[i].position, verties[i+1].position);
    //  this.drawLine(verties[i+1].position, verties[i+2].position);
     // this.drawLine(verties[i+2].position, verties[i].position);
          }
  }
  this.drawTriangleFace = function(vertex1, vertex2, vertex3){
      if (vertex1.position.y > vertex2.position.y)
          {
              [vertex1, vertex2] = [vertex2,vertex1];
          }
      if (vertex2.position.y > vertex3.position.y)
          {
              [vertex2, vertex3] = [vertex3,vertex2];
          }
      if (vertex1.position.y > vertex2.position.y)
          {
               [vertex1, vertex2] = [vertex2,vertex1];
          }
      if (vertex1.position.y == vertex2.position.y)
          {
              
              if (vertex1.position.x > vertex2.position.x)
                  {
                      [vertex1, vertex2] = [vertex2,vertex1];
                  }
               this.drawTopFlatTriangle(vertex1, vertex3, vertex2);
          }
     // console.log(vertex1, vertex2, vertex3);
  }
  
  this.drawTopFlatTriangle = function(vertex1, vertex3, vertex2){
      
      var startY = vertex3.position.y;
      var endY = vertex1.position.y;
      
      for (var i = startY; i >= endY; i--)
          {
              
              var factor = (i - endY) / (startY - endY);
              var xl = lerpVertexOut(vertex1, vertex3, factor);
              var xr = lerpVertexOut(vertex2, vertex3, factor);
              //console.log(xl,xr);
              this.drawScanLine(xl, xr);
          }
  }
  this.drawBottomFlatTriangle = function(vertex1, vertex2, vertex3){
      
  }
  
  this.drawScanLine = function(vertex1, vertex2){
      var steps = Math.floor(vertex2.position.x - vertex1.position.x);
      var startX = vertex1.position.x;
      var startY = vertex1.position.y;
      //console.log(steps);
      for (var i = 1; i <= steps; i++)
          {
              var startBufferIndex = Math.round(startY) * viewport.canvasWidth * 4;
              renderTargetView[startBufferIndex + Math.round(startX) * 4] = 0;
             renderTargetView[startBufferIndex + Math.round(startX) * 4 + 1] = 255;
             renderTargetView[startBufferIndex + Math.round(startX) * 4 + 2] = 0;
             renderTargetView[startBufferIndex + Math.round(startX) * 4 + 3] = 255;
              startX++;
             //console.log(startX);
          }
  }
  this.setVertexShader = function(vertexShader){
      this.vertexShader = vertexShader;
  }
  
  this.setPixelShader = function(pixelShader){
      this.pixelShader = pixelShader;
  }
}
