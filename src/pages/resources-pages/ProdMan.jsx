import React from 'react'
import HomeEventCard from '../../components/event-cards/HomeEventCard'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react';


const ProdMan = () => {
    return (
        <div className="w-full min-h-screen">
            <div className='w-[80%] mx-auto' >
                <Link to='/resources' ><Button variant='outline' className='dark md:text-md'  ><ArrowLeft />Back to Resources </Button></Link>
            </div>
            <h1 className='text-3xl mx-auto text-center' >Coming Soon...</h1>
        </div>
    )
}

export default ProdMan
