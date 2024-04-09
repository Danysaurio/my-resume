export const ProgressBar = ({
  progress = 100,
}: {
  progress: number;
}): JSX.Element => {
  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="bg-blue-500 py-1.5 text-center"
        style={{ width: `${progress}%`}}
      ></div>
    </div>
  );
};
