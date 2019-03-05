function Airport(){
  this._hanger = [];
}

Airport.prototype.land = function(plane){
  this._hanger.push(plane);
  plane.land(this);
};

Airport.prototype.planes = function(){
  return this._hanger;
};
