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

const HorizonSpeakerCard = ({ name, image, description }) => {
    return (
        <div >
            <Card className="relative overflow-hidden dark h-auto w-[20rem] max-w-[28rem] bg-[#114791] md:px-4 mx-auto" >

                <CardHeader>
                    <CardTitle className="text-xl md:text-3xl h-fit z-30">
                        <img src={image} alt="" className="w-full h-full object-cover rounded-xl mb-2" />
                        {name}
                    </CardTitle>
                    <CardDescription className='text-lg z-30' >
                    {description}
                    </CardDescription>
                </CardHeader>


                <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[3rem]' ></div>
                <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div>
            </Card>
        </div>
    )
}

export default HorizonSpeakerCard