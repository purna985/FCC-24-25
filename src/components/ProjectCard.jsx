

function ProjectCard(props){
    console.log(props.Image);
    return(
        <div className={`w-[1072px] h-[350px] gap-[62px] flex ${props.imageOnLeft?'flex-row':'flex-row-reverse'}`}>
            <div className="w-[490px] h-[350px] rounded-[10px] bg-[#EBEBEB] border border-[#4E56D3]">
                <div className="w-[490px] h-[350px] rounded-[10px] border">
                    <img src={props.Image} alt="Project Image" className=" border border-[#4E56D3] w-full h-full"/>
                </div>
            </div>
            <div className="border w-[520px] h-[230px] gap-[10px] rounded-[10px] p-[20px] border-[#292929] bg-[#1B1A1A]">
                <div className="w-[480px] h-[156px] flex-col flex gap-[14px]">
                    <div className="h-full w-full flex-col flex gap-[20px]">
                        <div className="w-full h-[136px] flex flex-col gap-[20px]">
                            <p id="Title" className="w-full h-[28px] text-[#EBEBEB] font-Heading-H3-fontFamily font-Weights-Medium
  text-Heading-H3-fontSize leading-Heading-H3-lineHeight tracking-Heading-H3-letterSpacing">
                                {props.Title}
                            </p>

                            <div id="Topics" className="w-[258px] h-[28px] flex gap-[20px]">
                                {props.Topics.map((item,index)=>(
                                    <div key={index} className="h-[28px] gap-[10px] rounded-[10px] border p-[6px] border-[#4E56D3] bg-[#121649]
                                    flex justify-center items-center">
                                        <p className=" h-[16px] font-Label-Label-3-fontFamily font-Weights-Medium text-Label-Label-3-fontSize 
                                        leading-Label-Label-3-lineHeight tracking-Label-Label-3-letterSpacing text-[#F3FFD8]">{item}</p>
                                    </div>
                                )
                                )}
                            </div>

                            <div id="Description" className="w-full h-[40px] text-[#BBBBBB] font-Label-Label-2-fontFamily 
                            font-Weights-Regular text-Label-Label-2-fontSize leading-Label-Label-2-lineHeight tracking-Label-Label-2-letterSpacing">
                                {props.Desc}
                            </div>

                            <div id="line" className="w-[479px] border border-[#292929]"></div>

                            <button id="view" className="w-[67px] h-[24px] gap-[4px] flex">
                                <p className="w-[39px] h-[22px] text-[#CDFE64] font-Label-Label-1-fontFamily 
                            font-Weights-Bold text-Label-Label-1-fontSize leading-Label-Label-1-lineHeight tracking-Label-Label-1-letterSpacing">View</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;