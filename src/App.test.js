import { render } from "@testing-library/svelte";
import App from "./App.svelte";

describe("App component", () => {
  it("should render", () => {
    const { queryByText } = render(App, { props: { name: "World" } });
    expect(queryByText("Hello World!")).toBeInTheDocument();
  });
});
