import { getSession, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (session) {
        setLoading(false);
      } else {
        signIn("github");
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard Page</h2>
    </div>
  );
}
