import { getSession } from "next-auth/react";
import React from "react";

export default function About({ data }) {
  return <div>About Page {data}</div>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session);
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/about",
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: "List of 100 items",
    },
  };
}
