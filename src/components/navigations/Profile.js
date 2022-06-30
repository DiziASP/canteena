import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

const Profile = () => {
  const login = true;

  const handleLogout = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth-user");
      Router.push("/login");
    }
  };
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className="inline-flex justify-center w-full 
              text-base font-medium leading-5 text-gray-700 
              transition duration-150 ease-in-out bg-white 
              rounded-full hover:bg-gray-500 hover:scale-110
              focus:bg-gray-500 focus:scale-110 focus:shadow-outline-blue 
              active:bg-gray-500 active:scale-110 z-20"
            >
              <Image
                src="/assets/images/avatar.svg"
                alt="Avatar Profile"
                height={40}
                width={40}
                className="hover:scale-90 ease-in-out duration-300"
              />
            </Menu.Button>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
              >
                {login ? (
                  <>
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5 text-black">Balance</p>
                      <p className="text-sm  leading-5 font-bold text-gray-900 truncate">
                        IDR 99999999
                      </p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/change-password">
                            <a
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Change Password
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/my-item">
                            <a
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Your item
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/history">
                            <a
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Purchase History
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#sign-out"
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        onClick={(e) => handleLogout(e)}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Profile;
