import Input from "@/components/form/Input";
import { MainLayout } from "@/layouts/MainLayout";
import { changePassFields } from "@/utils/formfieldConst";
import { useState } from "react";

export default function ChangePassword() {
  const fields = changePassFields;

  let fieldsState = {};
  fields.forEach((field) => (fieldsState[field.id] = ""));

  const [changepassState, setchangepassState] = useState(fieldsState);

  const handleChange = (e) => {
    setchangepassState({ ...changepassState, [e.target.id]: e.target.value });
  };

  return (
    <MainLayout
      meta={{
        title: "Add Item | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <h1 className="font-bold text-4xl mb-4 text-center lg:text-start">
        Change Password
      </h1>
      <form className="mt-8 space-y-6 max-w-md w-full">
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
      </form>
    </MainLayout>
  );
}
