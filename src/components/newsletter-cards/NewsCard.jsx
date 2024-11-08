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

const NewsCard = ({id,title,description,date,image}) => {
  return (
    <div className=' relative md:h-[26rem] lg:h-[24rem] w-[22rem] md:w-[80%] lg:w-[60%] mx-auto bg-[#114791] rounded-xl flex-col-reverse md:flex flex md:flex-row  overflow-hidden ' >

      <Card className="dark border-none md:h-[22rem] w-auto md:w-1/2 shadow-none bg-transparent md:p-4 bg-[#114791] flex flex-col justify-evenly " >
        <CardHeader>
          <CardTitle className=" text-lg md:text-2xl md:my-2" >{title}</CardTitle>
          <CardDescription className='my-2' > {description}... </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <p> {date} </p>
          <Link to={`${id}`} >
            <Button variant="outline">Read Now</Button>
          </Link>

        </CardFooter>
      </Card>

      <div className='md:w-1/2  flex items-center justify-center p-3' >
        <img src={image} alt=".." className='rounded-md z-10 md:h-[15rem] w-[20rem] ' />
      </div>

      <div className='w-24 h-24 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
      <div className='w-24 h-24 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div>
    </div>
  )
}

export default NewsCard