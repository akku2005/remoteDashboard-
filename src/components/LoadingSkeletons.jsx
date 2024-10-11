import Skeleton from "react-loading-skeleton";

export const TextCardSkeleton = () => {
  return (
    <div className="bg-white border border-border/15 p-4 rounded-lg flex flex-row items-center justify-between">
      <div>
        <Skeleton height={25} width={120} />
        <Skeleton height={35} width={100} />
      </div>
      <Skeleton height={50} width={50} />
    </div>
  );
};
