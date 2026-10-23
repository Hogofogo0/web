import { zilla } from "@/app/assets/fonts";
import Link from "next/link";

export default function Buttons() {
  return (
    <div className="flex flex-col gap-10 text-black">
      <Link href="/dashboard/profile">
        <div
          className={`${zilla.className} hover:bg-black hover:text-white active:bg-black active:text-white active:duration-0 transition duration-350 border-4 border-black w-70 h-27.5 text-[48px] flex items-center justify-center`}
        >
          <p>Přihlásit se</p>
        </div>
      </Link>
      <Link href="/dashboard/profile">
        <div
          className={`${zilla.className} hover:bg-black hover:text-white active:bg-black active:text-white active:duration-0 transition duration-350 border-4 border-black w-70 h-27.5 text-[48px] flex items-center justify-center`}
        >
          <p>Prohlížet</p>
        </div>
      </Link>
    </div>
  );
}
