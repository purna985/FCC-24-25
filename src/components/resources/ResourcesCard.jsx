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

const ResourcesCard = ({title, description,content,link}) => {
  return (
    <Card className="relative overflow-hidden dark h-auto w-4/5 max-w-[22rem] bg-[#114791] p-4 " >
    <CardHeader>
      <CardTitle className="text-3xl" >{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>

    <CardContent>
      <p>{content} </p>
    </CardContent>

    <CardFooter className="flex justify-between z-40">
      <Link to={link} >
        <Button className='z-40' variant="outline">Explore</Button>
      </Link>

    </CardFooter>

    <div className='-z-10 w-20 h-20 bg-white absolute top-0 left-0 blur-[5rem]' ></div>
    <div className='w-20 h-20 bg-white absolute bottom-0 right-0 blur-[5rem]' ></div></Card>
  )
}

export default ResourcesCard