import * as mopMiddleware from "../mop.middleware";

describe("Validating Credit Card", () => {
  it("FAILING: Validating credit card with 0", () => {
    const validationResult = mopMiddleware.validateCard("0");
    expect(validationResult).toEqual(false);
  });

  it("FAILING: Validating credit card with 5 Numbers ", () => {
    const validationResult = mopMiddleware.validateCard("11111");
    expect(validationResult).toEqual(false);
  });

  it("SUCCESS: Validating VISA credit card", () => {
    const validationResult = mopMiddleware.validateCard("4270539990719306");
    expect(validationResult).toEqual(true);
  });

  it("FAILING: Validating VISA credit card with more than 19 characters", () => {
    const validationResult = mopMiddleware.validateCard(
      "4270539990719306990719306"
    );
    expect(validationResult).toEqual(false);
  });

  it("SUCCESS: Validating MasterCard credit card", () => {
    const validationResult = mopMiddleware.validateCard("5458756487121736");
    expect(validationResult).toEqual(true);
  });

  it("SUCCESSFAILING: Validating MasterCard credit card with more than 19 characters", () => {
    const validationResult = mopMiddleware.validateCard(
      "54587564871217362173621736"
    );
    expect(validationResult).toEqual(false);
  });

  it("SUCCESS: Validating American Express credit card", () => {
    const validationResult = mopMiddleware.validateCard("373941884747852");
    expect(validationResult).toEqual(true);
  });

  it("FAILING: Validating American Express credit card", () => {
    const validationResult = mopMiddleware.validateCard(
      "37394188474785284747852"
    );
    expect(validationResult).toEqual(false);
  });

  it("SUCCESS: Validating Visa Electron credit card", () => {
    const validationResult = mopMiddleware.validateCard("4917245371663696");
    expect(validationResult).toEqual(true);
  });

  it("FAILING: Validating Visa Electron credit card", () => {
    const validationResult = mopMiddleware.validateCard(
      "491724537166369671663696"
    );
    expect(validationResult).toEqual(false);
  });
});
