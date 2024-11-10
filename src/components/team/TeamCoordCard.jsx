import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const TeamCoordCard = ({ name, image, title, linkedin }) => {
  return (
    <div >
      <Card className="relative overflow-hidden dark h-[22rem] w-[20rem] max-w-[28rem] bg-[#114791] md:p-4 mx-auto" >
        <CardHeader>
          <CardTitle className="text-xl md:text-3xl h-[12rem] z-30">
            <img src={image} alt="" className="w-full h-full object-cover rounded-xl" />
          </CardTitle>

          <CardDescription className='text-sm md:text-lg' >
            {title}
          </CardDescription>
        </CardHeader>

        <CardContent className='flex justify-center items-center' >
          <p className="w-2/3 text-lg" >
          {name}
          </p>
          <a href={linkedin? linkedin : ""} className="w-1/3 flex items-center justify-end" >
            <FaLinkedin className="w-10 h-6" />
          </a>
          {/* {date && <p className="text-sm md:text-md" > <b>Date : </b>{date}</p>}
          {time && <p className="text-sm md:text-md" > <b>Time : </b>{time}</p>}
          {venue && <p className="text-sm md:text-md" ><b>Venue : </b> {venue}</p>} */}
        </CardContent>

        {/* <CardFooter className="flex justify-between">
          {link && <Link to={link} >
            <Button variant="outline">{linkText}</Button>
          </Link>}

        </CardFooter> */}

        <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
        <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div></Card>
    </div>
  )
}

export default TeamCoordCard