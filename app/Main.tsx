"use client";
import React, { useEffect } from "react";
import { CalendarPicker } from "./CalendarPicker";
import { sprawdzPrawoJazdy } from "./math";
import { Label } from "@/components/ui/label";

export default function Main() {
  const [date, setDate] = React.useState<Date>();
  useEffect(() => {
      if (window.localStorage) {
        const d = window.localStorage.getItem("dataUrodzenia");
        if (d) {
          setDate(new Date(d));
        }
      }
  },[]);
  const [msg, setMsg] = React.useState<{
    egzaminInfo: string;
    kursInfo: string;
  }>({ egzaminInfo: "", kursInfo: "" });
  useEffect(() => {
    if (date) setMsg(sprawdzPrawoJazdy(date));
  }, [date]);

  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <Label htmlFor="calendar">Wybierz datę swoich 18 urodzin:</Label>
      <div id="calendar">
        <CalendarPicker onSelected={(e) => setDate(e)} dateFromLs={date} />
      </div>
      {msg.egzaminInfo && (
        <>
          <h2 className="mb-12 font-bold text-xl md:text-4xl">
            Do 18: {msg.egzaminInfo}
          </h2>
          <h2 className="mb-12 font-bold text-xl md:text-4xl">
            Do kursu: {msg.kursInfo}
          </h2>
        </>
      )}
    </div>
  );
}
