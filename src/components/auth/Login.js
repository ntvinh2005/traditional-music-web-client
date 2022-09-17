import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LockClosedIcon } from "@heroicons/react/20/solid";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //    if (isAuthenticated == true) navigate('/home')

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const onChangeLoginForm = (event) =>
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-yellow-50 h-screen overflow-hidden">
      <div className="flex min-h-full items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto w-4"
              src={require('../../assets/resonance_logo-removebg-preview.png')}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Đăng nhập vào tài khoản
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Hoặc{"  "}
              <a
                href="register"
                className="font-medium text-yellow-600 hover:text-yellow-500"
              >
                Đăng ký tài khoản mới
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6 bg-white p-5 shadow" onSubmit={login}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Tên đăng nhập
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Tên đăng nhập"
                  value={loginForm.username}
                  onChange={onChangeLoginForm}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={onChangeLoginForm}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                  placeholder="Mật khẩu"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ghi nhớ mật khẩu
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-yellow-600 hover:text-yellow-500"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </div>
            <hr/>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400"
                    aria-hidden="true"
                  />
                </span>
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
