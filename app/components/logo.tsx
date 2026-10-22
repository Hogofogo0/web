import { zilla } from "@/app/assets/fonts";

export default function Logo() {
  return (
    <div className="flex flex-col w-65 h-38.5 md:w-130 md:h-77">
      <div
        className={`${zilla.className} w-65 h-19.25 border-b-black border-b  text-[64px] leading-none md:w-130 md:h-38.5 md:text-[96px] flex items-center`}
      >
        <p>Burza</p>
      </div>
      <div
        className={`${zilla.className} w-65 h-19.25 border-t-black border-t  text-right text-[64px] leading-none md:w-130 md:h-38.5 md:text-[96px] flex items-center`}
      >
        <p className="w-65 md:w-130">Gymik</p>
      </div>
    </div>
  );
}
