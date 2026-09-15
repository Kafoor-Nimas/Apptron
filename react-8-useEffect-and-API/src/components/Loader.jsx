const Loader = () => {
  return (
    <div className="flex flex-col items-center min-h-[400px] space-y-4">
      <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium text-lg animate-pulse">
        Loading Products...
      </p>
    </div>
  );
};

export default Loader;
