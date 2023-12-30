'use client'
import GitHubCalendar from 'react-github-calendar';

interface Contribution{
    date: string,
    count: number,
    level: 0 | 1 | 2 | 3 | 4
}

interface Activity {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }

export function GitCal() {

    const colorTheme = {
        dark: ['#1B1B1B','#3C3C3C','#5F5F5F', '#929292','#BABABA'],
      };

      const selectLastHalfYear = (contributions: Contribution[]) => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter((contribution: Contribution) => {
            const date = new Date(contribution.date);
            const monthOfDay = date.getMonth();
            
            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
          });
      };


    return (
        // p-4 md:p-8 flex justify-center items-center text-white font-inter m-auto
        <section className="p-4 md:p-8 flex items-center justify-between text-white font-inter m-auto">
            <svg width="2" height="160" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M1 0V160" stroke="white" strokeDasharray="3 3"/>
            </svg>
                <div className='rounded-xl border border-[#3D3B3E] w-3/5 ml-auto p-4'>
                    <GitHubCalendar
                        username="jmedina21"
                        blockSize={10}
                        blockMargin={3}
                        theme={colorTheme}
                        fontSize={14}
                        colorScheme="dark"
                        transformData={selectLastHalfYear}
                        transformTotalCount={false}
                        labels={{
                            totalCount: '{{count}} contributions in the last 6 months',
                        }}
                    />
                </div>
        </section>
    )
}