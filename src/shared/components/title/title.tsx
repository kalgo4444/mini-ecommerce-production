import { memo } from "react";

const Title = ({
  title,
  className,
}: {
  title: string | undefined;
  className?: string;
}) => {
  return (
    <h2
      className={`text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center ${className}`}
    >
      {title}
    </h2>
  );
};

export default memo(Title);
