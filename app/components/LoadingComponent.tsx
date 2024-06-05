export default function LoadingComponent({ text }: { text: string }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-6">
      <p className="text-center text-xl">{text}</p>
    </div>
  );
}
