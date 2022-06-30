import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import Input from "@/components/form/Input";
import { signupFields } from "@/utils/formfieldConst";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { saveUser } from "@/utils/FirebaseAPI";

export default function Login() {
  const fields = signupFields;
  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [regisState, setregisState] = useState(fieldsState);

  const handleChange = (e) => {
    setregisState({ ...regisState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (regisState.password !== regisState.confirm_password) {
        alert(
          "Please make sure your password and confirm password are correct"
        );
        return;
      }
      const data = {
        id: regisState.student_id,
        username: regisState.username,
        password: regisState.password,
        orders: [],
        balance: 0,
      };
      saveUser(data);
      alert("Data Uploaded successfully 😊");
    } catch (e) {
      alert("Error uploading the data: " + e.message);
    }
  };

  return (
    <MainLayout
      meta={{
        title: "Register | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <div className="flex flex-col gap-2 ">
        {/* Header */}
        <Link href="/">
          <Image
            src="/assets/images/brand.svg"
            height={100}
            width={300}
            className="cursor-pointer"
            alt=""
          />
        </Link>

        <h1 className="text-center font-bold text-4xl">Create your account</h1>
        <p className="text-center text-lg">
          Already have an account?{" "}
          <Link href="/login">
            <span className="font-semibold text-purple-500 cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>

        {/* Input */}
        <form className="mt-8 space-y-6">
          <div>
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={regisState[field.id]}
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
        </form>

        {/* Submit Button */}
        <motion.div whileTap={{ scale: 0.6 }}>
          {" "}
          <button
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
        bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </button>
        </motion.div>
      </div>
    </MainLayout>
  );
}
