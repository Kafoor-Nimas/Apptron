import StudentCard from "./component/StudentCard";

const App = () => {
  const students = [
    {
      id: 1,
      name: "John David",
      age: 22,
      course: "React JS",
      email: "john@example.com",
      phone: "0771234567",
      college: "ABC Institute",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Miller",
      age: 21,
      course: "Node.js & Express",
      email: "sarah@example.com",
      phone: "0779876543",
      college: "XYZ University",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Alex Turner",
      age: 26,
      course: "Next.js Fullstack",
      email: "alex@example.com",
      phone: "0755551234",
      college: "Global Tech Campus",
      skills: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    },
  ];
  return (
    <div min-h-screen bg-slate-100 p-8>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Student Folder
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default App;
