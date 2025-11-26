import { getStores } from "@/lib/firestore";
import { Store } from "@/types/store";
import StoreMap from "@/components/StoreMap";

export default async function StoresPage() {
  const stores: Store[] = await getStores();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Thrift Stores</h1>
      <StoreMap stores={stores} />
      {/* Later: Add list view / filters */}
    </div>
  );
}
