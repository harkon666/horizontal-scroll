import RoadmapLine from "@/app/components/RoadmapLine";

export default function Page() {
  return (
    <main className="bg-[#040F15] text-white h-150">
      <div className="fixed inset-0 bg-gradient-radial from-blue-900 via-blue-800 to-black opacity-70 blur-3xl" />
      <section className="flex items-center justify-center sticky top-0 z-10">
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl text-gray-500 font-semibold mt-24">RPN STUDENT</div>
          <div className="text-4xl font-semibold mt-4">ROADMAP</div>
        </div>
      </section>
      <RoadmapLine />
    </main>
  );
}
