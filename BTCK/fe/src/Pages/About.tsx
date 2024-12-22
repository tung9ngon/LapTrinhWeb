import SideBar from '../Components/SideBar';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (
        <>
            <SideBar />
            <section className="w-full container mx-auto flex flex-col justify-center px-20 ml-32">
                <div className="mx-aut flex flex-col items-center gap-2 overflow-hidden ">
                    <h1 className="font-bold text-2xl mb-4 text-brandColor">
                        About T-RESTAURANT
                    </h1>
                    <p className="text-white">
                        Chào mừng bạn đến với T-RESTAURANT – nơi hội tụ những món ăn ngon, độc đáo và tràn đầy hương vị của các quốc gia!
                    </p>
                    <p className="text-white">
                        Hãy để T-RESTAURANT mang đến cho bạn những bữa ăn trọn vẹn, từ nguyên liệu tươi ngon đến hương vị khó quên.
                    </p>
                    <p className="text-white">
                        Đến với T-RESTAURANT, bạn sẽ được trải nghiệm hành trình ẩm thực tuyệt vời với các món ăn chất lượng và dịch vụ tận tâm.
                    </p>
                    <p className="text-white">
                        Cùng khám phá thực đơn phong phú tại T-RESTAURANT – nơi mọi bữa ăn đều là một niềm vui!
                    </p>
                    <p className="text-white">
                        Đưa ẩm thực vào cuộc sống với T-RESTAURANT – hương vị đậm đà, giá trị đích thực.
                    </p>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-brandColor">phamxuantung03102005@gmail.com</a>
                    <p className="leading-normal my-5 text-white">57 Truong Thi Ward.
                        <br />Nam Dinh, Viet Nam
                    </p>
                    <span className="inline-flex">
                        <a className="text-brandColor cursor-pointer" href="www.facebook.com" target="_blank">
                            <FaFacebook className="w-6 h-6" />
                        </a>
                        <a className="ml-4 text-brandColor cursor-pointer" href="www.twitter.com" target="_blank">
                            <FaTwitter className="w-6 h-6" />
                        </a>
                        <a className="ml-4 text-brandColor cursor-pointer" href="www.instagram.com" target="_blank">
                            <FaInstagram className="w-6 h-6" />
                        </a>
                        <a className="ml-4 text-brandColor cursor-pointer" href="www.linkedin.com" target="_blank">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                    </span>
                </div>
            </section>
        </>
    )
}

export default About