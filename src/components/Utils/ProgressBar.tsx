import classNames from "classnames";

export const ProgressBar = ({
  progress = 100,
  classColor = "bg-blue-500",
}: {
  progress: number;
  classColor?: string;
}) => {
  const cls = classNames(["py-1.5 text-center", classColor]);

  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div className={cls} style={{ width: `${progress}%` }}></div>
    </div>
  );
};
