import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/atoms/Button/Button";

describe("Button", () => {
  it("render button dengan children", () => {
    //  getByText : fungsi untuk ngambil elemen dengan text tertentu
    render(<Button>Login</Button>);
    // toBeInTheDocument : fungsi buat mastiin elemen tersebut ada di DOM virtual
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
  it("render button dengan warna biru", () => {
    const { getByText } = render(<Button buttonClassname="bg-blue-500">Login</Button>);
    const button = getByText("Login").closest("button");

    expect(button.className).toContain("bg-blue-500");
  });
  it("render button dengan lebar 100%(w-full)", () => {
    const { getByText } = render(<Button type={"submit"}>Login</Button>);
    const button = getByText("Login").closest("button");

    expect(button.type).toContain("submit");
  });
  it("test fungsi onClick pada button ketika di klik", () => {
    // jest.fn() : fungsi  buat mock fungsi(data/funsi tiruan)
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Login</Button>);
    const button = getByText("Login").closest("button");
    // fireEvent : fungsi buat simulasi event handler di suatu elemen
    fireEvent.click(button);
    //  toHaveBeenCalledTimes : untuk mastikan
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
