"use client";

import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validations";

const signInWithCredentials = async (data: any) => {};

const Page = () => (
  <AuthForm
    type="SIGN_IN"
    schema={signInSchema}
    defaultValues={{
      email: "",
      password: "",
    }}
    onSubmit={signInWithCredentials}
  />
);

export default Page;
