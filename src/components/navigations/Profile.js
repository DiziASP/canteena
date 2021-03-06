import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useStateValue } from "@/context/StateProvider";
import { useRouter } from "next/router";
import { actionType } from "@/context/reducer";
import { BsCash } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { useEffect, useState } from "react";
import { getAllUsers, getUser, updateUser } from "@/utils/FirebaseAPI";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase/clientApp";

const Profile = () => {
  const [{ items, user }, dispatch] = useStateValue();
  const [balance, setBalance] = useState("");
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    router.reload();
  };

  const handleBalance = (e, param) => {
    e.preventDefault();
    if (balance === "") {
      alert("Balance field is empty");
      return;
    }
    if (Number(user.balance) - Number(balance) < 0 && param !== "add") {
      alert("Balance cannot be less than zero");
      return;
    }
    const data =
      param === "add"
        ? {
            ...user,
            balance: Number(user.balance) + Number(balance),
          }
        : {
            ...user,
            balance: Number(user.balance) - Number(balance),
          };
    updateUser(data).then((result) => {
      dispatch({ type: actionType.SET_USER, user: data });
      localStorage.setItem("user", JSON.stringify(data));
      alert("Balance updated successfully");
      router.reload();
    });
  };

  const fetchUser = async () => {
    const locUser = user !== null ? user : {};

    await getDoc(doc(firestore, "users", `${locUser.id}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const userLogged = snapshot.data();
        dispatch({
          type: actionType.SET_USER,
          user: userLogged,
        });
      } else {
        console.log("User not found");
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);
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
                {user ? (
                  <>
                    <div className="px-4 py-3">
                      <p className="text-base leading-5 text-black mb-2">
                        Hi, <span className="font-bold">{user?.username}!</span>
                      </p>
                      <p className="text-sm leading-5 text-black">Balance</p>
                      <p className="text-sm  leading-5 font-bold text-gray-900 truncate">
                        IDR {user.balance}
                      </p>

                      {/* Add Balance Field */}
                      <div className="flex flex-col justify-between gap-2 mt-4">
                        <form>
                          <input
                            type="text"
                            id="balance"
                            onChange={(e) => setBalance(e.target.value)}
                            className="w-full border rounded-lg p-2 py-1 text-xs"
                          />
                        </form>
                        <div className="flex justify-evenly gap-4">
                          <GiTakeMyMoney
                            className="cursor-pointer"
                            onClick={(e) => handleBalance(e, "remove")}
                          />
                          <BsCash
                            className="cursor-pointer"
                            onClick={(e) => handleBalance(e, "add")}
                          />
                        </div>
                      </div>
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
                          <Link href="/add-item">
                            <a
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            >
                              Sell item
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
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#sign-out"
                            className={`${
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={(e) => handleLogout(e)}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </>
                ) : (
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/login">
                        <a
                          href="#Login"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          Sign In
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                )}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default Profile;
