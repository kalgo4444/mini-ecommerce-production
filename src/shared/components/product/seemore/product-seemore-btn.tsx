import { Dispatch, memo, SetStateAction, useState } from "react";

interface IProps {
  limit: number | undefined;
  total: number;
  setLimit: Dispatch<SetStateAction<number>> | undefined;
}

const ProductSeemoreBtn = (props: IProps) => {
  const { limit, setLimit, total } = props;
  const handleMoreClick = (): void => {
    if (setLimit && limit) {
      setLimit(limit + 8);
    }
  };
  return (
    <>
      {limit && limit >= total ? (
        <></>
      ) : (
        <button
          onClick={handleMoreClick}
          className="flex justify-center btn px-4 py-2"
        >See More</button>
      )}
    </>
  );
};

export default memo(ProductSeemoreBtn);
