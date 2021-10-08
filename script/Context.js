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
  
  this.drawTriangle = function(verties){
      //console.log(verties);
      for (var i = 0; i < verties.length; i+=3)
          {
      this.drawLine(verties[i], verties[i+1]);
      this.drawLine(verties[i+1], verties[i+2]);
      this.drawLine(verties[i+2], verties[i]);
          }
}
    
  this.setVertexShader = function(vertexShader){
      this.vertexShader = vertexShader;
  }
  
  this.setPixelShader = function(pixelShader){
      this.pixelShader = pixelShader;
  }
}
