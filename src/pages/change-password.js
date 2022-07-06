import Input from "@/components/form/Input";
import { MainLayout } from "@/layouts/MainLayout";
import { changePassFields } from "@/utils/formfieldConst";
import { useState } from "react";
import { motion } from "framer-motion";
import { useStateValue } from "@/context/StateProvider";
import { actionType } from "@/context/reducer";
import { updateUser } from "@/utils/FirebaseAPI";
import { useRouter } from "next/router";

export default function ChangePassword() {
  const [{ user }, dispatch] = useStateValue();
  const router = useRouter();
  const fields = changePassFields;

  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [changepassState, setchangepassState] = useState(fieldsState);

  const handleChange = (e) => {
    setchangepassState({ ...changepassState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      changepassState.new_password === "" ||
      changepassState.confirm_password === "" ||
      changepassState.old_password === ""
    ) {
      alert("Please fill all fields");
      return;
    }
    if (changepassState.new_password !== changepassState.confirm_password) {
      alert(
        "New Password and Confirm Password is not matched. Please try again"
      );
      return;
    }

    const data = {
      ...user,
      password: changepassState.new_password,
    };
    console.log(data);
    updateUser(data).then((result) => {
      dispatch({
        type: actionType.SET_USER,
        user: data,
      });
      localStorage.clear();
      alert("Change Successful. Please sign in again");
      router.push("/login");
    });
  };

  return (
    <MainLayout
      meta={{
        title: "Change Password | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <h1 className="font-bold text-4xl mb-4 text-center lg:text-start">
        Change Password
      </h1>
      <form className="mt-8 space-y-6 max-w-md w-full flex flex-col justify-center">
        <div>
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={changepassState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <motion.button
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          onClick={(e) => handleSubmit(e)}
          className="bg-pastel-purple py-4 px-8 rounded-lg font-semibold text-sm text-pastel-white mx-auto"
        >
          Save Change
        </motion.button>
      </form>
    </MainLayout>
  );
}
