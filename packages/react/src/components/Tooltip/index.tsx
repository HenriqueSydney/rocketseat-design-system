import * as RadixTooltip  from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipArrow } from "./styles";
import { ReactNode } from "react";

export type TooltipProps = {
    children: ReactNode
    content: string
}


export function Tooltip({ children, content}: TooltipProps){
    return (
        <RadixTooltip.Provider delayDuration={300}>      
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <TooltipContent>
                        {content}
                        <TooltipArrow />
                    </TooltipContent>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>        
        </RadixTooltip.Provider>
    )
}

Tooltip.displayName = 'Tooltip'