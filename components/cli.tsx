"use client"
import React, { useState, useRef, useEffect } from 'react'
import "./cli.css"
import { getQuotes } from '@/app/api/api';

function Cli() {
  const [value, setValue] = useState("");
  const [output, setOutput]: any = useState("");
  const [messages, setMessages] = useState([]);
  const [quotes, setQuotes] = useState<quotesJsonData[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  interface quotesJsonData {
      quote: string;
      author: string;
  }

  //quotes api
  useEffect(() => {
    getQuotes().then((result) => {
        setQuotes(result)
    })
  }, [output])

//user input handle
  function handleChange(e: any) {
        setValue(e.target.value);
  }

  //help format
  const help = (
    <>
        <span>Supported commands: [</span>
        <span>"<span className='text-purple-500'>about</span>", </span>
        <span>"<span className='text-purple-500'>link</span>", </span>
        <span>"<span className='text-purple-500'>time</span>", </span>
        <span>"<span className='text-purple-500'>quotes</span>"</span>
        <span>]</span>
    </>
  )
  //autobottom scrolling
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView();
  }, [messages])

  //enter button handler
  function keyDownHandler(e: any) {
    if (e.key === "Enter") {
        var newOutput = (<></>);
        function Opt() {
            switch (value) {
            case "help":
                return (<span><br />
                    {help}
                </span>)
            case "about":
                return (
                    <span><br/>
                        Hii👋<br/>
                        My name is <span className='text-purple-500'>Fadhil</span>. I'm 15 yr old fullstack developer (wanna be) currently living in the Indonesia. I have another passion in cinematography, I'd like to express my emotions with making story. I have dream to make an open source project for developer, I think that will help a lot of developers out there. I like learning something new, I even tried to tinker with my home server to learn about devops stuff. This is <span className='text-purple-500'>Fadhil</span>, I hope i can be a <span className='text-green-500'>usefull</span> person someday.
                    </span>
                )
            case "link":
                return (
                    <div>
                    <span className='monospace-font text-purple-500'>Socials ↴</span>
                    <a href="https://www.instagram.com/thelast2x/" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='monospace-font text-lg hover:text-xl transition-transform'>Instagram</span></a>
                    <a href="https://discordapp.com/users/1165278119414993016" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='monospace-font text-lg hover:text-xl transition-transform'>Discord</span></a>
                    <a href="https://github.com/Fadheal" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='monospace-font text-lg hover:text-xl transition-transform'>Github</span></a>
                    <a href="https://www.tiktok.com/@fadhealllll?lang=en" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='monospace-font text-lg hover:text-xl transition-transform'>Tiktok</span></a>
                    </div>
                )
            case "time":
                const dates = new Date()
                return (<div><span>{dates.toTimeString()}</span></div>)
            case "quotes":
                return quotes.map((quotes, i) => {
                    return(
                        <div key={i}>
                            <span className='text-green-300'>{quotes.quote}</span><br/>
                            <span className='text-blue-300'>{quotes.author}</span>
                        </div>
                    )
                })
            case "clear":
                setOutput(<div></div>)
                return <div></div>
            default:
                return (<span><br />
                    command not found: <span className='text-red-500'>{value}</span>
                </span>)
            }
        }
        newOutput = (<>
            {output}
            <span className='text-green-400 pr-2'>➜</span>
            <span className='text-blue-300 pr-2'>~</span>
            <span className='text-purple-300'>{value.toLowerCase()}</span>
            <Opt />
            <br />
            <br />
        </>)
        setOutput(newOutput)
        setValue("")
        terminalEndRef.current?.scrollIntoView();
    }
  }

  //html object output
  return (
    <>
    <div className='terminal h-full overflow-y-scroll' suppressHydrationWarning>
        <div className="terminal-output" id="terminalOutput">
            <div className="terminal-line">
                <span className="help-msg"
                >Welcome to my portfolio! — Type <span className="text-purple-500">help</span> for a list of supported commands.</span>
                </div>
                {output}
            </div>
            <br />
        <div className='terminal-line'>
            <span className='text-green-400 pr-2'>➜</span>
            <span className='text-blue-300 pr-2'>~</span>
            <span className='user-input' id='userInput'>{value.toLowerCase()}</span>
            <input
                type='text'
                id='dummyKeyboard'
                className='dummy-keyboard'
                autoComplete='off'
                value={value}
                onChange={handleChange}
                onKeyDown={keyDownHandler}
                />
        </div>
        <div ref={terminalEndRef} />
    </div>
    </>
  )
}

export default Cli