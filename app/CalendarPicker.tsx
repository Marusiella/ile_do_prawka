"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { pl } from "date-fns/locale";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { convertDateToPolish } from "./math";
 
export function CalendarPicker({onSelected, dateFromLs}: {onSelected: (date: Date|undefined) => void, dateFromLs: Date|undefined}) {
  const [date, setDate] = React.useState<Date>();
  React.useEffect(() => {
    onSelected(date)
  }, [date])
  React.useEffect(() => {
    if (dateFromLs) {
      setDate(dateFromLs)
    }
  }, [dateFromLs])
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? convertDateToPolish(date) : <span>Wybierz datę</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={pl}
        />
      </PopoverContent>
    </Popover>
  )
}