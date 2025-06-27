const HorizonCard = () => {

    return(
        <div
    class="flex flex-col items-start justify-start text-start p-6 md:p-8 rounded-xl bg-gradient-to-r from-[#3E5B01] to-[#121649] text-white shadow-lg h-full"
>
    <h2 className="flex items-center gap-x-3 text-lg md:text-lg font-schibsted text-white mb-4">
        <div class="w-5 h-5 bg-[#CDFE64] rounded-full"></div>
        COMING SOON
    </h2>

    <h2 className="flex items-center gap-x-3 text-4xl md:text-5xl font-schibsted font-bold bg-gradient-to-r from-[#81BD01] via-[#F3FFD8] to-[#D9FE8B] bg-clip-text text-transparent text-lime-400 mb-4">
        Horizon 2026
        <img src="src/assets/star.svg" alt="icon" className="w-12 h-12" />
    </h2>

    <p className="max-w-3xl font-outfit font text-Body-1-fontSize md:text-2xl text-gray-300 mb-8">
        India’s Premier Student-Led Finance and Strategy Summit
    </p>

    <button className="flex items-center gap-2 bg-[#CDFE64] hover:bg-blue-500 text-[#1F2E01] font-semibold font-outfit text-Body-2-fontSize px-6 py-3 rounded-md transition duration-300">
        Register
        <span className="text-[#1F2E01]">→</span>
    </button>
</div>
    )
}

export default HorizonCard