const EmployeeCard = ({
  employeeImage,
  employeeName,
  employeeId,
  department,
  designation,
  salary,
  email,
  phone,
  experience,
  status,
}) => {
  const isActive = status?.toLowerCase() === "active";

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="h-20 bg-gradient-to-r from-orange-400 to-orange-500 relative">
          <span
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${isActive ? "bg-emerald-500 text-white" : "bg-gray-500 text-white"}`}
          >
            {status}
          </span>
        </div>

        <div className="px-6 pb-4 text-center relative">
          <div className="relative -mt-10 mb-3 inline-block">
            <img
              src={employeeImage}
              alt={employeeName}
              className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md mx-auto"
            />
          </div>

          <h3 className="text-xl font-bold text-gray-800 tracking-tight">
            {employeeName}
          </h3>
          <p className="text-sm font-semibold text-orange-500">{designation}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            ID: <span className="font-mono text-gray-600">{employeeId}</span> |{" "}
            {department}
          </p>

          <hr className="border-gray-100 my-4" />

          {/* Details */}
          <div className="grid grid-cols-2 gap-2 text-left text-xs bg-slate-50 p-3 rounded-xl border border-gray-100">
            <div>
              <span className="text-gray-400 block">Experience</span>
              <span className="font-semibold text-gray-700">{experience}</span>
            </div>
            <div>
              <span className="text-gray-400 block">Salary</span>
              <span className="font-semibold text-gray-700">{salary}</span>
            </div>
            <div>
              <span className="text-gray-400 block">Phone</span>
              <span className="font-semibold text-gray-700">{phone}</span>
            </div>
            <div>
              <span className="text-gray-400 block">Department</span>
              <span className="font-semibold text-gray-700">{department}</span>
            </div>
            <div className="col-span-2 mt-1">
              <span className="text-gray-400 block">Email</span>
              <span className="font-semibold text-gray-700">{email}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
