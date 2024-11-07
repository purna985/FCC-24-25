import { Link } from 'react-router-dom';
import { NewsLetterContentData } from '../../assets/data/newsletters/1'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react';
const renderContentWithBreaks = (text) => {
    return text.split('\n').map((line, index) => (
        <p className='my-2 text-[1rem]' key={index}>{line}</p>
    ));
};

const NewsletterCard = ({ id }) => {
    const data = NewsLetterContentData[id - 1];
    // const headings = data.headings
    const content = data.content
    const images = data.images
    const authors = data.authors
    return (
        <div className='min-h-screen md:my-10 ' >
            <div className='w-full flex flex-col' >
                <div className='md:w-[90%] mx-auto md:w-[80%] p-4' >
                    <h1 id='newsletter-heading' className='mx-auto text-2xl md:text-4xl mb-4 md:mb-16 font-bold text-blue-700 underline text-center' >
                        <Link to='/resources/newsletters' >FCC NEWSLETTER - {id}</Link>
                    </h1>
                    <h1 className='text-xl md:text-3xl my-2 md:my-4 font-bold ' >{data.title}</h1>

                    <div className='flex justify-between'>
                        <h1 className='md:text-lg mb-4 text-gray-500'>{data.date}</h1>
                        <div className=' mb-4 w-auto flex flex-row'>
                            {authors.map((author, index) => (
                                <div key={index} className='mr-1 text-sm md:text-lg text-gray-500'>
                                    {index === 0 ? `by ${author}` : `, ${author}`}
                                </div>
                            ))}
                        </div>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {
                            data.headings.map((data, key) => {
                                return (

                                    <AccordionItem value={`item-${key}`} className='mb-10' key={key}>
                                        <AccordionTrigger>
                                            <h2 className='text-lg md:text-xl my-2 font-semibold'>{data}</h2>

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

                <div className='w-[80%] flex justify-between mx-auto mb-10 ' >
                    <div className='' ><Link to={id > 1 ? `/resources/newsletters/${id - 1}` : `/resources/newsletters/${id}`} > <Button variant='secondary' className='dark md:text-md' disabled={id === 1}  ><ArrowLeft />Previous </Button></Link></div>
                    <div className='' ><Link to={id < NewsLetterContentData.length ? `/resources/newsletters/${id + 1}` : `/resources/newsletters/${id}`}  > <Button variant='secondary' className='dark md:text-md' disabled={id === NewsLetterContentData.length}  >Next <ArrowRight /> </Button></Link></div>
                </div>

            </div>
        </div>


    )
}

export default NewsletterCard