import { CaseKnights_pdfs } from '@/assets/data/resources.js'

const CaseKnightsPdf = () => {
    return (
        <div className='w-4/5 mx-auto' >
            <h1 className=' text-3xl my-10 text-center' >CaseKnights♞ Sessions by FCC</h1>  

            <div className=" flex flex-wrap justify-center p-10 gap-5 w-full mx-auto " >
                {
                    CaseKnights_pdfs.map((pdf, key) => {
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

export default CaseKnightsPdf