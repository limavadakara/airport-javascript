describe("Feature Test", function() {
  var plane = new Plane();
  var airport = new Airport();

  it('lands a plane', function() {
    airport.land(plane);
    expect(airport.planes()).toContain(plane);

  });
});
