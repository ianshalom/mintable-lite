import NFTCardsDisplay from "@/app/components/NFTCardsDisplay";

export default async function IngredientPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-24">
      <NFTCardsDisplay slug={params.slug} />
    </main>
  );
}
