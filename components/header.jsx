"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  const pathname = usePathname()
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up'

  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between relative'>

        {/* Logo */}
        <Link href='/' className="inline-flex items-center font-bold cursor-pointer select-none">
          <Image 
          src={"/finseek.png"}
          alt="FinSeek logo"
          height={60}
          width={200}
          className='h-6 w-auto object-contain'
          />
        </Link>

        {/* Centered Links (hidden on auth pages) */}
        {!isAuthPage && (
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <SignedOut>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#howItWorks" className="text-gray-600 hover:text-blue-600">
                How It Works
              </a>
            </SignedOut>
          </div>
        )}

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="flex items-center gap-2">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="flex items-center gap-2">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
            <SignUpButton forceRedirectUrl="/dashboard">
              <Button className='bg-blue-600 hover:bg-blue-700'>Get Started</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header
