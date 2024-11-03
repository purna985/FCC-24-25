import { NewsLetterContentData } from '../../assets/data/newsletters/1'

const renderContentWithBreaks = (text) => {
    return text.split('\n').map((line, index) => (
        <p className='my-2' key={index}>{line}</p>
    ));
};

const NewsletterCard = ({ id }) => {
    const data = NewsLetterContentData[id - 1];
    const headings = data.headings
    const content = data.content
    const images = data.images
    const authors = data.authors
    return (
        <div className='min-h-screen ' >
            <div className='w-full flex' >

                <div className='w-[20%]' >

                </div>
                <div className='w-[80%] p-4' >
                    <h1 className='text-3xl my-4 font-bold ' >{data.title}</h1>
                    {
                        data.headings.map((data, key) => {
                            return (
                                <div className='mb-10' key={key}>
                                    <h2 className='text-xl my-2 font-semibold'>{data}</h2>
                                    <div className='flex flex-col w-[80%] ' >
                                        {renderContentWithBreaks(content[key])}
                                        \
                                        <div>
                                            {
                                                images[key] && <img src={images[key]} alt=""  className='w-64 h-64' />
                                            }
                                        </div>
                                    </div>
                                    <hr className='my-3' />
                                </div>
                            );

                        })
                    }

                    <div>
                        <h1 className='text-xl my-2 font-semibold' >Written by {authors[0]} and {authors[1]} </h1>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default NewsletterCard