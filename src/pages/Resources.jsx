import ResourcesCard from '@/components/resources/ResourcesCard.jsx'

export default function Resources() {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 my-10'>
      <h1 className='text-4xl mx-auto text-center' >Resources </h1>
      <div className='w-full flex flex-wrap justify-evenly gap-5 md:gap-2 ' >
        {/* Finance Card */}
        <ResourcesCard title="Finance" description="Finance Related Resources" content="One-stop destination for all resources and content to level up your finance game" link="finance-resources" />

        {/* Consulting Card */}
        <ResourcesCard title="Consulting" description="Consulting Related Resources" content="Unlocking Potential: Your Resource Hub for Consulting Success" link="consulting-resources" />

        {/* Prod Management Card */}
        <ResourcesCard title="Product Management" description="Product Management Related Resources" content="Your Gateway to Mastering Product Management: Insights and Strategies" link="product-resources" />
      </div>

      <h1 className="text-4xl text-center mt-10 mx-auto">Explore More</h1>
      <div className="flex justify-center">
        {/* Newsletters Card */}
          <ResourcesCard className='max-w-[25rem]' title="FCC Newsletters" description="Fortnightly news digest" content=" Your Fortnightly one stop for financial news around the world, with a tinge of humor XD" link="newsletters" />
      </div>
    </div>
  )
}
