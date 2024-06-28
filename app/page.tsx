import Image from "next/image";
import { CalendarPicker } from "./CalendarPicker";
import Main from "./Main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Main />
      <div
      className="text-center text-sm text-gray-500"
      >Nie biorę odpowiedzialności za błędy w obliczeniach. Wszelkie dane są przybliżone.</div>
    </main>
  );
}
