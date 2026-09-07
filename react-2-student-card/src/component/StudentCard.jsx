const StudentCard = ({student}) => {
  

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="h-24 bg-gradient-to-r from-orange-400 to-orange-500"></div>

        {/* Profile details */}
        <div className="relative px-6 pb-6 text-center">
          {/* image */}
          <div className="relative -mt-12 mb-4 inline-block">
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md mx-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            {student.name}
          </h2>
          <p className="text-sm font-medium text-orange-500 mb-1">
            {student.course} Student
          </p>
          <p className="text-xs text-gray-500 mb-4">{student.college}</p>

          <hr className="border-gray-100 my-4" />

          <div className="grid grid-cols-2 gap-2 text-left text-sm mb-4 bg-slate-50 p-3 rounded-xl border border-gray-100">
            <div>
              <span className="text-xs text-gray-400 block">Age</span>
              <span className="font-semibold text-gray-700">{student.age}</span>
            </div>
            <div>
              <span className="text-xs text-gray-400 block">Phone</span>
              <span className="font-semibold text-gray-700">
                {student.phone}
              </span>
            </div>
            <div className="col-span-2 mt-1">
              <span className="text-xs text-gray-400 block">Email</span>
              <span className="font-semibold text-gray-700 break-all">
                {student.email}
              </span>
            </div>
          </div>

          {/* Skills */}
          <div className="text-left">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {student.skills.map((skill, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-xs font-semibold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
