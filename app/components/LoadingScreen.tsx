function LoadingScreen() {
  return (
    <>
      <div className="mb-6 animate-pulse">
        <div className="h-6 bg-gray-900 rounded-sm w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-900 rounded-sm w-1/2"></div>
      </div>

      <div className="space-y-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-full h-12 bg-gray-900 rounded-sm animate-pulse"
          ></div>
        ))}
      </div>
    </>
  );
}

export default LoadingScreen;
