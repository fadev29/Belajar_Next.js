import LoginPage from "@/pages/login";
import { render } from "@testing-library/react";
import "@testing-library/dom";

// describe : adalah function untuk mengelompokan test case yang berhubungan dengan satu komponen
describe("LoginPage", () => {
  // it() fungsi buat nulis/mendefisinisikan suatu  test case
  it("render halaman login sesuai spesifikasi", () => {
    // render (): fungsi buat ngerender komponen ke DOM virtual
    const page = render(<LoginPage />);

    //  expect(): funsi buat bikin assertion(bandigin hasil yang diharapkan dengan hasil yang diharapkan dengan hasil yang sebenarnya/ lagi di eksekusi)
    // toMatchSnapshot : fungsi buat
    expect(page).toMatchSnapshot();
  });
});
