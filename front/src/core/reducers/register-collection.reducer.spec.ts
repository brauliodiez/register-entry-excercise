import { BaseAction } from "common-app";
import { registerCollectionReducer } from "./register-collection.reducer";

describe("core/reducers/list/register-collection tests", () => {
  it("should return the expected state when initialized with undefined initial state", () => {
    // Arrange
    const action: BaseAction = {
      type: "foo",
      payload: null
    };

    // Act
    const result = registerCollectionReducer(undefined, action);

    // Assert
    expect(result.length).toBe(0);
  });
});
