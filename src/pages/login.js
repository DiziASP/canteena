import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import Input from "@/components/form/Input";
import { loginFields } from "@/utils/formfieldConst";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  const fields = loginFields;
  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  return (
    <MainLayout
      meta={{
        title: "Login | Canteena",
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
        <h1 className="text-center font-bold text-4xl">
          Login to your account
        </h1>
        <p className="text-center text-lg">
          Don{"'"}t have an account?{" "}
          <Link href="/register">
            <span className="font-semibold text-purple-500 cursor-pointer">
              Sign Up
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
                value={loginState[field.id]}
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
          >
            Login
          </button>
        </motion.div>
      </div>
    </MainLayout>
  );
}
