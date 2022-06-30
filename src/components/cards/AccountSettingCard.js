import React from "react";

const AccountSettingCard = ({ sell }) => {
  return (
    <div className="flex flex-col min-h-[20rem] bg-pastel-white rounded-[1.25rem] shadow-md px-10 py-9">
      <h2 className="text-lg lg:text-2xl font-bold mb-8">Settings</h2>
      <form className="flex flex-row">
        <div className="flex flex-col w-full justify-between">
          <label className="text-xs font-medium mb-2">Username</label>
          <input
            type="text"
            className="bg-transparent w-1/2 shadow-md text-sm py-2 px-4 "
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium mb-2">Username</label>
          <input
            type="text"
            className="bg-transparent min-w shadow-md text-sm py-2 px-4 "
          />
        </div>
      </form>
    </div>
  );
};

export default AccountSettingCard;
