import { ReactNode } from "react";

export const MaxWidthWrapper = ({
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-2xl sm:px-10 px-5">
      {children}
    </div>
  );
};
