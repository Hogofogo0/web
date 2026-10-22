import Image from "next/image";
import Logo from "./components/logo";
import Buttons from "./components/home_buttons";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen justify-center gap-25">
      <Logo /> <Buttons />
    </div>
  );
}
