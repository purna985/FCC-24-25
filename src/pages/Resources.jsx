import React from 'react'
import {
  SidebarProvider,
  SidebarTrigger
} from '../components/ui/sidebar'
import ResourcesSidebar from '../components/ResourcesSidebar.'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import NewsCard from '../components/newsletter-cards/NewsCard'

export default function Resources() {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 my-10'>
      <h1 className='text-4xl mx-auto text-center' >Resources </h1>
      <div className='w-full flex flex-wrap justify-evenly gap-5 md:gap-2 ' >

        {/* Finance Card */}
        <Card className="relative overflow-hidden dark h-auto w-[22rem] bg-[#114791] p-4 " >


          <CardHeader>
            <CardTitle className="text-3xl" >Finance</CardTitle>
            <CardDescription>Finance Related Resources</CardDescription>
          </CardHeader>

          <CardContent>
            <p>One-stop destination for all resources and content to level up your finance game </p>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link to='finance-resources' >
              <Button variant="outline">Explore</Button>
            </Link>

          </CardFooter>

          <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
          <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div></Card>

        {/* Consulting Card */}
        <Card className="relative overflow-hidden dark h-auto w-[22rem] bg-[#114791] p-4 " >

          <CardHeader>
            <CardTitle className="text-3xl" >Consulting</CardTitle>
            <CardDescription>Consulting Related Resources</CardDescription>
          </CardHeader>

          <CardContent>
            <p>Unlocking Potential: Your Resource Hub for Consulting Success</p>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link to='consulting-resources' >
              <Button variant="outline">Explore</Button>
            </Link>

          </CardFooter>

          <div className='w-20 h-20 bg-white absolute left-0 top-0 blur-[5rem]' ></div>
          <div className='w-20 h-20 bg-white absolute bottom-0 right-0 blur-[5rem]' ></div></Card>

        {/* Prod Management Card */}
        <Card className="relative overflow-hidden dark h-auto w-[22rem] bg-[#114791] p-4 " >

          <CardHeader>
            <CardTitle className="text-3xl" >Product Management</CardTitle>
            <CardDescription>Product Management Related Resources</CardDescription>
          </CardHeader>

          <CardContent>
            <p>Your Gateway to Mastering Product Management: Insights and Strategies </p>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link to='finance-resources' >
              <Button variant="outline">Explore</Button>
            </Link>

          </CardFooter>

          <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
          <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div></Card>

      </div>

      <h1 className="text-4xl text-center mt-10">Explore More</h1>
      <div className="flex justify-center mt-10">

        <Card className=" relative overflow-hidden dark h-auto w-[26rem] bg-[#114791] p-4  " >
          <CardHeader>
            <CardTitle className="text-3xl" >FCC Newsletters</CardTitle>
            <CardDescription>Fortnightly news digest</CardDescription>
          </CardHeader>

          <CardContent>
            <p> Your Fortnightly one stop for financial news around the world, with a tinge of humor XD </p>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Link to='newsletters' >
              <Button variant="outline">Read Now</Button>
            </Link>

          </CardFooter>
          <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
          <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div>
        </Card>
      </div>



    </div>
  )
}
