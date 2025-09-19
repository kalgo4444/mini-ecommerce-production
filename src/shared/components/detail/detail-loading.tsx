import { memo } from "react";

const DetailLoading = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="w-full md:w-2/5 p-0 md:p-5">
        <div>
          <div className="max-w-[350px] w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden object-cover block mx-auto bg-neutral-300 animate-pulse"></div>
        </div>
      </div>
      <div className="w-full md:w-3/5 p-1 md:p-3">
        <div className="flex space-x-2 my-1 md:my-4">
          <div className="w-5/6 h-14 bg-neutral-300 animate-pulse rounded-2xl"></div>
        </div>
        <div className="space-y-5 py-5">
          <div className="w-2/4 h-12 bg-neutral-300 animate-pulse rounded-2xl"></div>
          <div className="w-3/4 h-14 bg-neutral-300 animate-pulse rounded-2xl"></div>
          <div className="w-1/4 h-12 bg-neutral-300 animate-pulse rounded-2xl"></div>
          <div className="w-1/3 h-12 bg-neutral-300 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailLoading);
