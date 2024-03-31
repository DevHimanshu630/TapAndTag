import React from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("referenceId");
  return <div>This is payment success page.{reference}</div>;
};

export default Success;
