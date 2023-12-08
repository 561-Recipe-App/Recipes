import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error() {

  return (
    <>
      <div className="flex flex-col items-center  justify-center h-screen">
        <div className="text-9xl font-bold">404</div>
        <div className="text-2xl my-2.5">Oops! Page not found.</div>
        <Link href={"/"}>
          <Button>
            Home
          </Button>
        </Link>
      </div>
    </>
  );
}
