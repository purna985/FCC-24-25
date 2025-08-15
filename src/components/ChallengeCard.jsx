function ChallengeCard(props) {
  return (
    <div className="rounded-[10px] border border-[#414141] bg-[#1B1A1A] p-5 flex flex-col md:flex-1 items-center gap-5">
        <p className="text-[#EBEBEB] font-Family-primary font-Weights-Medium text-Heading-H1-fontSize">{props.title}</p>
        <p className="text-[#BBBBBB] font-Family-secondary text-[20px] leading-[32px]">{props.desc}</p>
    </div>
  );
}
export default ChallengeCard;