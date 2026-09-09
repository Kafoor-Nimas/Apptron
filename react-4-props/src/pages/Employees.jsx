import EmployeeCard from "../components/EmployeeCard";

const Employees = () => {
  
  const employeeList = [
    {
      employeeId: "EMP001",
      employeeName: "John David",
      department: "IT",
      designation: "Frontend Developer",
      salary: "150000",
      email: "john@gmail.com",
      phone: "0771234567",
      experience: "3 Years",
      status: "Active",
      employeeImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP002",
      employeeName: "Sarah Miller",
      department: "Engineering",
      designation: "Backend Developer",
      salary: "180000",
      email: "sarah@gmail.com",
      phone: "0779876543",
      experience: "4 Years",
      status: "Active",
      employeeImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP003",
      employeeName: "Alex Turner",
      department: "UI/UX Design",
      designation: "Product Designer",
      salary: "140000",
      email: "alex@gmail.com",
      phone: "0755551234",
      experience: "2 Years",
      status: "Active",
      employeeImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP004",
      employeeName: "Emily Watson",
      department: "Marketing",
      designation: "SEO Specialist",
      salary: "120000",
      email: "emily@gmail.com",
      phone: "0711122334",
      experience: "3 Years",
      status: "Inactive",
      employeeImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP005",
      employeeName: "Michael Chen",
      department: "IT",
      designation: "DevOps Engineer",
      salary: "210000",
      email: "michael@gmail.com",
      phone: "0769988776",
      experience: "5 Years",
      status: "Active",
      employeeImage:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP006",
      employeeName: "Rachel Green",
      department: "HR",
      designation: "HR Manager",
      salary: "160000",
      email: "rachel@gmail.com",
      phone: "0723344556",
      experience: "6 Years",
      status: "Active",
      employeeImage:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP007",
      employeeName: "David Warner",
      department: "QA",
      designation: "Automation Tester",
      salary: "135000",
      email: "david@gmail.com",
      phone: "0788877665",
      experience: "2.5 Years",
      status: "Inactive",
      employeeImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
    },
    {
      employeeId: "EMP008",
      employeeName: "Sophia Adams",
      department: "Engineering",
      designation: "Fullstack Developer",
      salary: "195000",
      email: "sophia@gmail.com",
      phone: "0744433221",
      experience: "4.5 Years",
      status: "Active",
      employeeImage:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Employee <span className="text-orange-500">List</span>{" "}
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Managing company team members, roles, and status
          </p>
        </div>
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {employeeList.map((employee) => (
            <EmployeeCard
              key={employee.employeeId}
              employeeImage={employee.employeeImage}
              employeeName={employee.employeeName}
              employeeId={employee.employeeId}
              department={employee.department}
              designation={employee.designation}
              salary={employee.salary}
              email={employee.email}
              phone={employee.phone}
              experience={employee.experience}
              status={employee.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
