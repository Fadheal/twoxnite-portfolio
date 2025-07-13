import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Cli from './cli'
import myEmoji from '@/public/myEmoji.png'
import Image from 'next/image'
import Clock from './clock'
import { Instagram } from 'lucide-react'

function Grids() {

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-7xl min-w-[450px]"
    >
      <ResizablePanel defaultSize={40} className='p-2 md:visible invisible'>
        <div className="rounded-lg border h-[650px] p-5">
          <Cli />
        </div>
      </ResizablePanel>
      <ResizableHandle className='bg-gradient-to-b from-muted/0 via-muted/70 to-muted/0 md:visible invisible' />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25} className='p-2'>
            <div className="flex rounded-lg border h-full items-center justify-between p-6 overflow-clip">
              <div>
                <h1 className='font-semibold text-lg'>Hello👋! My name is <span className='text-purple-500'>Fadhil</span>. I'm part time fullstack developer on <span className='text-muted-foreground'>twoxnite</span>.</h1>
              </div>
              <Image src={myEmoji} width={200} height={200} alt='My Emoji Face' />
            </div>
          </ResizablePanel>
          <ResizableHandle className='bg-gradient-to-r from-muted/0 via-muted/70 to-muted/0' />
          <ResizablePanel defaultSize={75}>
            <ResizablePanelGroup direction='horizontal'>
              <ResizablePanel defaultSize={50}>
                  <ResizablePanelGroup direction='vertical'>
                    <ResizablePanel defaultSize={30} className='p-2'>
                      <div className="flex rounded-lg border h-full items-center justify-center p-7">
                        <Clock/>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle className='bg-gradient-to-r from-muted/0 via-muted/70 to-muted/0' />
                    <ResizablePanel defaultSize={70} className='p-2'>
                      <div className="flex rounded-lg border h-full p-6 overflow-clip">
                        <span className='monospace-font'>Copyright © 2025 <span className='text-purple-500'>Fadhil Nugroho</span>. All rights reserved. Hand-crafted with love, coffee, and questionable life choices. ☕✨</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle className='bg-gradient-to-b from-muted/0 via-muted/70 to-muted/0' />
              <ResizablePanel defaultSize={50} className='p-2'>
                <div className="rounded-lg border h-full p-6 overflow-clip">
                  <h1 className='monospace-font text-xl'>Let's start <span className='text-green-500'>working</span> together</h1>
                  <h2 className='font-medium text-lg text-muted-foreground/55 pt-2'>Contact Details</h2>
                  <span className='font-normal text-md text-muted-foreground'>fadheeal@gmail.com</span>
                  <br />
                  <span className='monospace-font text-md text-muted-foreground'>🇮🇩 Indonesia</span>
                  <div className='pt-5'>
                    <span className='font-medium text-muted-foreground/70 text-xl'>Socials</span>
                    <a href="https://www.instagram.com/thelast2x/" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='font-medium text-lg hover:text-xl transition-transform'>Instagram</span></a>
                    <a href="https://discordapp.com/users/1165278119414993016" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='font-medium text-lg hover:text-xl transition-transform'>Discord</span></a>
                    <a href="https://github.com/Fadheal" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='font-medium text-lg hover:text-xl transition-transform'>Github</span></a>
                    <a href="https://www.tiktok.com/@fadhealllll?lang=en" target="_blank" className='flex items-center text-muted hover:text-muted-foreground transition-colors'><span className='font-medium text-lg hover:text-xl transition-transform'>Tiktok</span></a>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    
  )
}

export default Grids