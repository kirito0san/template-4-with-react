import { Link } from "react-router-dom";
import "./css/friends.css"
import friend1 from "./imgs/friend-01.jpg"
import friend2 from "./imgs/friend-02.jpg"
import friend3 from "./imgs/friend-03.jpg"
import friend4 from "./imgs/friend-04.jpg"
import friend5 from "./imgs/friend-05.jpg"
const Friends = () => {
    return (
        <main className="p-5">
            <h1 className="py-[10px] ">friends</h1>
            <div className="containers py-[10px] ">
                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend1} alt="" />
                        <h3>sasa bashsa</h3>
                        <p className="text-[#888] ">full stack Developer</p>
                    </div>
                    <div className="flex-gap-5-row center-a justify-between  border-b-backgroundcolor2">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 99 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 15 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 25 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 02/10/2021</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend2} alt="" />
                        <h3>Omar Fathy</h3>
                        <p className="text-[#888] ">Cloud Developer</p>
                    </div>
                    <div className="flex-gap-5-row center-a justify-between  border-b-backgroundcolor2">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 30 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 11 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 12 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 02/08/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend3} alt="" />
                        <h3>Omar Ahmed</h3>
                        <p className="text-[#888] ">Mobile Developer</p>
                    </div>
                    <div className="flex-gap-5-row center-a justify-between  border-b-backgroundcolor2">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 80 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 20 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 18 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  pt-[10px]  text-[.8rem] center-a">
                        <p className="text-[#888] ">Joined 02/06/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend4} alt="" />
                        <h3>Shady Nabil</h3>
                        <p className="text-[#888] ">Back-End Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 70 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 30 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 18 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/06/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend5} alt="" />
                        <h3>Mohamed Ibrahim</h3>
                        <p className="text-[#888] ">Algorithm Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 80 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 50 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 18 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/05/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend3} alt="" />
                        <h3>Amr Hendawy</h3>
                        <p className="text-[#888] ">Back-End Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 60 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 70 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 28 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/08/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend1} alt="" />
                        <h3>Mahmoud Adel</h3>
                        <p className="text-[#888] ">Cloud Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 30 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 20 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 18 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/09/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend4} alt="" />
                        <h3>Ahmed Abuzaid</h3>
                        <p className="text-[#888] ">Cloud Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 50 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 30 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 18 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/10/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend5} alt="" />
                        <h3>Gareeb Elshiekh</h3>
                        <p className="text-[#888] ">JavaScript Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 80 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 20 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 15 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/11/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="box-ms">
                    <div className="i-head flex-gap-5-row">
                        <i className="fa-solid fa-phone round"></i>
                        <i className="fa-regular fa-envelope round"></i>
                    </div>
                    <div className="friend-img flex-gap-10-column center-a border-b-backgroundcolor2 p-15up-down">
                        <img src={friend1} alt="" />
                        <h3>Hamza</h3>
                        <p className="text-[#888] ">Front-End Developer</p>
                    </div>
                    <div className="flex-gap-5-row border-b-backgroundcolor2   center-a justify-between ">
                        <div className="body-i py-[15px] flex-gap-10-column justify-between  ">
                            <p>
                                <i className="fa-regular fa-face-smile"></i> 80 friend
                            </p>
                            <p>
                                <i className="fa-solid fa-code-commit"></i> 20 projects
                            </p>
                            <p>
                                <i className="fa-solid fa-newspaper"></i> 15 articles
                            </p>
                        </div>
                        <div className="vip">
                            <h2>vip</h2>
                        </div>
                    </div>
                    <div className="Joined flex-gap-5-row justify-between  text-[.8rem] pt-[10px]  center-a">
                        <p className="text-[#888] ">Joined 28/06/2020</p>
                        <div className="flex-gap-5-row ">
                            <Link className="btn-shape bg-backgroundcolor3 " href="profile.html">
                                profile
                            </Link>
                            <Link className="btn-shape color-red" href="#">
                                remove
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Friends;
