import React from 'react'
import { NewsletterCardDisplayData } from '../../assets/data/newsletters/1'
import NewsCard from '../../components/newsletter-cards/NewsCard'

const Newsletters = () => {
  return (
    <div className='min-h-screen w-full flex flex-col gap-10 my-10' >
      <h1 className='text-4xl mx-auto text-center' >Newsletters </h1>
      <div className='w-full flex flex-col-reverse justify-evenly gap-10 ' >
        {/* Newsletters Card */}
        {
          NewsletterCardDisplayData.map((data, index) => {
            return (
              <NewsCard key={index} id={data.id} title={data.title} description={data.description} date={data.date} image={data.image} />
            )
          })
        }


      </div>
    </div>
  )
}

export default Newsletters