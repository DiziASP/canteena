import FilterCard from "@/components/cards/FilterCard";
import CartContainer from "@/components/cart/CartContainer";
import ItemContainer from "@/components/ItemContainer";
import Landing from "@/components/Landing";
import { actionType } from "@/context/reducer";
import { useStateValue } from "@/context/StateProvider";
import { MainLayout } from "@/layouts/MainLayout";
import { getUser } from "@/utils/FirebaseAPI";
import { useEffect } from "react";

export default function Home() {
  const [{ items, user, cartShow }, dispatch] = useStateValue();

  return (
    <MainLayout
      meta={{
        title: "Welcome | Canteena",
        description: "Honest store for honest people!",
      }}
    >
      <div className="min-h-screen py-24 ">
        {/* Landing Section */}
        <Landing />

        {/* Filter card */}
        <div className="flex flex-col gap-8 justify-start p-14 items-center lg:items-start max-w-screen-xl ">
          <p className="text-2xl font-semibold">Sort By</p>
          <div className="flex flex-row gap-8">
            <FilterCard filter="A-Z" />
            <FilterCard filter="Date" />
          </div>
        </div>

        {/* Items Section */}
        <ItemContainer />

        {cartShow && <CartContainer />}
      </div>
    </MainLayout>
  );
}
