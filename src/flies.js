import { Link } from "react-router-dom";
import "./css/flies.css"
import pdf from "./imgs/pdf.svg"
import avi from "./imgs/avi.svg"
import eps from "./imgs/eps.svg"
import png from "./imgs/png.svg"
import psds from "./imgs/psd.svg"
import dll from "./imgs/dll.svg"
const Flies = () => {
    return (
        <main className="p-5">
            <h1 className="py-[10px] ">flies</h1>
            <div className="containers files py-[10px] ">
                <div className="files-page !p-0">
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={pdf} alt="" />
                        <p>my-file.pdf</p>
                        <p className="text-[#888]  self-start">Elzero</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]   self-stretch">
                            <p className="text-[#888] ">20/06/2020</p>
                            <p className="text-[#888] ">5.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={avi} alt="" />
                        <p>my-file.avi</p>
                        <p className="text-[#888]  self-start">Admin</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/05/2021</p>
                            <p className="text-[#888] ">12.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={eps} alt="" />
                        <p>my-file.eps</p>
                        <p className="text-[#888]  self-start">Uploader</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/05/2021</p>
                            <p className="text-[#888] ">2.7MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={psds} alt="" />
                        <p>my-file.psd</p>
                        <p className="text-[#888]  self-start">sasa</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">15.1MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={dll} alt="" />
                        <p>my-file.dll</p>
                        <p className="text-[#888]  self-start">ahmed</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">2.2MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={png} alt="" />
                        <p>my-file.png</p>
                        <p className="text-[#888]  self-start">Designer</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">1.1MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={dll} alt="" />
                        <p>my-file.dll</p>
                        <p className="text-[#888]  self-start">ahmed</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">2.2MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={png} alt="" />
                        <p>my-file.png</p>
                        <p className="text-[#888]  self-start">Designer</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">20/06/2020</p>
                            <p className="text-[#888] ">5.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={pdf} alt="" />
                        <p>my-file.pdf</p>
                        <p className="text-[#888]  self-start">Elzero</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">20/06/2020</p>
                            <p className="text-[#888] ">5.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={avi} alt="" />
                        <p>my-file.avi</p>
                        <p className="text-[#888]  self-start">Admin</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/05/2021</p>
                            <p className="text-[#888] ">12.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={eps} alt="" />
                        <p>my-file.eps</p>
                        <p className="text-[#888]  self-start">Uploader</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/05/2021</p>
                            <p className="text-[#888] ">2.7MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={psds} alt="" />
                        <p>my-file.psd</p>
                        <p className="text-[#888]  self-start">sasa</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">15.1MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={dll} alt="" />
                        <p>my-file.dll</p>
                        <p className="text-[#888]  self-start">ahmed</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">2.2MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={png} alt="" />
                        <p>my-file.png</p>
                        <p className="text-[#888]  self-start">Designer</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">1.1MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={dll} alt="" />
                        <p>my-file.dll</p>
                        <p className="text-[#888]  self-start">ahmed</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">2.2MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={png} alt="" />
                        <p>my-file.png</p>
                        <p className="text-[#888]  self-start">Designer</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">20/06/2020</p>
                            <p className="text-[#888] ">5.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={pdf} alt="" />
                        <p>my-file.pdf</p>
                        <p className="text-[#888]  self-start">Elzero</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">20/06/2020</p>
                            <p className="text-[#888] ">5.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={avi} alt="" />
                        <p>my-file.avi</p>
                        <p className="text-[#888]  self-start">Admin</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/05/2021</p>
                            <p className="text-[#888] ">12.5MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={eps} alt="" />
                        <p>my-file.eps</p>
                        <p className="text-[#888]  self-start">Uploader</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/05/2021</p>
                            <p className="text-[#888] ">2.7MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={psds} alt="" />
                        <p>my-file.psd</p>
                        <p className="text-[#888]  self-start">sasa</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">15.1MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={dll} alt="" />
                        <p>my-file.dll</p>
                        <p className="text-[#888]  self-start">ahmed</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">2.2MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={png} alt="" />
                        <p>my-file.png</p>
                        <p className="text-[#888]  self-start">Designer</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">1.1MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={dll} alt="" />
                        <p>my-file.dll</p>
                        <p className="text-[#888]  self-start">ahmed</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">16/5/2021</p>
                            <p className="text-[#888] ">2.2MB</p>
                        </div>
                    </div>
                    <div className="flex-gap-10-column center-a">
                        <i className="fa-solid fa-download"></i>
                        <img className="width-2" src={png} alt="" />
                        <p>my-file.png</p>
                        <p className="text-[#888]  self-start">Designer</p>
                        <div className="border-t-backgroundcolor2  border-t   flex-gap-5-row justify-between pt-[10px]  self-stretch">
                            <p className="text-[#888] ">20/06/2020</p>
                            <p className="text-[#888] ">5.5MB</p>
                        </div>
                    </div>
                </div>
                <div className="files-stats flex-gap-10-column text-[.9rem] ">
                    <h2>Files Statistics</h2>
                    <div className="files-stats-box center-a justify-between flex-gap-5-row p-[10px]">
                        <div className="flex-gap-10-row center-a">
                            <i className="text-[1.5rem]  fa-solid fa-file-pdf background-color-4 color-font-blue"></i>
                            <div className="flex-gap-10-column">
                                <p>PDF Files</p>
                                <p className="text-[#888] ">130</p>
                            </div>
                        </div>
                        <p className="text-[#888] ">6.5GB</p>
                    </div>

                    <div className="files-stats-box center-a justify-between flex-gap-5-row p-[10px]">
                        <div className="flex-gap-10-row center-a">
                            <i className="text-[1.5rem]  fa-regular fa-images color-font-green background-color-8"></i>
                            <div className="flex-gap-10-column">
                                <p>Images</p>
                                <p className="text-[#888] ">115 Files</p>
                            </div>
                        </div>
                        <p className="text-[#888] ">3.5GB</p>
                    </div>

                    <div className="files-stats-box center-a justify-between flex-gap-5-row p-[10px]">
                        <div className="flex-gap-10-row center-a">
                            <i className="text-[1.5rem]  fa-regular fa-file-word color-font-red background-color-12"></i>
                            <div className="flex-gap-10-column">
                                <p>Word Files</p>
                                <p className="text-[#888] ">110 Files</p>
                            </div>
                        </div>
                        <p className="text-[#888] ">3.5GB</p>
                    </div>

                    <div className="files-stats-box center-a justify-between flex-gap-5-row p-[10px]">
                        <div className="flex-gap-10-row center-a">
                            <i className="text-[1.5rem]  fa-file-csv fa-solid color-font-orange background-color-6"></i>
                            <div className="flex-gap-10-column">
                                <p>CSV Files</p>
                                <p className="text-[#888] ">99 Files</p>
                            </div>
                        </div>
                        <p className="text-[#888] ">2.9GB</p>
                    </div>

                    <Link className="flex-gap-10-row color-white bg-[#0075ff] " href="#">
                        <i className="flex-gap-10-row fa-solid fa-angles-up"></i>upload
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default Flies;
