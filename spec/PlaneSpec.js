describe("Plane", function(){
  var plane = new Plane();
  var airport = createSpyObj("airport", ["land"]);
  it('lands at an airport', function(){
    plane.land(airport);
    expect(plane.current_airport()).toEqual(airport);
  });
});
