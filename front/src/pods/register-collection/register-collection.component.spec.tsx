import * as React from "react";
import { render } from "@testing-library/react";
import { RegisterCollectionComponent } from "./register-collection.component";

describe("NameEdit component specs", () => {
  it("should display a label and input elements with empty userName value", () => {
    // Arrange
    const props = {
      entryCollection: []
    };

    // Act
    const all = render(<RegisterCollectionComponent {...props} />);
    const { container } = render(<RegisterCollectionComponent {...props} />);

    //const labelElement = getByText('');

    // Assert
    expect(container.firstChild.textContent).toBe(
      "Card numberDateFirstnameLastnameDNICompanyVisitsEntry timeExit timeEdit"
    );
  });
});
