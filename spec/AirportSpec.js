describe("Airport", function(){
  var plane = jasmine.createSpyObj("plane", ["land"]);
  var airport = new Airport();
  it('lands a plane', function(){
    airport.land(plane);
    expect(plane.land).toHaveBeenCalledWith(airport);
    expect(airport.planes()).toContain(plane);
  });
});

describe("Airport", function(){
  var airport = new Airport();
  it('gets created with an empty hanger', function(){
    expect(airport.planes()).toEqual([]);
  });
});
