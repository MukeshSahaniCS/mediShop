import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/data/myContext";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const context = useContext(myContext);
  const { mode, toggleMode } = context;

  const user = JSON.parse(localStorage.getItem("user"));
  //   console.log(user.user.email);
  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };
  const cartItems = useSelector((state) => state.cart);
  return (
    <div className="bg-white sticky top-0 z-50  ">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                  {user?.user?.email === "sahanigolu8318@gmail.com" ? (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        admin
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt="Dan_Abromov"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png "
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>

        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      mediShop
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-700 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    ""
                  )}

                  {user?.user?.email === import.meta.env.VITE_ADMIN_USER ? (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
