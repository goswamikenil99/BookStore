import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"
function Login() {
  var [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg my-5">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="email"  className="grow" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
                <br />
              </label>
              <label className="input input-bordered flex items-center gap-2 my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" {...register("username", { required: true })} />
                {errors.username && <span className="text-red-500 text-sm">This field is required</span>}
                <br />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  className="grow"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
                <br />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="flex items-center justify-center w-8 h-8"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M1.646 8.354a.5.5 0 0 0 .708 0l2.832-2.832c1.394 1.463 2.84 2.674 4.322 3.666.326.227.678.393 1.04.492.362.098.741.148 1.124.148 1.086 0 2.197-.438 3.3-1.337.3-.262.577-.543.822-.838a.5.5 0 0 0-.708-.707c-.218.243-.462.465-.718.678-.602.5-1.227.755-1.871.755-.37 0-.737-.06-1.099-.166a3.713 3.713 0 0 1-.973-.441c-1.462-.992-2.865-2.207-4.217-3.675l2.93-2.93a.5.5 0 1 0-.707-.707L2.354 7.646a.5.5 0 0 0-.708 0zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path d="M1.646 8.354a.5.5 0 0 0 .708 0l2.832-2.832c1.394 1.463 2.84 2.674 4.322 3.666.326.227.678.393 1.04.492.362.098.741.148 1.124.148 1.086 0 2.197-.438 3.3-1.337.3-.262.577-.543.822-.838a.5.5 0 0 0-.708-.707c-.218.243-.462.465-.718.678-.602.5-1.227.755-1.871.755-.37 0-.737-.06-1.099-.166a3.713 3.713 0 0 1-.973-.441c-1.462-.992-2.865-2.207-4.217-3.675l2.93-2.93a.5.5 0 1 0-.707-.707L2.354 7.646a.5.5 0 0 0-.708 0zM10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
                    </svg>
                  )}
                </button>
              </label>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button className="btn btn-outline ml-1" type="submit">Login</button>
              <p className="mt-3">
                Not registered?{" "}
                <a href="/signup" className="text-pink-500 underline">
                  Signup
                </a>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
