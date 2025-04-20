import React from "react";
import NavLinks from "./NavLinks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import SignIn from "@/app/(auth)/sign-in/page";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const SideBar = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col h-screen flex-1 bg-red justify-between background-light900_dark200 px-5 pb-8 max-w-[266px] max-lg:max-w-fit max-sm:hidden shadow-light-300">
      <div className="pt-10 mt-16">
        <NavLinks />
      </div>
      {session?.user && (
        <div className="flex flex-col gap-2 p-4">
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: ROUTES.SIGN_IN });
            }}
          >
            <Button
              type="submit"
              className="flex gap-4 bg-transparent shadow-none text-dark300_light900 hover:bg-transparent max-lg:p-0"
            >
              <Image
                src="/icons/logout.svg"
                alt="Logout"
                width={20}
                height={20}
                className="invert-colors"
              />
              <p className="base-medium max-lg:hidden">Logout</p>
            </Button>
          </form>
        </div>
      )}
      {!session?.user && (
        <div className="flex flex-col gap-3">
          <Link href={ROUTES.SIGN_IN}>
            <Button className="paragraph-semibold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/icons/account.svg"
                alt="Log In"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href={ROUTES.SIGN_UP}>
            <Button className="paragraph-semibold light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full border px-4 py-3 shadow-none">
              <Image
                src="/icons/sign-up.svg"
                alt="Log In"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SideBar;
