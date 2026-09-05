import {
  FaArrowLeft,
  FaCog,
  FaFileMedical,
  FaUserCircle,
} from "react-icons/fa";

export default function Placeholder({
  title,
  description,
}) {
  const getIcon = () => {
    if (title === "Messages") {
      return <FaUserCircle />;
    }

    if (title === "Health Records") {
      return <FaFileMedical />;
    }

    if (title === "Profile") {
      return <FaCog />;
    }

    return <FaUserCircle />;
  };

  return (
    <div className="grid min-h-[60vh] place-items-center">

      <div className="card w-full max-w-lg p-8 text-center">

        <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-600">
          {getIcon()}
        </div>

        <h1 className="mt-5 text-2xl font-extrabold text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">

          <p className="text-sm font-medium text-slate-600">
            This feature is coming soon.
          </p>

          <p className="mt-1 text-xs text-slate-400">
            This section is ready for your backend/API integration.
          </p>

        </div>

      </div>

    </div>
  );
}