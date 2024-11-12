import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaLinkedin } from 'react-icons/fa';

const TeamHeadCard = ({ name, image, title, linkedin }) => {
  return (
    <div >
      <Card className="relative overflow-hidden dark h-[22rem] w-[15rem] md:w-[17rem] max-w-[28rem] bg-[#114791] md:p-4 mx-auto" >

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
        </CardContent>
        
        <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
        <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div></Card>
    </div>
  )
}

export default TeamHeadCard