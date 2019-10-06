import * as mopMiddleware from "../mop.middleware";

describe("Validating Credit Card", () => {
  it("Try validating credit card with 0", () => {
    const validationResult = mopMiddleware.validateCard("0");
    expect(validationResult).toEqual(false);
  });

  it("Try validating credit card with 5 Numbers ", () => {
    const validationResult = mopMiddleware.validateCard("11111");
    expect(validationResult).toEqual(false);
  });

  it("Try validating VISA credit card", () => {
    const validationResult = mopMiddleware.validateCard("4270539990719306");
    expect(validationResult).toEqual(true);
  });
});
