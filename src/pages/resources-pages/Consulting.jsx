import ConsultingResourcesPdf from '../../components/resources/consulting/ConsultingResourcesPdf'
import CaseKnightsPdf from '../../components/resources/consulting/CaseKnightsPdf'
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react';

const Consulting = () => {
  return (
    <div className='min-h-screen' >
      <div className='w-[80%] mx-auto' >
        <Link to='/resources' ><Button variant='outline' className='dark md:text-md'  ><ArrowLeft />Back to Resources </Button></Link>
      </div>
      {/* Consulting Resources  */}
      <ConsultingResourcesPdf />

      {/* Case Knights session pdfs */}
      <CaseKnightsPdf />

    </div>
  )
}

export default Consulting