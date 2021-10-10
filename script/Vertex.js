document.write("<script src='script/Math.js'></script>");
document.write("<script src='script/Color.js'></script>");
var Vertex = function(x,y,z,r,g,b){
    this.position = new Vector3(x,y,z);
    this.color = new Color(r,g,b);
}