import { Link } from "react-router-dom";

export default function ExecutiveReport() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Executive Report</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
        <p className="text-gray-600">
          Executive Report page restored. Ready to rebuild pillar functionality.
        </p>
      </div>
    </div>
  );
}
