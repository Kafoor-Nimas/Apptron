import { useState } from "react";

const StudentForm = ({ onRegisterSuccess }) => {
  const [formData, setFormaData] = useState({
    image: "",
    fullName: "",
    studentId: "",
    email: "",
    phoneNumber: "",
    course: "",
    age: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Minimum 3 characters required";
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Phone Number must be exactly 10 digits";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    const ageNum = Number(formData.age);
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(ageNum) || ageNum < 18 || ageNum > 35) {
      newErrors.age = "Age must be between 18 and 35";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Minimum 8 characters required";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormaData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onRegisterSuccess(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-100 space-y-4 max-w-xl w-full"
    >
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
        Student Registration Form
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Kafoor Nimas"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.fullName
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>
        {/* Student ID */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Student ID *
          </label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="STU1024"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.studentId
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.studentId && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.studentId}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.email
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Phone Number (10 digits) *
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="0771234567"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.phoneNumber
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        {/* Course Dropdown */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Course *
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none bg-white ${
              errors.course
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          >
            <option value="">Select Course</option>
            <option value="React & Next.js Bootcamp">
              React & Next.js Bootcamp
            </option>
            <option value="Fullstack Web Development">
              Fullstack Web Development
            </option>
            <option value="UI/UX Masterclass">UI/UX Masterclass</option>
          </select>
          {errors.course && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.course}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Age (18 - 35) *
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="22"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.age
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.age && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.age}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Gender *
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none bg-white ${
              errors.gender
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.gender}
            </p>
          )}
        </div>

        {/* Student Image URL */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Image URL (Optional)
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Address */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Address
          </label>
          <textarea
            name="address"
            rows="2"
            value={formData.address}
            onChange={handleChange}
            placeholder="City, Street address..."
            className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Password *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.password
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.password && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.password}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Confirm Password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className={`w-full px-3 py-2 border rounded-xl text-sm focus:outline-none ${
              errors.confirmPassword
                ? "border-rose-500 focus:ring-1 focus:ring-rose-500"
                : "border-gray-200 focus:ring-2 focus:ring-orange-500"
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-rose-500 mt-1 font-medium">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all cursor-pointer shadow-sm"
      >
        Register Student
      </button>
    </form>
  );
};

export default StudentForm;
