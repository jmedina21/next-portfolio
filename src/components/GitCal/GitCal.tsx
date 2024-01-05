'use client'
import { useRef, useState } from 'react';
import './GitCal.scss';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from '../Tooltip/Tooltip';
import { formatDate } from '../../utils/utils';

interface Contribution{
    date: string,
    count: number,
    level: 0 | 1 | 2 | 3 | 4
}

export function GitCal() {

    const [isTooltipShown, setIsTooltipShown] = useState<boolean>(false);
    const [tootltipContent, setTooltipContent] = useState<string | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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

    const calendarRef = useRef<HTMLDivElement>(null);

    function showTooltip(activity: Contribution, event: React.SyntheticEvent | any) {
        if (calendarRef.current) {
            const calendarRect = calendarRef.current.getBoundingClientRect();
            const x = event.clientX - calendarRect.left; 
            const y = event.clientY - calendarRect.top; 
            setTooltipPosition({ x, y });
        }
        setIsTooltipShown(true);

        setTooltipContent(`${activity.count} Contribution on ${formatDate(activity.date)}`);
    }

    return (
        <section className="p-4 md:p-8 text-white font-inter mx-auto flex">
            <article className='flex flex-col xl:flex-row gap-4 w-full border-l border-[#585858] border-dashed pl-4 md:pl-6'>
                <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                    <div className='font-inter text-sm md:text-base md:basis-2/4' >
                        <h2 className='text-[#B7B7B7] mb-4 leading-tight'>Languages I work with:</h2>
                            <ul className='list-none grid grid-cols-2 gap-x-10 gap-y-1 text-xs md:text-sm'>
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
                        <ul className='list-none grid grid-cols-2 gap-x-2 gap-y-1 text-xs md:text-sm'>
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
                <div className='relative mr-[-1.2rem]' ref={calendarRef}>
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
                            onMouseEnter: (event) => (activity) => {
                                showTooltip(activity, event);
                            },
                            onMouseLeave: () => () => {
                                setIsTooltipShown(false);
                            },
                          }}
                    />
                    {isTooltipShown && <Tooltip x={tooltipPosition.x} y={tooltipPosition.y} content={tootltipContent} />}
                </div>
            </article>
        </section>
    )
}