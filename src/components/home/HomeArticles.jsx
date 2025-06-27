import ArticleCardVertical from "../ArticleCardVertical"
import ArticleCardLandscape from "../ArticleCardLandscape";
const article1 = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3Ms-uMqpqBUwjkJNgV-8e_ew-ODdgXLJtVtbpZyUVEOYo4O-', // Placeholder image
    readTime: '5 min read',
    tags: ['Fintech', 'Banking'],
    publishDate: 'Mar 15, 2025',
    title: 'The Future of FinTech: Emerging Trends',
    description: 'Exploring how fintech innovations are reshaping the banking landscape and what it means for trad..',
    people:[{
          id: 1,
          name: "John Doe",
          designation: "Student",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehxjnm80tSeH-wmTrUhlfnxRcvozMT-S7e7maEyPVHNFRNUHxZFW_Vh9f5c4_9ExnQtM&usqp=CAU",
          linkedIn:"https://www.linkedin.com/in/guddeti-sreeteja"
          },{
          id: 2,
          name: "Singh",
          designation: "Student",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCztyHUUFCyz7WZZcppjMp79QJLxzXik02unhfr4GuFd1hW31uQnvjV19CtkHB0D1f6sw&usqp=CAU",
          linkedIn:"https://www.linkedin.com/in/guddeti-sreeteja"
          },]
  };

const article2 = {
    imageUrl: 'https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2023/10/1023-higher-ed-climate-studies-jason-goodman-Oalh2MojUuk-unsplash.jpg?resize=150,150&ssl=1', // Placeholder image
    readTime: '5 min read',
    tags: ['Fintech', 'Banking'],
    publishDate: 'Mar 15, 2025',
    title: 'ESG Investing: Beyond the Buzzword',
    description: 'Exploring how fintech innovations are reshaping the banking landscape and what it means for trad..',
    people:[{
          id: 1,
          name: "John Doe",
          designation: "Student",
          image: "https://www.shutterstock.com/image-photo/confident-smiling-middle-aged-business-600nw-2451544833.jpg",
          linkedIn:"https://www.linkedin.com/in/guddeti-sreeteja"
          },{
          id: 2,
          name: "Singh",
          designation: "Student",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMaljahFqlmPrJsv663xiZyxcc20lQ6O7uA&s",
          linkedIn:"https://www.linkedin.com/in/guddeti-sreeteja"
          },]
  };

const HomeArticles = () => {
    return (
    <div className="flex h-[80vh] md:h-auto mb-[2%] flex-col w-full justify-center items-center md:py-[5%] z-20">

      <div
          id="Section title"
          class="text-center font-schibsted text-[#EBEBEB] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
          <span
            class="bg-gradient-to-r font-schibsted text-[#EBEBEB] text-5xl mb-[2%] from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent"
            >Latest Articles</span>
        </div>
        <div
          id="Section subtitle"
          class="mt-4 text-center font-normal text-base sm:text-lg mb-[3%] md:text-2xl leading-relaxed max-w-3xl mx-auto"
          >
          <span class="font-schibsted text-[#EBEBEB] "
            >Lorem ipsum duis pellentesque amet ut imperdiet lorem et commodo a nulla diam.</span>
        </div>
        <div className="flex h-[80vh] md:h-auto mb-[4%] md:flex-row flex-col w-full justify-center items-center md:py-[5%] z-20">
            {/* Main content wrapper: Centers content block, adds mobile padding */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center max-w-[1200px] px-4 md:px-10">
                {/* Left Section: Text Content */}
                <div className="flex flex-col justify-center items-start text-left w-full md:w-1/2 mb-8 md:mb-0">
                    <ArticleCardVertical article={article1}/>
                </div>
                {/* Right Section: HorizonCard */}
                <div className="w-full md:w-2/3 md:ml-10 space-y-6">
                    <ArticleCardLandscape article={article2} />
                    <ArticleCardLandscape article={article2} />
                </div>
            </div>
        </div>
        <button className="flex items-center gap-2 bg-[#CDFE64] hover:bg-blue-500 text-[#1F2E01] font-semibold font-roboto text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
            View All Blogs
            <span className="text-[#1F2E01]">→</span>
        </button>
    </div>)
}

export default HomeArticles