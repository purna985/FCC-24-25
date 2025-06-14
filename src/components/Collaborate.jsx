const Collaborate = () => {

    return(
        <div className="flex flex-col items-center justify-center text-center px-6 py-16 rounded-xl bg-gradient-to-r from-[#0f172a] to-[#3b5e14] text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold text-lime-400 mb-4">
            Ready to Collaborate?
        </h2>

        <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-8">
            Partner with FCC to unlock new opportunities, drive innovation, and shape the future of finance and consulting. 
            Join our network of industry leaders and academic excellence.
        </p>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            Partner with us
            <span className="text-xl">→</span>
        </button>

        <p className="text-sm text-gray-400 mt-4">
            Join 25+ industry partners already collaborating with FCC
        </p>
        </div>
    )
}

export default Collaborate