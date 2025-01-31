import axios from "axios";
import { login } from "@/services/auth";
//  buat data tiruan
jest.mock("axios");
describe("Login", () => {
  it("test fungsi login dengan paylod yang sesuai", async () => {
    // data dummy
    const payload = {
      username: "danu",
      password: "123",
    };
    // memangil service login
    await login(payload);
    // toHaveBeenCalledWith : fungsi untuk memastikan tsb dipangil dengan endpint dan parameter yang sesuai
    expect(axios.post).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API}/auth/login`, payload);
  });
  it("test fungsi login yang gagal dengan paylod yang tidak sesuai", async () => {
    // data dummy
    const payload = {
      username: "danu",
      password: "123",
    };
    const error = new Error("login gagal");
    // mockRejectedValue : fungsi mengembalikan error
    axios.post.mockRejectedValue(error);
    // memangil service login
    const res = await login(payload);
    // teEqual fungsi bandingin hasil
    expect(res).toEqual({ status: false, error });
  });

  it("cek token ketika login berhasil", async () => {
    const payload = {
      username: "danu",
      password: "123",
    };
    const token = "token123";
    // mockResolvedValue : fungsi buat mengembalikan status sukses(pura2 sukses)
    axios.post.mockResolvedValue({ data: { token } });

    const res = await login(payload);

    expect(res).toEqual({ status: true, token });
  });
});
