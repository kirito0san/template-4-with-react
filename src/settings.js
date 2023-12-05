/* eslint-disable jsx-a11y/anchor-is-valid */

import './css/settings.css'
const Settings = (e) => {
    return (
        <main className="p-5">
            <h1 className="py-[10px] ">settings</h1>
            <div className="containers py-[10px] ">
                <div>
                    <h2>site control</h2>
                    <p className="text-[#888] ">Control The Website If There Is Maintenance</p>
                    <div className="Website">
                        <div>
                            <h4 className="py-[10px] ">Website Control</h4>
                            <p className="text-[#888] ">Open/Close Website And Type The Reason</p>
                        </div>
                        <label className="cilck center-a" htmlFor="Website-control">
                            <input
                                id="Website-control"
                                name="Website-control"
                                type="checkbox"
                            />
                            <span className="cilck-span center-a"></span>
                        </label>
                    </div>
                    <textarea
                        className="p-[10px] border border-black mt-5"
                        name="close-message"
                        id="close-message"
                        cols=""
                        rows="6"
                        placeholder="close message content"
                    ></textarea>
                </div>

                <div>
                    <h2>General Info</h2>
                    <p className="text-[#888] ">General Information About Your Account</p>
                    <div className="General">
                        <div>
                            <h4 className="py-[10px] ">Website Control</h4>
                            <p className="text-[#888] ">Open/Close Website And Type The Reason</p>
                        </div>
                        <label className="flex-gap-10-column mt-5" htmlFor="first-name">
                            <p className="text-[#888] ">first-name</p>
                            <input
                                className="p-5"
                                id="first-name"
                                name="one"
                                type="text"
                                placeholder="First Name"
                            />
                        </label>
                        <label className="flex-gap-10-column mt-5" htmlFor="last-name">
                            <p className="text-[#888] ">last-name</p>
                            <input
                                className="p-5"
                                id="last-name"
                                name="one"
                                type="text"
                                placeholder="Last Name"
                            />
                        </label>
                        <label className="flex-gap-10-column mt-5" htmlFor="email">
                            <p className="text-[#888] ">email</p>
                            <div className="email flex-gap-10-row">
                                <input
                                    className="p-5"
                                    id="email"
                                    name="one"
                                    type="email"
                                    value="o@nn.sa"
                                    disabled
                                />
                                <input type="submit" value="change" id="change" />
                            </div>
                        </label>
                    </div>

                </div>

                <div>
                    <h2>Security Info</h2>
                    <p className="text-[#888] ">Control The Website If There Is Maintenance</p>
                    <div className="Security-Info">
                        <div className="flex-gap-10-row center-a border-b-backgroundcolor2 py-[10px] ">
                            <div className="flex-grow">
                                <h4 className="py-[10px] ">Password</h4>
                                <p className="text-[#888] ">Last Change On 25/10/2021</p>
                            </div>
                            <a href="#" className="btn-shape">change</a>
                        </div>
                        <div className="flex-gap-10-row border-b-backgroundcolor2 py-[10px] ">
                            <div className="flex-grow">
                                <h4 className="py-[10px] ">Two-Factor Authentication</h4>
                                <p className="text-[#888] ">Enable/Disable The Feature</p>
                            </div>
                            <label className="cilck center-a" htmlFor="Security-Info">
                                <input
                                    id="Security-Info"
                                    name="Security-Info"
                                    type="checkbox"
                                />
                                <span className="cilck-span center-a"></span>
                            </label>
                        </div>
                        <div className="flex-gap-10-row center-a py-[10px] ">
                            <div className="flex-grow">
                                <h4 className="py-[10px] ">Devices</h4>
                                <p className="text-[#888] ">Check The Login Devices List</p>
                            </div>
                            <a href="#" className="btn-shape">Devices</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Social Info</h2>
                    <p className="text-[#888] ">Social Media Information</p>
                    <div className="Social-Info flex-gap-20-column mt-5">
                        <div>
                            <i className="fa-brands fa-twitter center-a text-[#888] "></i>
                            <input
                                className="w-full"
                                type="text"
                                placeholder="Twitter Username"
                            />
                        </div>
                        <div>
                            <i className="fa-brands fa-facebook-f center-a text-[#888] "></i>
                            <input
                                className="w-full"
                                type="text"
                                placeholder="Facebook Username"
                            />
                        </div>
                        <div>
                            <i className="fa-brands fa-linkedin center-a text-[#888] "></i>
                            <input
                                className="w-full"
                                type="text"
                                placeholder="Linkedin Username"
                            />
                        </div>
                        <div>
                            <i className="fa-brands fa-youtube center-a text-[#888] "></i>
                            <input
                                className="w-full"
                                type="text"
                                placeholder="Youtube Username"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Widgets Control</h2>
                    <p className="text-[#888] ">Show/Hide Widgets</p>
                    <form
                        className="Widgets-Control flex-gap-20-column mt-5 pb-[30px] "
                        action=""
                    >
                        <label className="flex-gap-10-row center-a" htmlFor="Quick">
                            <input type="checkbox" name="Widgets-Control" id="Quick" />
                            <span></span>
                            <p>Quick Draft</p>
                        </label>
                        <label className="gap-[10px] center-a" htmlFor="Top-Search-Items">
                            <input
                                type="checkbox"
                                name="Widgets-Control"
                                id="Top-Search-Items"
                            />
                            <span></span>
                            <p>Top Search Items</p>
                        </label>
                        <label className="gap-[10px] center-a" htmlFor="Latest-Tasks">
                            <input
                                type="checkbox"
                                name="Widgets-Control"
                                id="Latest-Tasks"
                            />
                            <span></span>
                            <p>Latest Tasks</p>
                        </label>
                        <label className="gap-[10px] center-a" htmlFor="Tickets-Statistics">
                            <input
                                type="checkbox"
                                name="Widgets-Control"
                                id="Tickets-Statistics"
                            />
                            <span></span>
                            <p>Tickets Statistics</p>
                        </label>
                        <label className="gap-[10px] center-a" htmlFor="Latest-News">
                            <input
                                type="checkbox"
                                name="Widgets-Control"
                                id="Latest-News"
                            />
                            <span></span>
                            <p>Latest News</p>
                        </label>
                        <label className="flex-gap-10-row center-a" htmlFor="Yearly-Targets">
                            <input
                                type="checkbox"
                                name="Widgets-Control"
                                id="Yearly-Targets"
                            />
                            <span></span>
                            <p>Yearly Targets</p>
                        </label>
                    </form>
                </div>

                <div className="Backup-Manager">
                    <h2>Backup Manager</h2>
                    <p className="text-[#888] ">Control Backup Time And Location</p>
                    <form className="border-b-backgroundcolor2 flex-gap-10-column pb-[30px] " action="">
                        <label className="flex-gap-10-row center-a" htmlFor="daily">
                            <input type="radio" name="Backup-Manager-date" id="daily" />
                            <span><span className="circle"></span></span>
                            <p>daily</p>
                        </label>
                        <label className="flex-gap-10-row center-a" htmlFor="Weekly">
                            <input type="radio" name="Backup-Manager-date" id="Weekly" />
                            <span><span className="circle"></span></span>
                            <p>Weekly</p>
                        </label>
                        <label className="flex-gap-10-row center-a" htmlFor="Monthly">
                            <input type="radio" name="Backup-Manager-date" id="Monthly" />
                            <span><span className="circle"></span></span>
                            <p>Monthly</p>
                        </label>
                    </form>
                    <form className="mt-5" action="">
                        <label className="flex-gap-10-row center-a" htmlFor="Megaman">
                            <input type="radio" name="Backup-Manager-size" id="Megaman" />
                            <span className="flex-gap-10-column">
                                <i className="fa-solid fa-server"></i>
                                <p>Megaman</p>
                            </span>
                        </label>
                        <label className="flex-gap-10-row center-a" htmlFor="Zero">
                            <input type="radio" name="Backup-Manager-size" id="Zero" />
                            <span className="flex-gap-10-column">
                                <i className="fa-solid fa-server"></i>
                                <p>Zero</p>
                            </span>
                        </label>
                        <label className="flex-gap-10-row center-a" htmlFor="Sigma">
                            <input type="radio" name="Backup-Manager-size" id="Sigma" />
                            <span className="flex-gap-10-column">
                                <i className="fa-solid fa-server"></i>
                                <p>Megaman</p>
                            </span>
                        </label>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Settings;