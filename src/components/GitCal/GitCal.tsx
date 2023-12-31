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
        <section className="p-4 md:p-8 text-white font-inter mx-auto flex">
            <svg width="2" height="160" viewBox="0 0 2 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M1 0V160" stroke="white" strokeDasharray="3 3"/>
            </svg>
            <section className='flex justify-between items-start '>
                <article className='font-inter text-sm md:text-base ml-4 md:ml-6 basis-2/4'>
                    <h2 className='text-[#B7B7B7] mb-4 md:text-lg'>Languages I work with:</h2>
                        <ul className='list-none grid grid-cols-2 gap-x-2 gap-y-1'>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Go</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>C#</li>
                        </ul>
                </article>
                <article className='font-inter text-sm md:text-base ml-4 md:ml-6 basis-2/4 mr-2'>
                    <h2 className='text-[#B7B7B7] mb-4 md:text-lg'>Frameworks and other Technologies:</h2>
                    <ul className='list-none grid grid-cols-2 gap-x-2 gap-y-1'>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>FastApi</li>
                        <li>Sass</li>
                        <li>Tailwind</li>
                    </ul>
                </article>
            </section>
                <div className='rounded-xl border border-[#3D3B3E] p-4 w-2/4'>
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