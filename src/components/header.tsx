import Logoicon from "../assets/logoicon.png";
import LinkedinIcon from "../assets/linkedinicon.png";
import Githubicon from "../assets/githubicon.png"

const Header = () => {
    return (
        <nav className="flex justify-between flex-wrap p-5 px-10">
            <div className="flex items-center text-2xl cursor-pointer">
                <img className="w-[60px]" src={Logoicon} alt="Logo" />
                <h1 className="font-bold">Speak2Text</h1>
            </div>
            <ul className="flex gap-3 items-center">
                <li className="w-[30px]">
                    <a href="https://www.linkedin.com/in/agshin-sh-mammadov/" target="blank">
                        <img src={LinkedinIcon} alt="Linkedin" />
                    </a>
                </li>
                <li className="w-[30px]">
                    <a href="https://github.com/agshinmammadov/speechtotext.git">
                        <img src={Githubicon} alt="Github" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
