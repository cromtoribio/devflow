import React from "react";
import NavLinks from "./navbar/NavLinks";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { auth, signOut } from "@/auth";
import SignIn from "@/app/(auth)/sign-in/page";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const LeftSideBar = async () => {
  const session = await auth();
  return (
    <section className="custom-scrollbar light-border sticky left-0 top-0 h-screen background-light900_dark200 flex flex-col justify-between  overflow-y-auto border-r p-6 px-5 pt-36 pb-8 shadow-light-300 dark:shadow-none lg:w-[266px] max-sm:hidden">
      <div>
        <NavLinks />
      </div>
      {session?.user && (
        <div className="flex flex-col gap-3">
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
          <Button
            asChild
            className="paragraph-semibold btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
          >
            <Link href={ROUTES.SIGN_IN}>
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
            </Link>
          </Button>
          <Button
            asChild
            className="paragraph-semibold light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full border px-4 py-3 shadow-none"
          >
            <Link href={ROUTES.SIGN_UP}>
              <Image
                src="/icons/sign-up.svg"
                alt="Log In"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default LeftSideBar;
