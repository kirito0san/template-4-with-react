import { Link } from "react-router-dom";
import "./css/courses.css"
import png1 from "./imgs/team-01.png"
import png2 from "./imgs/team-02.png"
import png3 from "./imgs/team-03.png"
import png4 from "./imgs/team-04.png"
import png5 from "./imgs/team-05.png"
import png6 from "./imgs/team-01.png"
import png7 from "./imgs/team-02.png"
import png8 from "./imgs/team-03.png"
import png9 from "./imgs/team-04.png"
import png10 from "./imgs/team-05.png"
const Courses = () => {
    return (
        <main className="p-5">
            <h1 className="py-[10px] ">courses</h1>
            <div className="containers py-[10px] ">
                <div className="box-m">
                    <img className="team-img" src={png1} alt="" />
                    <div className="course-img num1"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Mastering Web Design</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design
                            Architecture
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 850
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 150
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img" src={png2} alt="" />
                    <div className="course-img num2"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Data Structure And Algorithms</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And
                            Conquering{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 1150
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 210
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img" src={png3} alt="" />
                    <div className="course-img num3"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Responsive Web Design</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Mastering Responsive Web Design And Media Queries And Know Everything About
                            Breakpoints{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 650
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 90
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img " src={png4} alt="" />
                    <div className="course-img num4"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Mastering Python</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 950
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 250
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img " src={png5} alt="" />
                    <div className="course-img num5"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">PHP Examples</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            PHP Tutorials And Examples And Practice On Web Application And Connecting With
                            Databases{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 850
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 150
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img " src={png6} alt="" />
                    <div className="course-img num6"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Data Structure And Algorithms</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And
                            Conquering{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 1150
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 210
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img " src={png7} alt="" />
                    <div className="course-img num7"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Responsive Web Design</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Mastering Responsive Web Design And Media Queries And Know Everything About
                            Breakpoints{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 650
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 90
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img " src={png8} alt="" />
                    <div className="course-img num8"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Mastering Web Design</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design
                            Archticture{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 850
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 145
                            </p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <img className="team-img " src={png9} alt="" />
                    <div className="course-img num9"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">PHP Examples</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            PHP Tutorials And Examples And Practice On Web Application And Connecting With
                            Databases{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 850
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 150
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box-m">
                    <img className="team-img " src={png10} alt="" />
                    <div className="course-img num10"></div>
                    <div className="p-5 flex-gap-5-column">
                        <h2 className="font-bold py-[10px] ">Mastering Python</h2>
                        <p className="text-[#888]  leading-6 pt-[10px] ">
                            {" "}
                            Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life{" "}
                        </p>
                        <Link className="btn-shape bg-[#0075ff]  Course-Info" href="#">
                            Course Info
                        </Link>
                        <div className="info-cash py-[15px] flex-gap-5-row justify-between ">
                            <p className="text-[#888] ">
                                <i className="fa-regular fa-user"></i> 950
                            </p>
                            <p className="text-[#888] ">
                                <i className="fa-solid fa-dollar-sign"></i> 250
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Courses;
