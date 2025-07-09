export default function MealCategoryLoader() {
  const placeholderCount = 6;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 p-6">
      <div className="py-16 px-4 text-center max-w-xl mx-auto">
        {/* Heading */}
        <div className="h-12 w-64 bg-orange-100 rounded-md mx-auto mb-4 animate-pulse" />
        {/* Subheading */}
        <div className="h-6 w-96 bg-orange-100 rounded-md mx-auto mb-10 animate-pulse" />
        {/* Search bar*/}
        <div className="h-10 w-full max-w-md mx-auto rounded-xl border border-orange-100 bg-orange-50 animate-pulse" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[...Array(placeholderCount)].map((_, i) => (
          <div
            key={i}
            className="relative rounded-2xl shadow-sm overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="h-60 bg-orange-50 animate-pulse" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Text */}
            <div className="absolute bottom-0 p-5 w-full">
              <div className="h-6 w-3/4 bg-orange-100 rounded-md mb-2 animate-pulse" />
              <div className="h-4 w-full max-w-xs bg-orange-100 rounded-md animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
