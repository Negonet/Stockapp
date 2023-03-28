




export const Footer = () => {

    return (
           
                <footer className="fixed bottom-0 left-0 w-full z-2">
                    <div className="max-sm:mt-2 max-w-[1240px] my-1 text-center mx-auto container max-sm:py-1 md:p-6 p-4 md:flex items-center justify-between  bg-white/10 border-[0.1px] border-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
                        <span className="text-sm sm:text-center text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">React developer UY</a>
                        </span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" className="mr-4 max-sm:hidden hover:underline md:mr-6 ">Acerca</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 max-sm:hidden hover:underline md:mr-6">Politicas de privacidad</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 max-sm:hidden hover:underline md:mr-6">Lincencias</a>
                            </li>
                            <li>
                                <a href="#" className="max-sm:hidden hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </footer>
        


    )

}