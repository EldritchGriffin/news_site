import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Media () {
    return (
        <div className="flex gap-2 w-fit">
            <a className="bg-[#222222] border-white rounded-lg px-2.5 content-center py-2.5 cursor-pointer text-white hover:text-[#d42a23]">
                <FaFacebookF size={16}/>
            </a>
            <a className="bg-[#222222] rounded-lg border-white px-2.5 content-center py-2.5 cursor-pointer text-white hover:text-[#d42a23]">
                <RiTwitterXFill size={16}/>
            </a>
            <a className="bg-[#222222] rounded-lg px-2.5 content-center border-white cursor-pointer py-2.5 text-white hover:text-[#d42a23]">
                <FaInstagram size={16}/>
            </a>
        </div>
    )
}