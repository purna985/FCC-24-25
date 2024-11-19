import React from "react";
import "./CardComponent.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const CardComponent = ({ title, subtitle, date, time, venue, link, linkText, speaker, location }) => {
  return (
    <div className="w-4/5 mx-auto my-8 max-w-[50rem] max-h-[20rem] h-auto flex items-center">
      <Card className="relative overflow-hidden dark w-full bg-[#114791] md:p-4 mx-auto" >
        <CardHeader>
          <CardTitle className="text-xl md:text-3xl" >{title}</CardTitle>
          <CardDescription className='text-sm md:text-' >{subtitle}</CardDescription>
        </CardHeader>

        <CardContent>
          {date && <p className="text-sm md:text-md" > <b>Date : </b>{date}</p>}
          {time && <p className="text-sm md:text-md" > <b>Time : </b>{time}</p>}
          {venue && <p className="text-sm md:text-md" ><b>Venue : </b> {venue}</p>}
        </CardContent>

        <CardFooter className="flex justify-between">
          {link && <Link to={link} >
            <Button className='z-40' variant="outline">{linkText}</Button>
          </Link>}

        </CardFooter>

        {/* <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div> */}
        <div className='w-20 h-20 bg-white absolute bottom-0 right-0 blur-[5rem]' ></div>
      </Card>
    </div>
  );
};

export default CardComponent;
