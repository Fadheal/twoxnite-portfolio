"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function Clock() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [times, setTimes]: any = React.useState(new Date())

  const cities = [
    { name: "New York 🗽", timezone: "America/New_York" },
    { name: "Jakarta 🛺", timezone: "Asia/Jakarta" },
    { name: "Seoul 🏯", timezone: "Asia/Seoul" },
    { name: "Berlin 🥨", timezone: "Europe/Berlin" },
    { name: "Taipei 🏮", timezone: "Asia/Taipei" },
  ]

  React.useEffect(() => {
    const intervalId = setInterval(() => {
        let tmz_datetime_str = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
        setTimes(new Date(tmz_datetime_str))
    }, 1000)
    return () => {
        clearInterval(intervalId);
    };
  }, [])
  
  function formatTime() {
    
    let hours = times.getHours();
    const minutes = times.getMinutes();
    const second = times.getSeconds();
    const meridem = hours >= 12 ? "AM" : "PM";

    hours = hours % 12 || 12;

    return {hours, minutes, second, meridem};
  }

  return (
    <div>
        <span>{cities.find((cities) => cities.name === "New York 🗽")?.name}</span>
        <div className='clock text-white text-4xl text-center pr-5'>
            <span className='numberss'>{formatTime().hours}</span>
            <span className='text-2xl px-5 font-bold'>:</span>
            <span className='numberss'>{formatTime().minutes}</span>
            <span className='text-2xl px-5 font-bold'>:</span>
            <span className='numberss'>{formatTime().second}</span>
            <span className='numberss pl-5'>{formatTime().meridem}</span>
        </div>
    </div>
  )
}

export default Clock