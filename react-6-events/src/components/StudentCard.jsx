const StudentCard = ({ studentData }) => {
  if (!studentData) return null;

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300">
      <div className="h-24 bg-gradient-to-r from-orange-400 to-orange-500 relative">
        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
          {studentData.gender}
        </span>
      </div>

      <div className="px-6 pb-6 text-center relative">
        <div className="relative -mt-12 mb-3 inline-block">
          <img
            src={
              studentData.image ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
            }
            alt={studentData.fullName}
            className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md mx-auto"
          />
        </div>

        <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
          {studentData.fullName}
        </h3>
        <p className="text-sm font-semibold text-orange-500">
          {studentData.course}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          ID:{" "}
          <span className="font-mono text-gray-600">
            {studentData.studentId}
          </span>{" "}
          | Age: {studentData.age}
        </p>

        <hr className="border-gray-100 my-4" />

        <div className="grid grid-cols-2 gap-3 text-left text-xs bg-slate-50 p-4 rounded-xl border border-gray-100">
          <div>
            <span className="text-gray-400 block font-medium">Email</span>
            <span className="font-semibold text-gray-700 break-all">
              {studentData.email}
            </span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">Phone</span>
            <span className="font-semibold text-gray-700">
              {studentData.phoneNumber}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-400 block font-medium">Address</span>
            <span className="font-semibold text-gray-700">
              {studentData.address || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
