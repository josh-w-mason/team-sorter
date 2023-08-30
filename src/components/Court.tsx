import { Generate } from "./Generate";

export function Court() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-64 w-64 bg-gray-300">
        <p className="absolute left-0 top-0 m-4">Player 1</p>
        <p className="absolute right-0 top-0 m-4">Player 2</p>
        <p className="absolute bottom-0 left-0 m-4">Player 3</p>
        <p className="absolute bottom-0 right-0 m-4">Player 4</p>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          Court 1
        </p>
      </div>
      <div></div>
    </div>
  );
}
