import FinanceLearningResources from "../../components/resources/Finance/FinanceLearningResources"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react';

const Finance = () => {
    return (
        <div className='min-h-screen'>
            <div className='w-[80%] mx-auto' >
                <Link to='/resources' ><Button variant='outline' className='dark md:text-md'  ><ArrowLeft />Back to Resources </Button></Link>
            </div>
            {/* Finance Learning Resources */}
            <FinanceLearningResources />
        </div>
    )
}

export default Finance
