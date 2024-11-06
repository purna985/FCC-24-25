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

const SpeakerCard = ({ image, name, description }) => {
    return (
        <div className="w-1/3 md:w-auto" >
            <Card className="relative overflow-hidden dark h-auto md:w-4/5 max-w-[22rem] bg-[#114791] " >
                <CardHeader>
                    <CardTitle className="text-3xl" ><img src={image} alt="" /></CardTitle>
                    
                </CardHeader>
                <CardFooter className="flex flex-col justify-between">
                    <CardContent className='flex justify-center items-center' > <p className="text-lg md:text-xl  text-center" >{name}</p> </CardContent>
                    <CardContent>
                        <p className="text-md" >{description} </p>
                    </CardContent>

                </CardFooter>

                <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
                <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div></Card></div>
    )
}

export default SpeakerCard