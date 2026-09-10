import AttendanceCard from "../components/AttendanceCard";

const AttendanceDashboard = () => {
  const students = [
    {
      studentId: "STU001",
      studentName: "Kamal Hassan",
      course: "Fullstack Web Development",
      initialPresent: 18,
      initialAbsent: 2,
      studentImage:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&auto=format&fit=crop",
    },
    {
      studentId: "STU002",
      studentName: "Ananya Sharma",
      course: "UI/UX Design Masterclass",
      initialPresent: 20,
      initialAbsent: 0,
      studentImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    },
    {
      studentId: "STU003",
      studentName: "Vijay Kumar",
      course: "React & Next.js Bootcamp",
      initialPresent: 15,
      initialAbsent: 5,
      studentImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    },
    {
      studentId: "STU004",
      studentName: "Priya Rajan",
      course: "Python Data Science",
      initialPresent: 19,
      initialAbsent: 1,
      studentImage:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    },
    {
      studentId: "STU005",
      studentName: "Rohan Verma",
      course: "Cloud Computing & DevOps",
      initialPresent: 12,
      initialAbsent: 8,
      studentImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold  text-gray-900 tracking-tight">
            Student Attendance{" "}
            <span className="text-orange-500">Dashboard</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Track daily attendance and total present/absent records of students
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {students.map((student) => (
            <AttendanceCard key={student.studentId} {...student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
