var Vector2 = function Vector2(x = 0, y = 0)
{
  this.x = x;
  this.y = y;
    
  this.add = function(vector2){
  var tx = this.x + vector2.x; 
  var ty = this.y + vector2.y; 
  return new Vector2(tx, ty);
}

  this.minus = function(vector2){
      var tx = this.x - vector2.x; 
    var ty = this.y - vector2.y; 
  return new Vector2(tx, ty);
  }
  this.time = function(number){
       var tx = this.x * number; 
    var ty = this.y * number; 
  return new Vector2(tx, ty);
  }
  this.length = function(){
      return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
  this.dot = function(vector2){
   var result = this.x * vector2.x + this.y * vector2.y; 
  return result;
  }
}

var Vector3 = function Vector3(x = 0, y = 0, z = 0)
{
  this.x = x;
  this.y = y;
  this.z = z;    
  this.add = function(vector3){
  var tx = this.x + vector3.x;
  var ty = this.y + vector3.y;
  var tz = this.z + vector3.z;
  return new Vector3(tx, ty, tz);
}

  this.minus = function(vector3){
  var tx = this.x - vector3.x; 
  var ty = this.y - vector3.y; 
  var tz = this.z - vector3.z; 
  return new Vector3(tx, ty, tz);
  }
  
  this.time = function(number){
  var tx = this.x * number; 
  var ty = this.y * number;
  var tz = this.z * number; 
  return new Vector3(tx, ty, tz);
  }
  this.length = function(){
      return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
  this.dot = function(vector3){
  var result = this.x * vector3.x + this.y * vector3.y + this.z * vector3.z; 
  return result;
  }
  this.cross = function(vector3){
  var tx = this.y * vector3.z - this.z * vector3.y;
  var ty = this.z * vector3.x - this.x * vector3.z;
  var tz = this.x * vector3.y - this.y * vector3.x;
  return new Vector3(tx, ty, tz);
  }
}

var Vector4 = function Vector4(x = 0, y = 0, z = 0, w = 0)
{
  this.x = x;
  this.y = y;
  this.z = z; 
  this.w = w;
  this.add = function(vector4){
  var tx = this.x + vector4.x;
  var ty = this.y + vector4.y;
  var tz = this.z + vector4.z;
  var tw = this.w;
  return new Vector4(tx, ty, tz, tw);
}

  this.minus = function(vector4){
  var tx = this.x - vector4.x; 
  var ty = this.y - vector4.y; 
  var tz = this.z - vector4.z; 
  var tw = this.w; 
  return new Vector4(tx, ty, tz, tw);
  }
  
  this.time = function(number){
  var tx = this.x * number; 
  var ty = this.y * number;
  var tz = this.z * number; 
  return new Vector4(tx, ty, tz, this.w);
  }
  this.length = function(){
      return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
  this.dot = function(vector4){
  var result = this.x * vector4.x + this.y * vector4.y + this.z * vector4.z; 
  return result;
  }
  this.cross = function(vector4){
  var tx = this.y * vector4.z - this.z * vector4.y;
  var ty = this.z * vector4.x - this.x * vector4.z;
  var tz = this.x * vector4.y - this.y * vector4.x;
  return new Vector4(tx, ty, tz, this.w);
  }
}

var Matrix4x4 = function(m = []){
    this._11 = 0;
      this._12 = 0;
      this._13 = 0;
      this._14 = 0;
      this._21 = 0;
      this._22 = 0;
      this._23 = 0;
      this._24 = 0;
      this._31 = 0;
      this._32 = 0;
      this._33 = 0;
      this._34 = 0;
      this._41 = 0;
      this._42 = 0;
      this._43 = 0;
      this._44 = 0;
    
    if (m.length != 0)
        {
      this._11 = m[0];
      this._12 = m[1];
      this._13 = m[2];
      this._14 = m[3];
      this._21 = m[4];
      this._22 = m[5];
      this._23 = m[6];
      this._24 = m[7];
      this._31 = m[8];
      this._32 = m[9];
      this._33 = m[10];
      this._34 = m[11];
      this._41 = m[12];
      this._42 = m[13];
      this._43 = m[14];
      this._44 = m[15];
        }
    this.m = [this._11, this._12, this._13, this._14,
              this._21, this._22, this._23, this._24,
              this._31, this._32, this._33, this._34,
              this._41, this._42, this._43, this._44];
    
    this.timeMatrix = function(matrix4x4){
        var resultMatrix = new Matrix4x4();
        resultMatrix._11 = this._11 * matrix4x4._11 + this._12 * matrix4x4._21 + this._13 * matrix4x4._31 + this._14 * matrix4x4._41;
        resultMatrix._12 = this._11 * matrix4x4._12 + this._12 * matrix4x4._22 + this._13 * matrix4x4._32 + this._14 * matrix4x4._42;
        resultMatrix._13 = this._11 * matrix4x4._13 + this._12 * matrix4x4._23 + this._13 * matrix4x4._33 + this._14 * matrix4x4._43;
        resultMatrix._14 = this._11 * matrix4x4._14 + this._12 * matrix4x4._24 + this._13 * matrix4x4._34 + this._14 * matrix4x4._44;
        
        resultMatrix._21 = this._21 * matrix4x4._11 + this._22 * matrix4x4._21 + this._23 * matrix4x4._31 + this._24 * matrix4x4._41;
        resultMatrix._22 = this._21 * matrix4x4._12 + this._22 * matrix4x4._22 + this._23 * matrix4x4._32 + this._24 * matrix4x4._42;
        resultMatrix._23 = this._21 * matrix4x4._13 + this._22 * matrix4x4._23 + this._23 * matrix4x4._33 + this._24 * matrix4x4._43;
        resultMatrix._24 = this._21 * matrix4x4._14 + this._22 * matrix4x4._24 + this._23 * matrix4x4._34 + this._24 * matrix4x4._44;
        
        resultMatrix._31 = this._31 * matrix4x4._11 + this._32 * matrix4x4._21 + this._33 * matrix4x4._31 + this._34 * matrix4x4._41;
        resultMatrix._32 = this._31 * matrix4x4._12 + this._32 * matrix4x4._22 + this._33 * matrix4x4._32 + this._34 * matrix4x4._42;
        resultMatrix._33 = this._31 * matrix4x4._13 + this._32 * matrix4x4._23 + this._33 * matrix4x4._33 + this._34 * matrix4x4._43;
        resultMatrix._34 = this._31 * matrix4x4._14 + this._32 * matrix4x4._24 + this._33 * matrix4x4._34 + this._34 * matrix4x4._44;
        
        resultMatrix._41 = this._41 * matrix4x4._11 + this._42 * matrix4x4._21 + this._43 * matrix4x4._31 + this._44 * matrix4x4._41;
        resultMatrix._42 = this._41 * matrix4x4._12 + this._42 * matrix4x4._22 + this._43 * matrix4x4._32 + this._44 * matrix4x4._42;
        resultMatrix._43 = this._41 * matrix4x4._13 + this._42 * matrix4x4._23 + this._43 * matrix4x4._33 + this._44 * matrix4x4._43;
        resultMatrix._44 = this._41 * matrix4x4._14 + this._42 * matrix4x4._24 + this._43 * matrix4x4._34 + this._44 * matrix4x4._44;
        return resultMatrix;
    }
    this.timeVector = function(vector4){
        var t_x = this._11 * vector4.x + this._12 * vector4.y + this._13 * vector4.z + this._14 * vector4.w;
        var t_y = this._21 * vector4.x + this._22 * vector4.y + this._23 * vector4.z + this._24 * vector4.w;
        var t_z = this._31 * vector4.x + this._32 * vector4.y + this._33 * vector4.z + this._34 * vector4.w;
        var t_w = this._41 * vector4.x + this._42 * vector4.y + this._43 * vector4.z + this._44 * vector4.w;
        return new Vector4(t_x, t_y,t_z, t_w);
    }
    
}

function scaleMatrix(vector){
    var scaleList = 
    [vector.x, 0,        0,        0,
     0,        vector.y, 0,        0,
     0,        0,        vector.z, 0,
     0,        0,        0,        1,
    ];
    return new Matrix4x4(scaleList);
}

function rotateMatrixz(radians){
    var rotateZList = 
    [Math.cos(radians), -Math.sin(radians), 0,        0,
     Math.sin(radians), Math.cos(radians),  0,        0,
     0,                 0,                  1,        0,
     0,                 0,                  0,        1,
    ];
    return new Matrix4x4(rotateZList);
}
function rotateMatrixY(radians){
    var rotateYList = 
    [Math.cos(radians), 0, Math.sin(radians),        0,
     0,                 1, 0,                        0,
     -Math.sin(radians),0, Math.cos(radians),        0,
     0,                 0, 0,                        1,
    ];
    return new Matrix4x4(rotateYList);
}
function rotateMatrixX(radians){
    var rotateXList = 
    [1, 0,                 0,                         0,
     0, Math.cos(radians), -Math.sin(radians),        0,
     0, Math.sin(radians), Math.cos(radians),         0,
     0, 0,                 0,                         1,
    ];
    return new Matrix4x4(rotateXList);
}

function translationMatrix(vector){
    var translationList = 
    [0, 0, 0, vector.x,
     0, 0, 0, vector.y,
     0, 0, 0, vector.z,
     0, 0, 0, 1,
    ];
    return new Matrix4x4(translationList);
}