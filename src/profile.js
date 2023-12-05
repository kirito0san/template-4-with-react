
import './css/profile.css'
import avtar from "./imgs/avatar.png"
import activity1 from "./imgs/activity-01.png"
import activity2 from "./imgs/activity-02.png"
import activity3 from "./imgs/activity-03.png"
const Profile = () => {
    return (
        <main className="p-5">
            <h1 className="py-[10px] ">profile</h1>
            <div className="containers profile py-[10px] ">
                <div className="flex">
                    <div className="gap-[10px] flex-column center-a">
                        <img src={avtar} alt="" />
                        <h3 >ahmed syed</h3>
                        <p className="text-[#888] ">Level 180</p>
                        <span className="profile-prog"></span>
                        <div>
                            <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "#f59e0b" }}></i>
                        </div>
                        <p className="text-[.8rem] text-[#888] ">5500 rating</p>
                    </div>
                    <div className="grow-1 border-l-backgroundcolor2 md:border-l border-0 fillav">
                        <div
                            className="grids border-b-backgroundcolor2 border-b center-a-flex-end pb-[10px] center-a"
                        >
                            <div className="flex-gap-10-column !p-0">
                                <h3 className='pt-3'>General Information</h3>
                                <p className="sm-2">
                                    <span className="text-[#888] ">Full Name </span> ahmed syed
                                </p>
                            </div>
                            <p className="sm-2"><span className="text-[#888] ">Gender:</span>male</p>
                            <p className="sm-2"><span className="text-[#888] ">Country:</span> Egypt</p>
                            <label className="cilck prof center-a" htmlFor="General">
                                <input id="General" name="General" type="checkbox" />
                                <span className="cilck-span center-a text-[.9rem] -hight"></span>
                            </label>
                        </div>
                        <div
                            className="grids border-b-backgroundcolor2 border-b center-a-flex-end pb-[10px] center-a"
                        >
                            <div className="flex-gap-10-column">
                                <h3 className='pt-3'>Personal Information</h3>
                                <p className="sm-2"><span className="text-[#888] ">Email: </span> o@nn.sa</p>
                            </div>
                            <p className="sm-2"><span className="text-[#888] ">Phone:</span>01119089816</p>
                            <p className="sm-2">
                                <span className="text-[#888] "> Date Of Birth:</span> 7/12/2000
                            </p>
                            <label className="cilck prof center-a" htmlFor="Personal">
                                <input id="Personal" name="Personal" type="checkbox" />
                                <span className="cilck-span center-a text-[.9rem] -hight"></span>
                            </label>
                        </div>
                        <div
                            className="grids border-b-backgroundcolor2 border-b center-a-flex-end pb-[10px] center-a"
                        >
                            <div className="flex-gap-10-column">
                                <h3 className='pt-3'>Job Information</h3>
                                <p className="sm-2">
                                    <span className="text-[#888] ">Title: </span> Full Stack Developer
                                </p>
                            </div>
                            <p className="sm-2">
                                <span className="text-[#888] "> Programming Language:</span> Python
                            </p>
                            <p className="sm-2">
                                <span className="text-[#888] "> Years Of Experience:</span> +15
                            </p>
                            <label className="cilck prof center-a" htmlFor="Job">
                                <input id="Job" name="Job " type="checkbox" />
                                <span className="cilck-span center-a text-[.9rem] -hight"></span>
                            </label>
                        </div>
                        <div className="grids center-a-flex-end pb-[10px] center-a">
                            <div className="flex-gap-10-column">
                                <h3 className='pt-3'>Billing Information</h3>
                                <p className="sm-2">
                                    <span className="text-[#888] ">Payment Method: </span> Paypal
                                </p>
                            </div>
                            <p className="sm-2">
                                <span className="text-[#888] "> Email:</span> email@website.com
                            </p>
                            <p className="sm-2">
                                <span className="text-[#888] "> Subscription:</span> Monthly
                            </p>
                            <label className="cilck prof center-a" htmlFor="Billing ">
                                <input id="Billing " name="Billing " type="checkbox" />
                                <span className="cilck-span center-a text-[.9rem] -hight"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="my-skill">
                    <h2>my skill</h2>
                    <p className="text-[#888] ">Complete Skills List</p>

                    <div
                        className="flex-gap-5-row flex-wrap border-b-backgroundcolor2 pb-[10px] py-[10px] "
                    >
                        <p className="btn-shape">HTML</p>
                        <p className="btn-shape">Pugjs</p>
                        <p className="btn-shape">HAML</p>
                    </div>
                    <div
                        className="flex-gap-5-row flex-wrap border-b-backgroundcolor2 pb-[10px]  py-[15px] "
                    >
                        <p className="btn-shape">Reactjs</p>
                        <p className="btn-shape">Vuejs</p>
                    </div>
                    <div
                        className="flex-gap-5-row flex-wrap border-b-backgroundcolor2 pb-[10px]  py-[15px] "
                    >
                        <p className="btn-shape">Jasmine</p>
                        <p className="btn-shape">Jest</p>
                    </div>
                    <div
                        className="flex-gap-5-row flex-wrap border-b-backgroundcolor2 pb-[10px]  py-[15px] "
                    >
                        <p className="btn-shape">Laravel</p>
                        <p className="btn-shape">PHP</p>
                    </div>
                    <div
                        className="flex-gap-5-row flex-wrap border-b-backgroundcolor2 pb-[10px]  py-[15px] "
                    >
                        <p className="btn-shape">JavaScript</p>
                        <p className="btn-shape">TypeScript</p>
                    </div>
                    <div
                        className="flex-gap-5-row flex-wrap border-b-backgroundcolor2 pb-[10px]  py-[15px] "
                    >
                        <p className="btn-shape">CSS</p>
                        <p className="btn-shape">SASS</p>
                        <p className="btn-shape">Stylus</p>
                    </div>
                    <div className="flex-gap-5-row flex-wrap pb-[10px]  py-[15px] ">
                        <p className="btn-shape">Django</p>
                        <p className="btn-shape">Python</p>
                    </div>
                </div>
                <div className="Latest-Activities">
                    <h2>Latest Activities</h2>
                    <p className="text-[#888] ">Latest Activities Done By The User</p>

                    <div className="flex-gap-10-row justify-between  border-b-backgroundcolor2  py-[15px] ">
                        <div className="flex-gap-10-row">
                            <img className="width-1" src={activity1} alt="" />
                            <div className="justify-between  flex-gap-5-column">
                                <p>Store</p>
                                <p>Bought The Mastering Python Course</p>
                            </div>
                        </div>
                        <div className="justify-between  flex-gap-5-column center-a-flex-end">
                            <p>18:10</p>
                            <p className="text-[#888] ">yasterday</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-row justify-between  border-b-backgroundcolor2  py-[15px] ">
                        <div className="flex-gap-10-row">
                            <img className="width-1" src={activity2} alt="" />
                            <div className="justify-between  flex-gap-5-column">
                                <p>Academy</p>
                                <p>Got The PHP Certificate</p>
                            </div>
                        </div>
                        <div className="justify-between  flex-gap-5-column center-a-flex-end">
                            <p>16:05</p>
                            <p className="text-[#888] ">yasterday</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-row justify-between  border-b-backgroundcolor2  py-[15px] ">
                        <div className="flex-gap-10-row">
                            <img className="width-1" src={activity3} alt="" />
                            <div className="justify-between  flex-gap-5-column">
                                <p>Badges</p>
                                <p>Unlocked The 10 Skills Badge</p>
                            </div>
                        </div>
                        <div className="justify-between  flex-gap-5-column center-a-flex-end">
                            <p>18:05</p>
                            <p className="text-[#888] ">yasterday</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-row justify-between    py-[15px] ">
                        <div className="flex-gap-10-row">
                            <img className="width-1" src={activity1} alt="" />
                            <div className="justify-between  flex-gap-5-column">
                                <p>Store</p>
                                <p>Bought The Typescript Course</p>
                            </div>
                        </div>
                        <div className="justify-between  flex-gap-5-column center-a-flex-end">
                            <p>12:10</p>
                            <p className="text-[#888] ">yasterday</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;