const Navigation = () => {
  return (
    <>
        <nav className="fixed top-0 w-full z-90">
            <div className="main-container py-6 flex justify-between items-center">
                <h2 className="font-logo text-6xl">YK.</h2>
                <div className="cursor-pointer flex flex-col gap-1.5">
                    <span className="inline-block w-8 lg:w-10 h-1 bg-white"></span>
                    <span className="inline-block w-8 lg:w-10 h-1 bg-white"></span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigation