import ConsultingResourcesPdf from '../../components/resources/consulting/ConsultingResourcesPdf'
import CaseKnightsPdf from '../../components/resources/consulting/CaseKnightsPdf'

const Consulting = () => {
  return (
    <div className='min-h-screen' >

      {/* Consulting Resources  */}
      <ConsultingResourcesPdf />

      {/* Case Knights session pdfs */}
      <CaseKnightsPdf />

    </div>
  )
}

export default Consulting