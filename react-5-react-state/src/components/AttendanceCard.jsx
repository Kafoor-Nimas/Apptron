import { useState } from "react";

const AttendanceCard = ({
  studentImage,
  studentName,
  studentId,
  course,
  initialPresent = 0,
  initialAbsent = 0,
}) => {
  const [presentDays, setPresentDays] = useState(initialPresent);
  const [absentDays, setAbsentDays] = useState(initialAbsent);
  const [status, setStatus] = useState("Not Marked");

  const handleMarkPresent = () => {
    if (status !== "Present") {
      if (status === "Absent") setAbsentDays((prev) => Math.max(0, prev - 1));
      setPresentDays((prev) => prev + 1);
      setStatus("Present");
    }
  };

  const handleMarkAbsent = () => {
    if (status !== "Absent") {
      if (status === "Present") setPresentDays((prev) => Math.max(0, prev - 1));
      setAbsentDays((prev) => prev + 1);
      setStatus("Absent");
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col justify-between space-y-4">
      <div className="flex items-center gap-4">
        <img
          src={studentImage}
          alt={studentName}
          className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 shadow-sm"
        />

        <div>
          <h3 className="text-lg font-bold text-gray-800">{studentName}</h3>
          <p className="text-xs text-orange-500 font-medium">{course}</p>
          <span className="text-xs text-gray-400 font-mono">
            ID: {studentId}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-gray-100">
        <span className="text-xs text-gray-500 font-medium">
          Today's Status
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${status === "Present" ? "bg-emerald-100 text-emerald-700" : status === "Absent" ? "bg-rose-100 text-rose-700" : "bg-gray-200 text-gray-700"}`}
        >
          {status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl">
          <span className="block text-2xl font-bold text-emerald-600">
            {presentDays}
          </span>
          <span className="text-xs font-medium text-emerald-700">
            Present Days
          </span>
        </div>
        <div className="bg-rose-50/50 border border-rose-100 p-3 rounded-xl">
          <span className="block text-2xl font-bold text-rose-600">
            {absentDays}
          </span>
          <span className="text-xs font-medium text-rose-700">Absent Days</span>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button
          onClick={handleMarkPresent}
          className="flex-1 py-2 px-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl text-xs shadow-sm transition-all cursor-pointer"
        >
          Mark Present
        </button>
        <button
          onClick={handleMarkAbsent}
          className="flex-1 py-2 px-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl text-xs shadow-md transition-all cursor-pointer"
        >
          Mark Absent
        </button>
      </div>
    </div>
  );
};

export default AttendanceCard;
