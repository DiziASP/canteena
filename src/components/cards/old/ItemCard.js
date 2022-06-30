import React from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ItemCard = ({ sell }) => {
  const api = "https://picsum.photos/200";
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const isSell = sell;
  return (
    <div className="relative max-w-md flex flex-col scale-90 hover:scale-100 ease-in-out duration-300 hover:opacity-80 rounded-[2rem] shadow-md bg-white">
      <div
        className="flex flex-col rounded-[2rem] min-h-[14rem]
                 w-full cursor-pointer z-10"
      >
        <div className="w-full">
          <Image
            src={api}
            alt="Products"
            width={500}
            height={300}
            objectFit="cover"
            className="w-full h-1/4 rounded-t-[2rem]"
          />
        </div>
        <div id="cardcontent" className="flex flex-col px-4 py-2">
          <h1 className="font-semibold text-xl mb-2">Product Name</h1>
          <p className="text-gray-500 text-sm w-3/4">
            Must go faster. We gotta burn the rain forest, dump toxic waste,
            pollute the air, and rip up the OZONE!
          </p>
        </div>
        <div className="flex flex-row gap-4 px-4 py-4 mb-4">
          <button
            onClick={openModal}
            className="text-xs font-semibold text-white bg-red-400 rounded-md py-[0.2rem] px-3"
          >
            {isSell ? "Sell Item" : "Delete Item"}
          </button>
        </div>
      </div>

      {/* Modals Section */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900"
                  >
                    {isSell ? "Sell item" : "Delete Item"}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to {isSell ? "sell " : "delete "}
                      this item?
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 mt-2 py-4">
                    <h2 className="text-base font-semibold text-black">
                      Product Name
                    </h2>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur varius, leo eu viverra facilisis, leo lacus
                      vulputate tortor, et semper augue justo vel mauris.
                      Maecenas sollicitudin augue vitae felis volutpat lacinia.
                      Maecenas vel mauris dolor. Maecenas convallis massa ac leo
                      condimentum, a semper magna laoreet. Praesent eu mi at
                      justo pulvinar imperdiet. In vel tellus eu ipsum feugiat
                      venenatis sit amet eu mauris.
                    </p>
                    <h2 className="text-xl font-bold text-black mt-4">
                      IDR 900000
                    </h2>
                  </div>

                  <div className="flex gap-8 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 ease-in-out duration-200 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 ease-in-out duration-200 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ItemCard;
