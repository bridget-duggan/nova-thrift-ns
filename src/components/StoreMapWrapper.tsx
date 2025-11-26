"use client";

import dynamic from "next/dynamic";

const StoreMap = dynamic(() => import("./StoreMap"), {
  ssr: false,
});

export default function StoreMapWrapper({ stores }) {
  return <StoreMap stores={stores} />;
}
