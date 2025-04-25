import Hero3D from "./Hero3D";

export default function SceneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <Hero3D />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
