/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.css"
import welcome from "./imgs/welcome.png"
import new1 from "./imgs/news-01.png"
import new2 from "./imgs/news-02.png"
import new3 from "./imgs/news-03.png"
import new4 from "./imgs/news-04.png"
import team1 from "./imgs/team-01.png"
import team2 from "./imgs/team-02.png"
import team3 from "./imgs/team-03.png"
import team4 from "./imgs/team-04.png"
import team5 from "./imgs/team-05.png"
const Dashboard = () => {
    return (
        <main className="p-5">
            <h1 className=" py-[10px] ">dashboard</h1>
            <div className="containers py-[10px] ">
                <div className="Welcome">
                    <div className="head p-[10px]">
                        <div className="p-[10px] flex-gap-5-column">
                            <h3>welcome</h3>
                            <p>elzero</p>
                        </div>
                        <img src={welcome} alt="" />
                    </div>
                    <div className="profile-img"></div>
                    <div className="body p-5">
                        <div>
                            <p>ahmed syed</p>
                            <p>developer</p>
                        </div>
                        <div>
                            <p>80</p>
                            <p>Projects</p>
                        </div>
                        <div>
                            <p>$8500</p>
                            <p>Earned</p>
                        </div>
                    </div>
                    <div className="link">
                        <a className="p-[10px]" href="./html/profile.html">profile</a>
                    </div>
                </div>
                <div className="quick-draft flex-gap-5-column">
                    <h3>quick draft</h3>
                    <p className="text-[#888] ">Write A Draft For Your Ideas</p>
                    <form action="">
                        <input type="text" name="text" placeholder="title" id="text" />
                        <textarea
                            name="your-thought"
                            id="your-thought"
                            cols="30"
                            placeholder="your thought"
                            rows="10"
                        ></textarea>
                        <input type="submit" id="submit" value="save" />
                    </form>
                </div>
                <div className="yearlay-targets">
                    <h3>yearlay targets</h3>
                    <p className="text-[#888] ">Targets Of The Year</p>
                    <div className="flex-gap-10-column">
                        <div className="card money">
                            <i>$</i>
                            <div className="flex-gap-10-column">
                                <p className="text-[#888] ">money</p>
                                <p className="font-extrabold">$20.000</p>
                                <p className="prog">
                                    <span style={{ width: "80%" }} data-prog="80%"></span>
                                </p>
                            </div>
                        </div>
                        <div className="card Projects">
                            <i className="fa-solid fa-code"></i>
                            <div className="flex-gap-10-column">
                                <p className="text-[#888] ">Projects</p>
                                <p className="font-extrabold">24</p>
                                <p className="prog">
                                    <span style={{ width: "55%" }} data-prog="55%"></span>
                                </p>
                            </div>
                        </div>
                        <div className="card Team">
                            <i className="fa-solid fa-user-group"></i>
                            <div className="flex-gap-10-column">
                                <p className="text-[#888] ">Team</p>
                                <p className="font-extrabold">12</p>
                                <p className="prog">
                                    <span style={{ width: "75%" }} data-prog="75%"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Tickets-Statistics flex-gap-10-column">
                    <h3>Tickets Statistics</h3>
                    <p className="text-[#888] ">Everything About Support Tickets</p>
                    <div className="flex-gap-10-row">
                        <div className="flex-gap-10-column">
                            <i className="fa-regular fa-rectangle-list"></i>
                            <p className="font-extrabold text-xl">2500</p>
                            <p className="text-[#888] ">total</p>
                        </div>
                        <div className="flex-gap-10-column">
                            <i className="fa-solid fa-rotate"></i>
                            <p className="font-extrabold text-xl">500</p>
                            <p className="text-[#888] ">Pending</p>
                        </div>
                        <div className="flex-gap-10-column">
                            <i className="fa-regular fa-circle-check"></i>
                            <p className="font-extrabold text-xl">1900</p>
                            <p className="text-[#888] ">Closed</p>
                        </div>
                        <div className="flex-gap-10-column">
                            <i className="fa-regular fa-circle-xmark"></i>
                            <p className="font-extrabold text-xl">100</p>
                            <p className="text-[#888] ">Deleted</p>
                        </div>
                    </div>
                </div>
                <div className="Latest-News">
                    <h3>Latest News</h3>
                    <div className="flex-gap-10-column">
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <img src={new1} alt="" />
                                <div className="flex-gap-10-column">
                                    <p className="font-extrabold">Created SASS Section</p>
                                    <p className="text-[#888] ">New SASS Examples & Tutorials</p>
                                </div>
                            </div>
                            <p>3 days ago</p>
                        </div>

                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <img src={new2} alt="" />
                                <div className="flex-gap-10-column">
                                    <p className="font-extrabold">Changed The Design</p>
                                    <p className="text-[#888] ">A Brand New Website Design</p>
                                </div>
                            </div>
                            <p>5 days ago</p>
                        </div>

                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <img src={new3} alt="" />
                                <div className="flex-gap-10-column">
                                    <p className="font-extrabold">Team Increased</p>
                                    <p className="text-[#888] ">3 Developers Joined The Team</p>
                                </div>
                            </div>
                            <p>7 days ago</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <img src={new4} alt="" />
                                <div className="flex-gap-10-column">
                                    <p className="font-extrabold">Added Payment Gateway</p>
                                    <p className="text-[#888] ">Many New Payment Gateways Added</p>
                                </div>
                            </div>
                            <p>9 days ago</p>
                        </div>
                    </div>
                </div>

                <div className="latest-tasks">
                    <h3>latest tasks</h3>
                    <div className="flex-gap-10-column">
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-column">
                                <p className="font-extrabold">Record One New Video</p>
                                <p>Record Python Create Exe Project</p>
                            </div>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-column">
                                <p className="font-extrabold">Write Article</p>
                                <p>Write Low Level vs High Level Languages</p>
                            </div>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-column">
                                <p className="font-extrabold del-op-4">Attend The Meeting</p>
                                <p className="del-op-2">Publish Academy Programming Project</p>
                            </div>
                            <i className="fa-solid fa-trash-can text-[#888] "></i>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-column">
                                <p className="font-extrabold">Finish Project</p>
                                <p>Publish Academy Programming Project</p>
                            </div>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-column">
                                <p className="font-extrabold">Finish Lesson</p>
                                <p>Finish Teaching Flex Box</p>
                            </div>
                            <i className="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
                <div className="Top-Search-Items">
                    <h3>Top-Search-Items</h3>
                    <div className="flex-gap-10-column">
                        <div className="flex-gap-10-row">
                            <p className="text-[#888] ">Keyword</p>
                            <p className="not">search count</p>
                        </div>

                        <div className="flex-gap-10-row">
                            <p className="font-extrabold">Programming</p>
                            <p>220</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="font-extrabold">JavaScript</p>
                            <p>180</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="font-extrabold">PHP</p>
                            <p>160</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="font-extrabold">Code</p>
                            <p>145</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="font-extrabold">Design</p>
                            <p>110</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="font-extrabold">Logic</p>
                            <p>95</p>
                        </div>
                    </div>
                </div>

                <div className="Latest-Uploads">
                    <h3>Latest Uploads</h3>
                    <div className="flex-gap-10-column">
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
                                        fill="#e2e5e7"
                                    />
                                    <path
                                        d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
                                        fill="#b0b7bd"
                                    />
                                    <path fill="#cad1d8" d="M480 224l-96-96h96z" />
                                    <path
                                        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
                                        fill="#576d7e"
                                    />
                                    <path
                                        d="M132.784 311.472H110.4c-11.136 0-11.136-16.368 0-16.368h60.512c11.392 0 11.392 16.368 0 16.368h-21.248v64.592c0 11.12-16.896 11.392-16.896 0v-64.592h.016zm91.632 14.704l22.272-27.888c6.656-8.688 19.568 2.432 12.288 10.752-7.68 9.088-15.728 18.944-23.424 29.024l26.112 32.496c7.024 9.6-7.04 18.816-13.952 9.344l-23.536-30.192-23.152 30.832c-6.528 9.328-20.992-1.152-13.68-9.856l25.696-32.624c-8.048-10.096-15.856-19.936-23.664-29.024-8.064-9.6 6.912-19.44 12.784-10.48l22.256 27.616zm73.872-14.704H275.92c-11.136 0-11.136-16.368 0-16.368h60.496c11.392 0 11.392 16.368 0 16.368h-21.232v64.592c0 11.12-16.896 11.392-16.896 0v-64.592z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
                                        fill="#cad1d8"
                                    />
                                </svg>
                                <div className="flex-gap-10-column">
                                    <p className="font-bold">My-DLL-File.text</p>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <p>2.9mb</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
                                        fill="#e2e5e7"
                                    />
                                    <path
                                        d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
                                        fill="#b0b7bd"
                                    />
                                    <path fill="#cad1d8" d="M480 224l-96-96h96z" />
                                    <path
                                        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
                                        fill="#a066aa"
                                    />
                                    <path
                                        d="M92.816 303.152c0-4.224 3.312-8.848 8.688-8.848h29.568c16.624 0 31.6 11.136 31.6 32.496 0 20.224-14.976 31.472-31.6 31.472H109.68v16.896c0 5.648-3.552 8.832-8.176 8.832-4.224 0-8.688-3.184-8.688-8.832v-72.016zm16.864 7.28v31.856h21.376c8.56 0 15.344-7.552 15.344-15.488 0-8.96-6.784-16.368-15.344-16.368H109.68zm69.296-6c0-4.624 1.024-9.088 7.68-9.088 4.592 0 5.632 1.152 9.072 4.464l42.336 52.976v-49.632c0-4.224 3.696-8.848 8.064-8.848 4.608 0 9.072 4.624 9.072 8.848v72.016c0 5.648-3.456 7.792-6.784 8.832-4.464 0-6.656-1.024-10.352-4.464l-42.336-53.744v49.392c0 5.648-3.456 8.832-8.064 8.832s-8.704-3.184-8.704-8.832v-70.752h.016zM351.44 374.16c-9.088 7.536-20.224 10.752-31.472 10.752-26.88 0-45.936-15.36-45.936-45.808 0-25.84 20.096-45.92 47.072-45.92 10.112 0 21.232 3.456 29.168 11.264 7.808 7.664-3.456 19.056-11.12 12.288-4.736-4.624-11.392-8.064-18.048-8.064-15.472 0-30.432 12.4-30.432 30.432 0 18.944 12.528 30.448 29.296 30.448 7.792 0 14.448-2.304 19.184-5.76V348.08h-19.184c-11.392 0-10.24-15.632 0-15.632h25.584c4.736 0 9.072 3.6 9.072 7.568v27.248c0 2.288-1.008 4.448-3.184 6.896z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
                                        fill="#cad1d8"
                                    />
                                </svg>
                                <div className="flex-gap-10-column">
                                    <p className="font-bold">My-DLL-File.png</p>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <p>4.5mb</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
                                        fill="#e2e5e7"
                                    />
                                    <path
                                        d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
                                        fill="#b0b7bd"
                                    />
                                    <path fill="#cad1d8" d="M480 224l-96-96h96z" />
                                    <path
                                        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
                                        fill="#f15642"
                                    />
                                    <path
                                        d="M101.744 303.152c0-4.224 3.328-8.832 8.688-8.832h29.552c16.64 0 31.616 11.136 31.616 32.48 0 20.224-14.976 31.488-31.616 31.488h-21.36v16.896c0 5.632-3.584 8.816-8.192 8.816-4.224 0-8.688-3.184-8.688-8.816v-72.032zm16.88 7.28v31.872h21.36c8.576 0 15.36-7.568 15.36-15.504 0-8.944-6.784-16.368-15.36-16.368h-21.36zM196.656 384c-4.224 0-8.832-2.304-8.832-7.92v-72.672c0-4.592 4.608-7.936 8.832-7.936h29.296c58.464 0 57.184 88.528 1.152 88.528h-30.448zm8.064-72.912V368.4h21.232c34.544 0 36.08-57.312 0-57.312H204.72zm99.152 1.024v20.336h32.624c4.608 0 9.216 4.608 9.216 9.072 0 4.224-4.608 7.68-9.216 7.68h-32.624v26.864c0 4.48-3.184 7.92-7.664 7.92-5.632 0-9.072-3.44-9.072-7.92v-72.672c0-4.592 3.456-7.936 9.072-7.936h44.912c5.632 0 8.96 3.344 8.96 7.936 0 4.096-3.328 8.704-8.96 8.704h-37.248v.016z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
                                        fill="#cad1d8"
                                    />
                                </svg>
                                <div className="flex-gap-10-column">
                                    <p className="font-bold">My-DLL-File.pdf</p>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <p>8.6mb</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
                                        fill="#e2e5e7"
                                    />
                                    <path
                                        d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
                                        fill="#b0b7bd"
                                    />
                                    <path fill="#cad1d8" d="M480 224l-96-96h96z" />
                                    <path
                                        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
                                        fill="#84bd5a"
                                    />
                                    <path
                                        d="M132.64 384c-8.064 0-11.264-7.792-6.656-13.296l45.552-60.512h-37.76c-11.12 0-10.224-15.712 0-15.712h51.568c9.712 0 12.528 9.184 5.632 16.624l-43.632 56.656h41.584c10.24 0 11.52 16.256-1.008 16.256h-55.28V384zm79.408-80.848c0-10.496 16.896-10.88 16.896 0v73.04c0 10.608-16.896 10.88-16.896 0v-73.04zm39.568 0c0-4.224 3.328-8.832 8.704-8.832h29.552c16.64 0 31.616 11.136 31.616 32.48 0 20.224-14.976 31.488-31.616 31.488h-21.36v16.896c0 5.632-3.584 8.816-8.192 8.816-4.224 0-8.704-3.184-8.704-8.816v-72.032zm16.88 7.28v31.872h21.36c8.576 0 15.36-7.568 15.36-15.504 0-8.944-6.784-16.368-15.36-16.368h-21.36z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
                                        fill="#cad1d8"
                                    />
                                </svg>
                                <div className="flex-gap-10-column">
                                    <p className="font-bold">My-DLL-File.zip</p>
                                    <p>Admin</p>
                                </div>
                            </div>
                            <p>1.6mb</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
                                        fill="#e2e5e7"
                                    />
                                    <path
                                        d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
                                        fill="#b0b7bd"
                                    />
                                    <path fill="#cad1d8" d="M480 224l-96-96h96z" />
                                    <path
                                        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
                                        fill="#576d7e"
                                    />
                                    <path
                                        d="M118.08 384c-4.224 0-8.832-2.32-8.832-7.936v-72.656c0-4.608 4.608-7.936 8.832-7.936h29.296c58.464 0 57.184 88.528 1.152 88.528H118.08zm8.064-72.928v57.312h21.232c34.544 0 36.08-57.312 0-57.312h-21.232zm82.464-7.92c0-4.224 3.584-7.808 8.064-7.808 4.096 0 7.552 3.6 7.552 7.808v64.096h34.8c12.528 0 12.8 16.752 0 16.752h-42.336c-4.48 0-8.064-3.184-8.064-7.808v-73.04h-.016zm74.944 0c0-4.224 3.584-7.808 8.064-7.808 4.096 0 7.552 3.6 7.552 7.808v64.096h34.8c12.528 0 12.8 16.752 0 16.752h-42.336c-4.48 0-8.064-3.184-8.064-7.808v-73.04h-.016z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
                                        fill="#cad1d8"
                                    />
                                </svg>
                                <div className="flex-gap-10-column">
                                    <p className="font-bold">My-DLL-File.dll</p>
                                    <p>ahmed</p>
                                </div>
                            </div>
                            <p>2.6mb</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <div className="flex-gap-10-row">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
                                        fill="#e2e5e7"
                                    />
                                    <path
                                        d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z"
                                        fill="#b0b7bd"
                                    />
                                    <path fill="#cad1d8" d="M480 224l-96-96h96z" />
                                    <path
                                        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
                                        fill="#f15642"
                                    />
                                    <path
                                        d="M98.128 314.672c2.944-24.832 40.416-29.296 58.064-15.728 8.704 7.024-.496 18.16-8.192 12.528-9.456-6-30.96-8.816-33.648 4.464-3.456 20.992 52.208 8.976 51.296 43.008-.896 32.496-47.968 33.248-65.632 18.672-4.224-3.456-4.096-9.072-1.776-12.544 3.312-3.312 7.024-4.464 11.376-.88 10.496 7.152 37.488 12.528 39.408-5.648-1.648-18.912-54.864-7.536-50.896-43.872zm167.36 54.752l2.048 2.416c8.432 7.68-2.56 20.224-11.136 12.16l-4.336-3.44c-6.656 4.592-14.448 6.784-24.816 6.784-22.512 0-48.24-15.504-48.24-46.976s25.584-47.456 48.24-47.456c23.776 0 47.072 15.984 47.072 47.456 0 12.16-3.088 21.136-8.832 29.056zm-7.696-29.056c0-20.336-15.984-30.688-30.56-30.688-15.728 0-31.216 10.336-31.216 30.688 0 15.504 13.168 30.208 31.216 30.208 4.592 0 9.072-1.152 13.552-2.304l-14.576-13.44c-6.784-8.192 3.968-19.84 12.528-12.288l14.464 14.448c3.184-4.464 4.592-9.968 4.592-16.624zm35.376-37.216c0-4.224 3.584-7.808 8.064-7.808 4.096 0 7.552 3.6 7.552 7.808v64.096h34.8c12.528 0 12.8 16.752 0 16.752h-42.336c-4.48 0-8.064-3.184-8.064-7.792v-73.056h-.016z"
                                        fill="#fff"
                                    />
                                    <path
                                        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
                                        fill="#cad1d8"
                                    />
                                </svg>
                                <div className="flex-gap-10-column">
                                    <p className="font-bold">My-DLL-File.sql</p>
                                    <p>ahmed</p>
                                </div>
                            </div>
                            <p>2.6mb</p>
                        </div>
                    </div>
                </div>

                <div className="Last-Project-Progress">
                    <h3>Last Project Progress</h3>
                    <div className="flex-gap-10-column">
                        <div className="flex-gap-10-row">
                            <p></p>
                            <p>Got The Project</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p></p>
                            <p>Started The Project</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p></p>
                            <p>The Project About To Finish</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="work-on"></p>
                            <p>Test The Project</p>
                        </div>
                        <div className="flex-gap-10-row">
                            <p className="not"></p>
                            <p>Finish The Project & Get Money</p>
                        </div>
                    </div>
                </div>

                <div className="Reminders">
                    <h3>Reminders</h3>
                    <div className="flex-gap-20-column mt-[10px]">
                        <div className="flex-gap-20-column">
                            <p className="font-bold">Check My Tasks List</p>
                            <p className="text-[#888] ">28/09/2022 - 12:00am</p>
                        </div>
                        <div className="flex-gap-20-column">
                            <p className="font-bold">Check My Projects</p>
                            <p>26/10/2022 - 12:00am</p>
                        </div>
                        <div className="flex-gap-20-column">
                            <p className="font-bold">Call All My Clients</p>
                            <p>05/11/2022 - 12:00am</p>
                        </div>
                        <div className="flex-gap-20-column">
                            <p className="font-bold">Finish The Development Workshop</p>
                            <p>20/12/2022 - 12:00am</p>
                        </div>
                    </div>
                </div>

                <div className="Latest-Post">
                    <h3>Latest Post</h3>
                    <div className="flex-gap-20-column mt-[10px]">
                        <div className="flex-gap-5-column latest-img border-b-backgroundcolor2 border-b-[2px] center-j">
                            <p className="font-bold">Osama Elzero</p>
                            <p className="text-[#888] ">About 3 Hours Ago</p>
                        </div>
                        <div className="flex-gap-20-column  border-b-backgroundcolor2 pb-5 border-b-[2px]">
                            <p className="border-b-backgroundcolor2  leading-8 ">
                                You can fool all of the people some of the time, and some of
                                the people all of the time, but you can't fool all of the
                                people all of the time.
                            </p>
                        </div>
                        <div className="flex-gap-20-row-space-between">
                            <p className="text-[#888] "><i className="fa-regular fa-heart"></i> 1.8k</p>
                            <p className="text-[#888] "><i className="fa-regular fa-comments"></i> 500</p>
                        </div>
                    </div>
                </div>
                <div className="Social-Media-Stats">
                    <h3>Social Media Stats</h3>
                    <div className="flex-gap-10-column py-[10px] ">
                        <div className="twiter flex-gap-20-row-space-between">
                            <div className="center-a">
                                <i className="fa-brands fa-twitter"></i>
                                <p>90K Followers</p>
                            </div>
                            <a href="#">Follow</a>
                        </div>
                        <div className="facebook flex-gap-20-row-space-between">
                            <div className="center-a">
                                <i className="fa-brands fa-facebook-f"></i>
                                <p>2M Like</p>
                            </div>
                            <a href="#">Like</a>
                        </div>
                        <div className="youtube flex-gap-20-row-space-between">
                            <div className="center-a">
                                <i className="fa-brands fa-youtube"></i>
                                <p>1M Subs</p>
                            </div>
                            <a href="#">Subscribe</a>
                        </div>
                        <div className="linkedin flex-gap-20-row-space-between">
                            <div className="center-a">
                                <i className="fa-brands fa-linkedin"></i>
                                <p>70K Followers</p>
                            </div>
                            <a href="#">Follow</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive-table ">
                <h3>Projects</h3>
                <div className="table">
                    <table className="fs-15 w-full">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Finish Date</td>
                                <td>Client</td>
                                <td>Price</td>
                                <td>Team</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ministry Wikipedia</td>
                                <td>10 May 2022</td>
                                <td>Ministry</td>
                                <td>$5300</td>
                                <td>
                                    <img src={team1} alt="" />
                                    <img src={team2} alt="" />
                                    <img src={team3} alt="" />
                                    <img src={team4} alt="" />
                                </td>
                                <td>
                                    <span className=" btn-shape bg-backgroundcolor7 color-white"
                                    >Pending</span
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>Elzero Shop</td>
                                <td>12 Oct 2021</td>
                                <td>Elzero Company</td>
                                <td>$1500</td>
                                <td>
                                    <img src={team1} alt="" />
                                    <img src={team2} alt="" />
                                    <img src={team5} alt="" />
                                </td>
                                <td>
                                    <span className=" btn-shape bg-backgroundcolor5 color-white"
                                    >In Progress</span
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>Bouba App</td>
                                <td>05 Sep 2021</td>
                                <td>Bouba</td>
                                <td>$800</td>
                                <td>
                                    <img src={team2} alt="" />
                                    <img src={team3} alt="" />
                                </td>
                                <td>
                                    <span className=" btn-shape bg-backgroundcolor9 color-white"
                                    >Completed</span
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>Mahmoud Website</td>
                                <td>22 May 2021</td>
                                <td>Mahmoud</td>
                                <td>$600</td>
                                <td>
                                    <img src={team1} alt="" />
                                    <img src={team2} alt="" />
                                </td>
                                <td>
                                    <span className=" btn-shape bg-backgroundcolor9 color-white"
                                    >Completed</span
                                    >
                                </td>
                            </tr>
                            <tr>
                                <td>Sayed Website</td>
                                <td>24 May 2021</td>
                                <td>Sayed</td>
                                <td>$300</td>
                                <td>
                                    <img src={team1} alt="" />
                                    <img src={team3} alt="" />
                                </td>
                                <td>
                                    <span className=" btn-shape bg-backgroundcolor10 color-white">Rejected</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Arena Application</td>
                                <td>01 Mar 2021</td>
                                <td>Arena Company</td>
                                <td>$2600</td>
                                <td>
                                    <img src={team1} alt="" />
                                    <img src={team2} alt="" />
                                    <img src={team3} alt="" />
                                    <img src={team4} alt="" />
                                </td>
                                <td>
                                    <span className=" btn-shape bg-backgroundcolor9 color-white"
                                    >Completed</span
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    );
}

export default Dashboard;