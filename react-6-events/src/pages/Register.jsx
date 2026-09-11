import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentCard from "../components/StudentCard";

const Register = () => {
  const [registeredStudent, setRegisteredStudent] = useState(null);

  const handleRegisterSuccess = (studentData) => {
    setRegisteredStudent(studentData);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Student <span className="text-orange-500">Registration</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Fill in the details below to complete your registration
          </p>
        </div>

        {/* Layout: Form + Generated Card */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          <StudentForm onRegisterSuccess={handleRegisterSuccess} />
          
          {registeredStudent && (
            <div className="w-full lg:w-auto flex flex-col items-center space-y-3">
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                Registered Student Profile Generated
              </span>
              <StudentCard studentData={registeredStudent} />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Register;