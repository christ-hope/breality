import { CardSpotlight } from "./CardSpotlight";

export function Card({
  element,
}: {
  element: {
    id: number;
    icon?: React.ReactNode;
    title: string;
    description: string;
  };
}) {
  return (
    <CardSpotlight className="h-full w-96">
      <p
        className="text-5xl sm:text-7xl font-black text-transparent text-center relative z-20 mt-2"
        style={{ WebkitTextStroke: 1.5, WebkitTextStrokeColor: "blueviolet" }}
      >
        {element.id + 1}
      </p>
      <div className="text-xl font-bold text-center text-neutral-200 mt-4 relative z-20">
        {element.title}
      </div>
      <p className="text-gray-400 mt-4 relative z-20 text-sm text-center">
        {element.description}
      </p>
    </CardSpotlight>
  );
}
