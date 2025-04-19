import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Media () {
    return (
        <div className="flex gap-2 bg-black w-fit">
            <a className="bg-black rounded-lg px-2.5 content-center  py-2.5 text-white">
                <FaFacebookF size={16}/>
            </a>
            <a className="bg-black rounded-lg px-2.5 content-center py-2.5 text-white">
                <RiTwitterXFill size={16}/>
            </a>
            <a className="bg-black rounded-lg px-2.5 content-center  py-2.5 text-white">
                <FaGooglePlusG size={20}/>
            </a>
            <a className="bg-black rounded-lg px-2.5 content-center  py-2.5 text-white">
                <FaInstagram size={16}/>
            </a>
        </div>
    )
}