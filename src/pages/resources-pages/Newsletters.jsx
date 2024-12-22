import React from 'react'
import { NewsletterCardDisplayData } from '../../assets/data/newsletters/1'
import NewsCard from '../../components/newsletter-cards/NewsCard'
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRightFromSquare } from 'lucide-react';

const Newsletters = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 my-10' >
      <div className='w-[80%] mx-auto' >
        <Link to='/resources' ><Button variant='outline' className='dark md:text-md'  ><ArrowLeft />Back to Resources </Button></Link>
      </div>
      <h1 className='text-4xl mx-auto text-center' > <span className='text-blue-600' >FCC</span> Newsletters </h1>
      <div className='w-full flex flex-col-reverse justify-evenly gap-10 ' >
        {/* Newsletters Card */}
        {
          NewsletterCardDisplayData.map((data, index) => {
            return (
              <NewsCard key={index} id={data.id} title={data.title} description={data.description} date={data.date} image={data.image} />
            )
          })
        }


      </div>
    </div>
  )
}

export default Newsletters