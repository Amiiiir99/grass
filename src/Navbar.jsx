export default function NavBar () {
    return (
        
        <div className="bg-green-500 flex justify-between text-white font-bold p-5">
            <h1 className="ml-5">myGrass</h1>
            <div>
                <a href="./" className="px-5 py-[21.5px] hover:bg-green-800 duration-300">Home</a>
                <a href="./" className="mr-5 px-5 py-[21.5px] hover:bg-green-800 duration-300">Contact</a>
            </div>
        </div>
        
    )
}