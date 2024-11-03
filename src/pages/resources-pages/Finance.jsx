import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const financeYoutube = [
    " Aswath Damodaran",
    "Martin shkreli : Finance Lectures ",
    "Preston pysh : Course 1 Investing like Warren Buffet-Beginners (Playlist)"
]

const financeBooks = [
    "Finance and accounting for non finance - Drom and Wright [Beginner level]",
    "Security Analysis - Benjamin Graham and David Dodd",
    "Financial statements : A step by step guide - Ittelson",
    "Lil book for valuation - Damodaran",
    "Investment valuation - Aswath Damodaran",
    "Damodaran on valuation ",
    "Damodaran - Dark side of valuations",
    "Valuation by McKinsey",
    "The Accountancy game (Lemonade)",
    "Value Investing for Dummies",
    "Building Financial models - John Tija",
    "What’s behind the numbers - Del Veccio",
    "How to read financial Reports - John Tracy",
    "Financial statements analysis and security valuation - penman stephan",
    "The interpretation of financial statements - Benjamin Graham",
    "Financial statements : a step by step guide to understanding and creating financial reports - thomas lettelson",
    "Investment banking - Joshua Rosenbaum",
    "The mining valuation handbook - Victor Rudenno",
    "Valuation : Measuring and managing the values of companies - McKinsey and Company.",
    "Warren Buffet and the interpretation of financial statements - Marry buffet and David clark",
    "The interpretation of financial statements - Benjamin graham and Spencer",
    "Financial Intelligence : A managers guide to knowing what numbers really mean - Karen berman",
    "The five rules for successful stock investing : Morning stars guide to building wealth and winning the market - Pat dorsey",
    "Financial modeling - Benninga [Advanced]",
    "Financial Shenanigans - Schilit",
    "Quanlity earnings - O’Glove",
    "Accountancy For Growth - Smith",
    "Financial Statement Analysis and valuation - Easton, McAnally, Sommers, Zhang [Used in professional courses]"
]

const financeCourses = [
    "CFI’s financial modelling and valuation analyst course"
]

const excelFinance = [
    "Microsoft data analysis and business modeling - Winston"
]

const financeExtraMaterial = [
    "The essays of warren buffet : lessons for investors and managers - Warren buffet",
    "The little book that beats the market - Joel Greenblatt",
    "The little book valuations - Aswath damodaran",
    "The little book that Builds Wealth - Pat dorsey"
]

const Finance = () => {
    return (
        <div className='min-h-screen'>
            <h1 className='text-2xl w-[80%] md:text-4xl my-10 text-center font-semibold mx-auto'> 💸 Finance Learning Resources </h1>

            <div className="w-[80%] mx-auto " >
                <Accordion type="single" collapsible className="w-full">

                    {/* Youtube Lectures  */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger><h1 className=" text-2xl md:text-3xl" >Youtube lectures</h1></AccordionTrigger>
                        {
                            financeYoutube.map((yt, key) => {
                                return (
                                    <AccordionContent key={key} className='  text-md md:text-lg' >
                                        <p  >
                                            {key + 1}) {yt}
                                        </p>
                                    </AccordionContent>
                                )
                            })
                        }

                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger><h1 className=" text-2xl md:text-3xl" >Books</h1></AccordionTrigger>
                        {
                            financeBooks.map((book, key) => {
                                return (
                                    <AccordionContent key={key} className='  text-md md:text-lg' >
                                        <p  >
                                            {key + 1}) {book}
                                        </p>
                                    </AccordionContent>
                                )
                            })
                        }
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger><h1 className=" text-2xl md:text-3xl" >Courses</h1></AccordionTrigger>
                        {
                            financeCourses.map((course, key) => {
                                return (
                                    <AccordionContent key={key} className='  text-md md:text-lg' >
                                        <p  >
                                            {key + 1}) {course}
                                        </p>
                                    </AccordionContent>
                                )
                            })
                        }
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger><h1 className=" text-2xl md:text-3xl" >Excel implementation</h1></AccordionTrigger>
                        {
                            excelFinance.map((course, key) => {
                                return (
                                    <AccordionContent key={key} className='  text-md md:text-lg' >
                                        <p  >
                                            {key + 1}) {course}
                                        </p>
                                    </AccordionContent>
                                )
                            })
                        }
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger><h1 className=" text-2xl md:text-3xl" >Extra Reading Material</h1></AccordionTrigger>
                        {
                            financeExtraMaterial.map((book, key) => {
                                return (
                                    <AccordionContent key={key} className='  text-md md:text-lg' >
                                        <p  >
                                            {key + 1}) {book}
                                        </p>
                                    </AccordionContent>
                                )
                            })
                        }
                    </AccordionItem>

                </Accordion>
            </div>

        </div>
    )
}

export default Finance
