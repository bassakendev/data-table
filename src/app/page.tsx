import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <main className="text-center max-w-2xl p-6">
        {/* Title*/}
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
          ⭐️Hey! Welcome to platform ⭐️
        </h1>

        {/* description */}
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          An intuitive interface to view users. Explore the
          user list with ease
        </p>

        {/* list button */}
        <Link href="/data-table">
          <div className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            View user list
          </div>
        </Link>
      </main>
    </div>
  );
}
