import React, { useState } from "react";
import ClassicCards from "./ClassicCards";

function Tab() {
    const [activeTab, setActiveTab] = useState("profile");

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const styleborder = {
        boxShadow: "3px 3px  #022D24"  // Replace #FF0000 with your desired color
    }

    return (
        <div className="w-[100%] my-20">
            <div className="text-center sm:p-6 p-0">
                <div className="flex flex-col justify-center items-center gap-10 md:mb-4 dark:border-gray-700">
                    <ul  style={styleborder} className="flex border rounded-full w-fit gap-3 flex-wrap px-6 xl:px-12 py-1 font-medium text-center">
                        <li className="xl:me-2" role="presentation">
                            <button
                                className={`inline-block xl:px-6 xl:py-2 text-sm md:text-[22px] ${
                                    activeTab === "profile" ? "text-[#146C60] bg-white rounded-full hover:text-[#146C60] underline dark:text-[#146C60] " : "text-[#146C60] hover:text-[#146C60] dark:text-[#146C60] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-[#146C60]"
                                }`}
                                onClick={() => handleTabClick("profile")}
                                type="button"
                                role="tab"
                                aria-controls="profile-example"
                                aria-selected={activeTab === "profile"}
                            >
                                FEATURES
                            </button>
                        </li>
                        <li className="xl:me-2" role="presentation">
                            <button
                                className={`inline-block xl:px-6 xl:py-2 text-sm md:text-[22px] ${
                                    activeTab === "dashboard" ? "text-[#146C60] bg-white   rounded-full underline hover:text-[#146C60] dark:text-[#146C60] " : "text-[#146C60]   hover:text-[#146C60] dark:text-[#146C60] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-[#146C60]"
                                }`}
                                onClick={() => handleTabClick("dashboard")}
                                type="button"
                                role="tab"
                                aria-controls="dashboard-example"
                                aria-selected={activeTab === "dashboard"}
                            >
                                HOW IT WORKS
                            </button>
                        </li>
                        <li className="xl:me-2" role="presentation">
                            <button
                                className={`inline-block xl:px-6 xl:py-2 text-sm md:text-[22px] ${
                                    activeTab === "settings" ? "text-[#146C60] bg-white rounded-full underline dark:text-[#146C60] hover:text-[#146C60]" : "text-[#146C60] hover:text-[#146C60] dark:text-[#146C60] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-[#146C60]"
                                }`}
                                onClick={() => handleTabClick("settings")}
                                type="button"
                                role="tab"
                                aria-controls="settings-example"
                                aria-selected={activeTab === "settings"}
                            >
                                PERSONALISE
                            </button>
                        </li>
                    </ul>
                    <div className="border-t w-[55%]"></div>
                </div>
                <div id="tabContentExample" className="flex justify-center">
                    <div className={`w-[100%] p-10 md:p-0 ${activeTab === "profile" ? " " : "hidden"}`} id="profile-example" role="tabpanel" aria-labelledby="profile-tab-example">
                        <ClassicCards />
                    </div>
                    <div className={`w-[100%] p-10 md:p-0 ${activeTab === "dashboard" ? "" : "hidden"}`} id="dashboard-example" role="tabpanel" aria-labelledby="dashboard-tab-example">
                        {/* <ClassicCards /> */}
                    </div>
                    <div className={`w-[100%] p-10 md:p-0 ${activeTab === "settings" ? "" : "hidden"}`} id="settings-example" role="tabpanel" aria-labelledby="settings-tab-example">
                        <ClassicCards />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tab;
