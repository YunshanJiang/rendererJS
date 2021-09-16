var Vector2 = function Vector2(x, y)
{
  this.x = x;
  this.y = y;
}
Vector2.prototype.add = function(vector2){
  this.x += vector2.x;
  this.y += vector2.y;
}
