export default function LoadingComponent({ text }: { text: string }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-6">
      <p>{text}</p>
      <div className="flex gap-1">
        <div
          className={`w-2 h-2 rounded-full animate-pulse text-black [animation-delay:-0.3s]`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full animate-pulse text-black [animation-delay:-0.15s]`}
        ></div>
        <div className={`w-2 h-2 rounded-full animate-pulse text-black`}></div>
      </div>
    </div>
  );
}
