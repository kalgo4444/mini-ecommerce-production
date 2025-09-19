import React from "react";

export default function ProductLoading() {
  return (
    <>
      {Array.from({ length: 8 })
        .fill("")
        .map((product: any, inx: number) => (
          <div key={inx} className="h-[424px]">
            <div className="h-[300px] rounded-2xl bg-neutral-300 animate-pulse"></div>
            <div className="mt-4 space-y-2">
              <div className="w-full h-6 rounded-2xl bg-neutral-300 animate-pulse"></div>
              <div className="w-3/4 h-6 rounded-2xl bg-neutral-300 animate-pulse"></div>
              <div className="w-2/4 h-6 rounded-2xl bg-neutral-300 animate-pulse"></div>
            </div>
          </div>
        ))}
    </>
  );
}
