function Plane(){
  this.airport = "";
};

Plane.prototype.land = function(airport){
  this.airport = airport;
};

Plane.prototype.current_airport = function(){
  return this.airport;
};
