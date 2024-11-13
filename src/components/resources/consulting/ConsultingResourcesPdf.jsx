import { Consulting_Resources_pdfs } from '@/assets/data/resources.js'

const ConsultingResourcesPdf = () => {
    return (
        <div className='w-4/5 mx-auto' >
            <h1 className=' text-3xl my-10 text-center' >Consulting Resources</h1>  
            <p className='text-center' >From Theory to Practice: Essential Resources for Aspiring Consultants</p>
            <div className=" flex flex-wrap justify-center p-10 gap-5 w-full mx-auto " >
                {
                    Consulting_Resources_pdfs.map((pdf, key) => {
                        return (

                            <iframe
                                src={pdf}
                                height={'250px'}
                                title="Session slides"
                                allow="autoplay"
                                key={key}
                            ></iframe>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ConsultingResourcesPdf