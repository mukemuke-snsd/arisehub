import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Arise Hub</h1>
        <p className="text-gray-600 mb-6">Project Tracking Dashboard</p>
        <Link
          to="/executive-report"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Open Executive Report
        </Link>
      </div>
    </div>
  );
}
