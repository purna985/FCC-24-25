import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const TeamMemberCard = ({ name, designation, linkedin, image }) => {
    return (
        <div className="relative w-[18rem] max-w-[18rem] mx-auto rounded-xl bg-[#114791] shadow-lg overflow-hidden flex flex-col items-center transition-transform duration-300 my-4 ">
            {/* Image Container */}
            <div className="w-full h-64 overflow-hidden flex items-center justify-center">
                <img
                    src={image}
                    alt={name}
                    className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg mx-auto  "
                />
            </div>
            
            {/* Card Content */}
            <Card className="w-full border-none px-6 text-center bg-transparent">
                <CardHeader>
                    <CardTitle className="text-3xl font-semibold text-white">{name}</CardTitle>
                    <p className="text-lg text-gray-200">{designation}</p>
                </CardHeader>

                <CardFooter className="mt-4">
                    <Link to={linkedin} target="_blank" className='mx-auto'>
                        <Button
                            variant="outline"
                            className="px-4 py-2 dark text-md transition-all duration-300"
                        >
                            LinkedIn
                        </Button>
                    </Link>
                </CardFooter>
            </Card>

            {/* Decorative Blurs */}
            <div className="absolute w-20 h-20 bg-blue-100 opacity-40 rounded-full blur-2xl -top-6 -right-6"></div>
            <div className="absolute w-20 h-20 bg-blue-100 opacity-40 rounded-full blur-2xl -bottom-6 -left-6"></div>
        </div>
    )
}

export default TeamMemberCard
