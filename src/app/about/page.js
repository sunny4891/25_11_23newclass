import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        {" "}
        <Link href="/">Home</Link>
      </div>{" "}
      <div>Hi I am About page</div>
    </>
  );
}
