import './Tooltip.scss';

interface TooltipProps {
    x: number;
    y: number;
    content: string | null;
}

export function Tooltip({x, y, content}: TooltipProps) {
    console.log(x, y, content)
    
    return (
        <div className="tooltip bg-[#6F7680] text-white text-xs absolute"
            style={{ left: `${x}px`, top: `${y}px`, transform: 'translate(-50%, -50%)' }}
        >
            <p>{content}.</p>
        </div>
    )
}