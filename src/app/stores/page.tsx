import { getStores } from "@/lib/firestore";
import StoreMapWrapper from "@/components/StoreMapWrapper";

export default async function StoresPage() {
  const stores = await getStores();

  return (
    <div>
      <h1 className="text-3xl mb-4">Stores</h1>
      <StoreMapWrapper stores={stores} />
    </div>
  );
}

