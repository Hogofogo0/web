import { zilla } from "@/app/assets/fonts";

export default function Buttons() {
  return (
    <div className="flex flex-col gap-10 ">
      <div
        className={`${zilla.className} hover:bg-black hover:text-white transition duration-350 border-4 border-black w-70 h-27.5 text-[48px] flex items-center justify-center`}
      >
        <p>Přihlásit se</p>
      </div>
      <div
        className={`${zilla.className} hover:bg-black hover:text-white transition duration-350 border-4 border-black w-70 h-27.5 text-[48px] flex items-center justify-center`}
      >
        <p>Prohlížet</p>
      </div>
    </div>
  );
}
