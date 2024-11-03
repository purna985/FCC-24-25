import { NewsLetterContentData } from '../../assets/data/newsletters/1'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const renderContentWithBreaks = (text) => {
    return text.split('\n').map((line, index) => (
        <p className='my-2 text-md' key={index}>{line}</p>
    ));
};

const NewsletterCard = ({ id }) => {
    const data = NewsLetterContentData[id - 1];
    const headings = data.headings
    const content = data.content
    const images = data.images
    const authors = data.authors
    return (
        <div className='min-h-screen my-10 ' >

            <div className='w-full flex' >
                <div className='w-[90%] mx-auto md:w-[80%] p-4' >
                    <h1 className='text-4xl my-4 font-bold text-blue-400 ' >FCC NEWSLETTER</h1>
                    <h1 className='text-3xl mt-4 font-bold ' >{data.title}</h1>

                    <div className='flex justify-between' >
                        <h1 className='text-xl mb-4 text-gray-500 ' >{data.date}</h1>
                        <h1 className='text-xl mb-4 text-gray-500' > by {authors[0]} and {authors[1]} </h1>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {
                            data.headings.map((data, key) => {
                                return (

                                    <AccordionItem value={`item-${key}`} className='mb-10' key={key}>
                                        <AccordionTrigger>
                                            <h2 className='text-xl my-2 font-semibold'>{data}</h2>

                                        </AccordionTrigger>
                                        <AccordionContent className='flex flex-col md:w-[80%] ' >
                                            {renderContentWithBreaks(content[key])}
                                            \
                                            <div>
                                                {
                                                    images[key] && <img src={images[key]} alt="" className='w-64 h-64' />
                                                }
                                            </div>
                                        </AccordionContent>

                                    </AccordionItem>
                                );

                            })
                        }
                    </Accordion>


                </div>

            </div>
        </div>


    )
}

export default NewsletterCard