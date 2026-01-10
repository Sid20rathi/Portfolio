"use client";

import { GitHubCalendar, Activity } from "react-github-calendar";

export default function ActivityComponent() {
    const selectLastTwoMonths = (data: Activity[]): Activity[] => {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

        return data.filter((activity) => {
            return new Date(activity.date) >= twoMonthsAgo;
        });
    };

    return (
        <div >
           
            <div className="p-3 border-x-2 border-none border-b-1 ">
                <div className="grid grid-cols-2 overflow-hidden">
                    <div className="">
                        <GitHubCalendar
                            username="sid20rathi"
                            transformData={selectLastTwoMonths}
                            labels={{
                                totalCount: "{{count}} Github Contributions in the last 2 months",
                            }}
                            colorScheme='light'
                            maxLevel={0}




                        />
                    </div>

                </div>
            </div>

        </div>
    );
}
