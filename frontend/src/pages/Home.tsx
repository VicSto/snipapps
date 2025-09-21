import type { FC } from "react";
import Navbar from "@/components/common/Navbar";

export const Home: FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to SnipApps
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          Explore modular tools built with FastAPI, SQLAlchemy, and React — all
          served from a single backend.
        </p>
      </main>
    </>
  );
};
