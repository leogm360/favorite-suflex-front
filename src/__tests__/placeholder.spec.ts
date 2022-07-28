import { screen } from "@testing-library/react";

describe("App", () => {
  it("should render", () => {
    // render(<App />);

    const text = screen.getByText("Hello Vite + React!");

    expect(text).toBeInTheDocument();
  });
});
