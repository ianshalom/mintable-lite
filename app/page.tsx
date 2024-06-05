import { getNftData } from "./api";

export default async function Home() {
  const data = await getNftData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Mintable Lite</h1>
    </main>
  );
}
