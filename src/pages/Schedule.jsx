import ReactCalendar from '../components/Calendar'
import ComingSoon from '../components/ComingSoon'
import ScheduleCalendar from '@/components/calendar/ScheduleCalendar'


export default function Schedule() {
  return (
    <div className='min-h-screen w-full flex flex-col my-10'>
      {/* <ComingSoon  /> */}
      {/* <ReactCalendar /> */}
      <h1 className='text-4xl mx-auto text-center' >Events Calendar </h1>

      <ScheduleCalendar />
    </div>
  )
}
