export default function MealLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6 font-poppins">
      <div className="flex items-center gap-6 mb-10 w-full max-w-7xl px-4">
        <div className="rounded-full bg-orange-200/40 animate-pulse w-24 h-24 border-4 border-orange-300 shadow-[0_0_10px_rgba(251,146,60,0.3)]" />
        <div className="h-12 bg-orange-200/40 animate-pulse rounded-md flex-1 max-w-xs" />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full animate-pulse space-y-6">
        <div className="h-56 bg-orange-200/40 rounded-md" />
        <div className="grid grid-cols-2 gap-6">
          <div className="h-32 bg-orange-200/40 rounded-md" />
          <div className="h-32 bg-orange-200/40 rounded-md" />
        </div>
        <div className="h-48 bg-orange-200/40 rounded-md" />
      </div>
    </div>
  );
}
