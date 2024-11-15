import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Header = () => {
    return (
        <>
            <div className='p-5 shadow-sm flex justify-between'>
                <div className='flex items-center gap-8'>
                    <div className='flex'>
                        <Image src={'/logo.png'} alt='website logo' width={150} height={100} />
                    </div>


                    <DropdownMenu>
                        <DropdownMenuTrigger>  
                            <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-100 cursor-pointer'>
                            <LayoutGrid className='h-5 w-5' />
                            Category
                             </h2>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <div className='md:flex items-center gap-3 border rounded-full p-2 px-5 hidden'>
                        <Search />
                        <input type='text' placeholder='search' className='outline-none' />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <h2 className='flex items-center gap-2 text-lg'> 0 <ShoppingBag /> </h2>
                    <Button> Login </Button>
                </div>
            </div>
        </>
    )
}

export default Header