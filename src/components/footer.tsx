import Logoicon from '../assets/logoicon.png'
const Footer = () => {
    return (
        <div className='bg-black flex flex-col items-center p-3'>
            <a href="/">
                <div className="flex items-center text-2xl cursor-pointer">
                    <img className="w-[60px]" src={Logoicon} alt="Logo" />
                    <h1 className="font-bold text-white">Speak2Text</h1>
                </div>
            </a>
        </div>
    )
}

export default Footer;