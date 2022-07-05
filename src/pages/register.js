import { MainLayout } from "@/layouts/MainLayout";
import Image from "next/image";
import Input from "@/components/form/Input";
import { signupFields } from "@/utils/formfieldConst";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { saveUser } from "@/utils/FirebaseAPI";
import { useRouter } from "next/router";
import { getAllUsers } from "@/utils/FirebaseAPI";

export default function Login() {
  const router = useRouter(); // Initiate Router

  // Form Field Variables
  const fields = signupFields;
  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [regisState, setregisState] = useState(fieldsState);

  const handleChange = (e) => {
    setregisState({ ...regisState, [e.target.id]: e.target.value });
  };

  const validateStudentID = (studentID) => {
    let key = studentID.slice(0, 3);
    let piv = Number(studentID.slice(3));

    let res = 0;
    for (let i = 0; i < key.length; i++) {
      res += Number(key[i]);
    }

    if (res === piv) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (regisState.password !== regisState.confirm_password) {
        alert(
          "Please make sure your password field matched the confirm password field"
        );
        return;
      }
      if (!validateStudentID(regisState.student_id)) {
        alert(
          "Student ID is not valid. Please make sure your input is correct"
        );
        return;
      }
      if (
        regisState.username === "" ||
        regisState.student_id === "" ||
        regisState.password === "" ||
        regisState.confirm_password === ""
      ) {
        alert("Please fill all the fields.");
        return;
      }

      const data = {
        id: regisState.student_id,
        username: regisState.username,
        password: regisState.password,
        orders: [],
        balance: 0,
      };

      await getAllUsers().then((res) => {
        if (res.find((item) => item.id === regisState.student_id)) {
          alert("User with this id already exists. Please try again");
          return;
        } else {
          saveUser(data).then((res) => {
            alert("Account has been registered. Sign in now");
            router.push("/login");
          });
        }
      });
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

        <h1 className="text-center font-bold text-3xl lg:text-4xl">
          Create your account
        </h1>
        <p className="text-center text-base lg:text-lg">
          Already have an account?{" "}
          <Link href="/login">
            <span className="font-semibold text-pastel-purple cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>

        {/* Input */}
        <form className="mt-6 space-y-6">
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

            {!validateStudentID(regisState.student_id) && (
              <p className="text-sm font-medium text-pastel-white bg-red-500 text-center px-4 py-2 rounded-lg">
                Student ID must be : first digit + second digit + third digit =
                2 last digits
              </p>
            )}
          </div>
        </form>

        {/* Submit Button */}
        <motion.div whileTap={{ scale: 0.6 }} whileHover={{ scale: 1.1 }}>
          {" "}
          <button
            type="button"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
            bg-pastel-purple focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-pastel-purple mt-10"
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </button>
        </motion.div>
      </div>
    </MainLayout>
  );
}
