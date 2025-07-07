export default function ProductSkeleton() {
  return (
    <div className="animate-pulse flex flex-col gap-2">
      <div className="bg-gray-300 rounded-md w-full aspect-square" />
      <div className="bg-gray-300 h-4 w-3/4 rounded" />
      <div className="bg-gray-300 h-4 w-1/2 rounded" />
    </div>
  );
}
