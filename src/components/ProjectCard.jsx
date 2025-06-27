import {AnimatedToolTip} from "../components/AnimatedToolTip"

function ProjectCard(props) {
    console.log(props.Image);

    const people = props.people || []; 

    return (
        <div className={`w-full max-w-[1072px] mx-auto p-4 md:p-6 lg:p-8`}>
            <div className={`flex flex-col md:flex-row ${props.imageOnLeft ? '' : 'md:flex-row-reverse'} gap-8 md:gap-12 lg:gap-[62px] items-center`}>
                
                {/* Image Section - Made slightly bigger */}
                <div className="w-full md:w-1/2 lg:w-[550px] aspect-video md:aspect-auto md:h-[380px] rounded-[10px] bg-[#EBEBEB] border border-[#4E56D3] p-1">
                    <img src={props.Image} alt="Project Image" className="rounded-[10px] w-full h-full object-cover"/>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 lg:w-[520px] rounded-[10px] p-5 border border-[#292929] bg-[#1B1A1A] font-schibsted text-[#EBEBEB]">
                    <div className="flex flex-col gap-4">
                        
                        {/* Title - Font size increased */}
                        <p id="Title" className="font-schibsted text-[#EBEBEB] font-Weights-Medium text-2xl leading-tight tracking-normal"> 
                            {props.Title}
                        </p>

                        {/* Topics - Font size increased */}
                        <div id="Topics" className="flex flex-wrap gap-x-4 gap-y-2">
                            {props.Topics.map((item, index) => (
                                <div key={index} className="rounded-[10px] border border-[#4E56D3] bg-[#121649] px-3 py-1.5 flex justify-center items-center">
                                    <p className="font-schibsted text-[#EBEBEB] font-Weights-Medium text-sm leading-normal tracking-normal whitespace-nowrap">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Description - Font size increased */}
                        <div id="Description" className="text-[#BBBBBB] font-Label-Label-2-fontFamily font-Weights-Regular text-base leading-relaxed tracking-normal">
                            {props.Desc}
                        </div>
                        
                        {/* Divider */}
                        <div id="line" className="w-full border-t border-[#292929]"></div>

                        {/* Container for View Button and AnimatedToolTip */}
                        <div className="flex items-center space-x-4">
                            {/* View Button - Font size increased */}
                            <button id="view" className="flex items-center gap-1 w-fit">
                                <p className="text-[#CDFE64] font-Label-Label-1-fontFamily font-Weights-Bold text-lg leading-normal tracking-normal">
                                    View
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#CDFE64]" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {/* AnimatedToolTip */}
                            <div className="flex items-center space-x-3">
                                <AnimatedToolTip items={people} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;