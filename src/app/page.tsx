import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Nova Thrift NS</h1>
      <p>Explore thrift stores across Nova Scotia supporting causes you care about.</p>
      <Link href="/stores" className="text-blue-500 underline mt-4 block">View Stores</Link>
    </main>
  );
}

