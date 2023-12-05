import team1 from "./imgs/team-01.png"
import team2 from "./imgs/team-02.png"
import team3 from "./imgs/team-03.png"
import team4 from "./imgs/team-04.png"
import team5 from "./imgs/team-05.png"
import "./css/projects.css"
const Projects = () => {
    return (
        <main className="p-5">
            <h1 className="py-[10px] ">projects</h1>
            <div className="containers py-[10px] ">

                <div className="box-m">
                    <p className="prog-time">15/10/2021</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Elzero Dashboard</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Elzero Dashboard Project Design And Programming And Hosting
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                            <img className="width-1" src={team4} alt="" />
                            <img className="width-1" src={team5} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Programming</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Hosting</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Marketing</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span style={{ width: "50%", backgroundColor: "red" }}></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$2500</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2021</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Academy Portal</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Academy Portal Project Design And Programming
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Programming</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "80%", backgroundColor: "rgb(18, 199, 18)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$1800</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2021</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Chatting Application</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Chatting Application Project Design
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "100%", backgroundColor: "rgb(79, 137, 245)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$950</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2021</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Ahmed Dashboard</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Ahmed Dashboard Project Design And Programming And Hosting
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                            <img className="width-1" src={team4} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Programming</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Hosting</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Marketing</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "60% ", backgroundColor: "rgb(18, 199, 18)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$1700</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2021</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Ahmed Portal</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Ahmed Portal Project Design And Programming
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Programming</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "75%", backgroundColor: "rgb(18, 199, 18)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$850</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2021</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Mohamed Application</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Mohamed Application Project Design
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span style={{ width: "40%", backgroundColor: "red" }}></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$950</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2022</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Mohamed Dashboard</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Mohamed Dashboard Project Design And Programming And Hosting
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                            <img className="width-1" src={team4} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Programming</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Hosting</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Marketing</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "60%", backgroundColor: "rgb(18, 199, 18)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$1950</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2022</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Mohamed Portal</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Mohamed Portal Project Design And Programming
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Programming</p>
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "60%", backgroundColor: "rgb(18, 199, 18)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$1650</p>
                        </div>
                    </div>
                </div>

                <div className="box-m">
                    <p className="prog-time">15/06/2022</p>
                    <div className="p-5 flex-gap-5-column text-[1.2rem] ">
                        <p className="font-bold py-[10px] ">Ahmed Application</p>
                        <p className="text-[#888]  leading-6 text-[.9rem] ">
                            Ahmed Application Project Design
                        </p>
                        <div className="prog-img p-15up-down">
                            <img className="width-1" src={team1} alt="" />
                            <img className="width-1" src={team2} alt="" />
                            <img className="width-1" src={team3} alt="" />
                        </div>
                        <div
                            className="flex-start-column-767 flex-gap-5-row flex-wrap info-tip py-[15px] flex-gap-5-row ju-flex-end"
                        >
                            <p className="btn-shape text-[.9rem]  bg-[#eee] ">Design</p>
                        </div>
                        <div
                            className="flex-start-column-767-2 justify-between  flex-wrap pt-[10px]  info-tip flex-gap-5-row"
                        >
                            <p className="prog-bar bg-[#eee] ">
                                <span
                                    style={{ width: "90%", backgroundColor: "rgb(18, 199, 18)" }}
                                ></span>
                            </p>
                            <p className="text-[1.2rem]  text-[#888] ">$950</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Projects;