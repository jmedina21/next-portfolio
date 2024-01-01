'use client'
import './GitCal.scss';
import GitHubCalendar from 'react-github-calendar';

interface Contribution{
    date: string,
    count: number,
    level: 0 | 1 | 2 | 3 | 4
}

export function GitCal() {

    const colorTheme = {
        dark: ['#1B1B1B','#BABABA'],
      };

      function selectLastHalfYear(contributions: Contribution[]) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const shownMonths = 6;
    
        return contributions.filter((contribution) => {
            const date = new Date(contribution.date);
            const year = date.getFullYear();
            const month = date.getMonth();
    
            if (currentMonth >= shownMonths) {
                return year === currentYear && month > currentMonth - shownMonths && month <= currentMonth;
            } else {
                return (
                    (year === currentYear && month <= currentMonth) ||
                    (year === currentYear - 1 && month > 11 - (shownMonths - currentMonth))
                );
            }
        });
    };
    

    return (
        <section className="p-4 md:p-8 text-white font-inter mx-auto flex">
            <article className='flex flex-col xl:flex-row gap-4 w-full border-l border-[#585858] border-dashed pl-4 md:pl-6'>
                <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                    <div className='font-inter text-sm md:text-base md:basis-2/4' >
                        <h2 className='text-[#B7B7B7] mb-4 leading-tight'>Languages I work with:</h2>
                            <ul className='list-none grid grid-cols-2 gap-x-2 gap-y-1 text-xs md:text-base'>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>TypeScript</li>
                                <li>Go</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>C#</li>
                            </ul>
                    </div>
                    <div className='font-inter text-sm md:text-base md:basis-2/4' >
                        <h2 className='text-[#B7B7B7] mb-4 leading-tight'>Frameworks and other Technologies:</h2>
                        <ul className='list-none grid grid-cols-2 gap-x-2 gap-y-1 text-xs md:text-base'>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>FastApi</li>
                            <li>Sass</li>
                            <li>Tailwind</li>
                            <li>Jest</li>
                        </ul>
                    </div>
                </div>
                <GitHubCalendar
                    username="jmedina21"
                    blockSize={10}
                    blockMargin={3}
                    theme={colorTheme}
                    fontSize={14}
                    colorScheme="dark"
                    transformData={selectLastHalfYear}
                    labels={{
                        totalCount: '{{count}} contributions in the last 6 months',
                    }}
                    eventHandlers={{
                        onClick: (event) => (activity) => {
                          alert(JSON.stringify(activity));
                        },
                    }}
                />
            </article>
        </section>
    )
}