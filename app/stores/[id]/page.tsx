import { getStore } from "@/lib/firestore";
import { Store } from "@/types/store";

interface Props {
  params: { id: string };
}

export default async function StorePage({ params }: Props) {
  const store: Store | null = await getStore(params.id);

  if (!store) return <p>Store not found</p>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{store.name}</h1>
      <p>{store.type}</p>
      <p>{store.address}</p>
      {store.website && <a href={store.website} target="_blank" rel="noreferrer">Website</a>}
    </div>
  );
}
