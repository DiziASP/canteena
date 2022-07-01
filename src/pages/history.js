import HistoryCard from "@/components/cards/HistoryContainer";
import { MainLayout } from "@/layouts/MainLayout";
import { useStateValue } from "@/context/StateProvider";
import { useEffect, useState } from "react";

export default function History() {
  const [{ user }, dispatch] = useStateValue();
  const [history, setHistory] = useState();

  return (
    <MainLayout
      meta={{
        title: "Add Item | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <div className="flex min-h-screen py-24 px-8  w-full max-w-screen-lg flex-col ">
        <h1 className="font-bold text-3xl mb-2 text-center lg:text-start">
          Order History
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Check your recent order history
        </p>
        <div className="flex flex-col gap-8">
          {/* History Card */}
          <HistoryCard />
        </div>
      </div>
    </MainLayout>
  );
}
