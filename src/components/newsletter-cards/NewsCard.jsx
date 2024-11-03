import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Link } from 'react-router-dom'

import { Button } from '../ui/button'

const NewsCard = ({title,description,date,image}) => {
  return (
    <div className=' relative w-[80%] md:w-[50%] mx-auto bg-[#114791] rounded-xl flex-col-reverse md:flex flex md:flex-row  overflow-hidden ' >
      <Card className="dark border-none h-auto w-full bg-transparent p-4 bg-[#114791]" >

        <CardHeader>
          <CardTitle className="text-3xl" >{title}</CardTitle>
          <CardDescription> {description} </CardDescription>
        </CardHeader>

        {/* <CardContent>
      <p>Unlocking Potential: Your Resource Hub for Consulting Success</p>
    </CardContent> */}

        <CardFooter className="flex justify-between">
          <p> {date} </p>
          <Link to='/newsletters' >
            <Button variant="outline">Read Now</Button>
          </Link>

        </CardFooter>

      </Card>
      <div className='flex items-center justify-center p-3' >
        <img src={image} alt=".." className='rounded-md z-10  ' />
      </div>

      <div className='w-24 h-24 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
      <div className='w-24 h-24 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div>
    </div>
  )
}

export default NewsCard