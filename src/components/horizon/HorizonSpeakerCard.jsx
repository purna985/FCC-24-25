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
            <Card className="relative overflow-hidden dark h-auto md-1:max-w-[10rem] md:w-[15rem] max-w-[20rem] bg-[#114791] md:px-4 mx-auto" >

                <CardHeader>
                        <img src={image} alt="" className="w-full h-full object-cover rounded-xl mb-2 z-50" />
                    <CardTitle className="text-sm text-start h-fit z-30">
                        <p>
                            {name}
                        </p>
                    </CardTitle>
                    {/* <CardContent>
                    </CardContent>
                    <CardDescription className='text-sm z-30' >
                        {description}
                    </CardDescription> */}
                </CardHeader>


                {/* <div className='w-10 h-10 bg-white absolute top-0 right-0 blur-[1rem]' ></div> */}
                <div className='w-10 h-10 bg-white absolute bottom-0 right-0 blur-[2rem]' ></div>
            </Card>
        </div>
    )
}

export default HorizonSpeakerCard