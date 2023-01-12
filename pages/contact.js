import React from "react";

export default function Contact({ title }) {
  return (
    <div>
      {title}
      {process.env.NEXT_PUBLIC_USER_NAME}
    </div>
  );
}

export function getStaticProps(context) {
  console.log("previewData", context.previewData);
  console.log(process.env.BB_PASS);
  return {
    props: {
      title: context.previewData ? "Contact with preview data" : "Contact",
    },
  };
}
