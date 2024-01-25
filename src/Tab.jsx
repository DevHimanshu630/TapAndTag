import React, { useEffect } from "react";
import { Tabs } from "flowbite";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ClassicCards from "./Components/ClassicCards";

function Tab() {

    const linearGradientStyle = {
        background: 'linear-gradient(90deg, #022D24 11.02%, #146C60 88.41%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };

    useEffect(() => {
        const tabElements = [
            {
                id: "profile",
                triggerEl: document.querySelector("#profile-tab-example"),
                targetEl: document.querySelector("#profile-example"),
            },
            {
                id: "dashboard",
                triggerEl: document.querySelector("#dashboard-tab-example"),
                targetEl: document.querySelector("#dashboard-example"),
            },
            {
                id: "settings",
                triggerEl: document.querySelector("#settings-tab-example"),
                targetEl: document.querySelector("#settings-example"),
            },
            // {
            //     id: "contacts",
            //     triggerEl: document.querySelector("#contacts-tab-example"),
            //     targetEl: document.querySelector("#contacts-example"),
            // },
        ];

        const options = {
            defaultTabId: "settings",
            activeClasses:
                "text-[#146C60] bg-white rounded-full hover:text-[#146C60] dark:text-[#146C60] hover:text-[#146C60]",
            inactiveClasses:
                "text-[#146C60] hover:text-[#146C60] dark:text-[#146C60] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-[#146C60]",
            onShow: () => {
                console.log("tab is shown");
            },
        };

        const instanceOptions = {
            id: "tabs-example",
            override: true,
        };

        const tabsElement = document.getElementById("tabs-example");
        const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
        tabs.show("profile");

        tabs.getTab("contacts");
        tabs.getActiveTab();
    }, []);

    const styleborder = {
        boxShadow: "3px 3px  #022D24"  // Replace #FF0000 with your desired color
    }


    return (
        <div className="w-[100%] my-20 ">


            <div className="text-center sm:p-6 p-0 ">
                <div className="flex flex-col justify-center items-center gap-10 md:mb-4    dark:border-gray-700">
                    <ul
                        style={styleborder}
                        className="md:flex border rounded-full  w-fit  flex-wrap px-12 py-1 text-[22px] font-medium text-center "
                        id="tabs-example"
                        role="tablist"
                    >
                        <li className="me-2  " role="presentation">
                            <button
                                className="inline-block   px-6 py-2 "
                                id="profile-tab-example"
                                type="button"
                                role="tab"
                                aria-controls="profile-example"
                                aria-selected="false"
                            >
                                FEATURES
                            </button>

                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className="inline-block   px-6 py-2 hover:text-gray-600 dark:hover:text-gray-300"
                                id="dashboard-tab-example"
                                type="button"
                                role="tab"
                                aria-controls="dashboard-example"
                                aria-selected="false"
                            >
                                HOW IT WORKS
                            </button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button
                                className="inline-block   px-6 py-2 hover:text-gray-600 dark:hover:text-gray-300"
                                id="settings-tab-example"
                                type="button"
                                role="tab"
                                aria-controls="settings-example"
                                aria-selected="false"
                            >
                                PERSONALISE
                            </button>
                        </li>

                    </ul>
                    <div className="border-t w-[55%]"></div>
                </div>
                <div id="tabContentExample ">
                    <div
                        className="hidden w-[100%] p-10 md:p-0"
                        id="profile-example"
                        role="tabpanel"
                        aria-labelledby="profile-tab-example"
                    >
                        <ClassicCards />

                    </div>
                    <div
                        className="hidden w-[100%] p-10 md:p-0"
                        id="dashboard-example"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab-example"
                    >
                        <ClassicCards />
                    </div>
                    <div
                        className="hidden w-[100%] p-10 md:p-0"
                        id="settings-example"
                        role="tabpanel"
                        aria-labelledby="settings-tab-example"
                    >
                        <ClassicCards />
                    </div>
                    <div
                        className="hidden w-[100%] p-10 md:p-0"
                        id="contacts-example"
                        role="tabpanel"
                        aria-labelledby="contacts-tab-example"
                    >
                        <ClassicCards />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Tab;
