
import {GitHubCalendar} from 'react-github-calendar';

export default function Activity() {

    const selectLastHalfYear = (contributions:any) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity:any) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};
    
 




    return (
        <div>

        <GitHubCalendar 
  username="sid20rathi" 
  transformData={selectLastHalfYear} 
  labels={{
    totalCount: '{{count}} contributions in the last half year',
  }}
   
            
        </div>
    )
}
