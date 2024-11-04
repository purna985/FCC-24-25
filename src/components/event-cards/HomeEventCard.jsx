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

  const HomeEventCard = ({title, subtitle, date, time, venue, link, linkText}) => {
    return (
        <div >
            <Card className="relative overflow-hidden dark h-auto w-4/5 max-w-[28rem] bg-[#114791] md:p-4 mx-auto" >
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
                        <Button variant="outline">{linkText}</Button>
                    </Link>}

                </CardFooter>

                <div className='w-20 h-20 bg-white absolute top-0 right-0 blur-[5rem]' ></div>
                <div className='w-20 h-20 bg-white absolute bottom-0 left-0 blur-[5rem]' ></div></Card>
        </div>
    )
}

export default HomeEventCard