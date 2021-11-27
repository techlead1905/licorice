import Image from "next/image";

export default function Nav() {
  return (
    <div>
      <header className="flex justify-between items-center h-[50px] bg-black px-5">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="LICORICE" width={32} height={24} />
          <p className="pl-4 text-white text-xs font-extrabold">LICORICE</p>
        </div>

        <input placeholder="Search all Challenges" className="w-[450px] rounded-sm bg-[#4e4e4e] py-1 px-4" />

        <div className="w-6 h-6 rounded-full bg-[#C4C4C4] border border-white" />
      </header>
    </div>
  );
}
