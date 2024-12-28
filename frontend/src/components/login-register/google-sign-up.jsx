'use client';
import React from "react";
import Image from "next/image";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter,redirect } from "next/navigation";
// internal
import google_icon from "@assets/img/icon/login/google.svg";
import { useSignUpProviderMutation } from "@/redux/features/auth/authApi";
import { notifyError, notifySuccess } from "@/utils/toast";

const GoogleSignUp = () => {
  const [signUpProvider, {}] = useSignUpProviderMutation();
  const router = useRouter();
  // handleGoogleSignIn
  const handleGoogleSignIn = (user) => {
    if (user) {
      signUpProvider(user?.credential).then((res) => {
        if (res?.data) {
          notifySuccess("Login success!");
          router.push('/checkout');
        } else {
          console.log("result error -->", res.error);
          notifyError(res.error?.message);
        }
      });
    }
  };
  return (
    <GoogleLogin
      render={(renderProps) => (
        <a
          className="cursor-pointer"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <Image src={google_icon} alt="google_icon" />
          Google-ээр нэвтэрнэ үү
        </a>
      )}
      onSuccess={handleGoogleSignIn}
      onFailure={(err) =>
        notifyError(err?.message || "Something wrong on your auth setup!")
      }
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleSignUp;
