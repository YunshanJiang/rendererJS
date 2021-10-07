document.write("<script src='script/Buffer.js'></script>");
var Device = function Device(){
  this.CreateBuffer = function(byteWidth){
    var buffer = new Buffer();
    buffer.m_BUFFER = new Uint8ClampedArray(byteWidth);

    return buffer;
  }
  
  this.createRenderTargetView = function(frameBuffer){
      return frameBuffer.m_BUFFER;
  }
  this.CreateVertexShader = function(){

  }
  this.CreatePixelShader = function(){
    
  }
  
  
}