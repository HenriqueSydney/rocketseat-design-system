import * as Tooltip  from "@radix-ui/react-tooltip";
import { styled, keyframes } from "../../styles";



const slideUpAndFade = keyframes({
  from: {
		opacity: 0,
		transform: 'translateY(2px)'
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)'
	}
})

const slideRightAndFade = keyframes({
  from: {
		opacity: 0,
		transform: 'translateX(-2px)'
	},
	to: {
		opacity: 1,
		transform: 'translateX(0)'
	}
})

const slideDownAndFade = keyframes({
  from: {
		opacity: 0,
		transform: 'translateY(-2px)'
	},
	to: {
		opacity: 1,
		transform: 'translateY(0)'
	}
})

const slideLeftAndFade = keyframes({
  from: {
		opacity: 0,
		transform: 'translateX(2px)'
	},
	to: {
		opacity: 1,
		transform: 'translateX(0)'
	}
})


export const TooltipContent = styled(Tooltip.Content, {
   
    borderRadius: '$xs',
    display: 'flex',
    padding: '$3 $4',
    gap: '$2',
    backgroundColor: '$gray800',
    fontFamily: '$default',
    lineHeight: '$base',
    color: '$gray100',
    fontWeight: 'medium',

    '&[data-state="delayed-open"][data-side="top"]':{
      animation: `${slideDownAndFade} 200ms ease-out`
    },
    
    '&[data-state="delayed-open"][data-side="right"]':{
      animation: `${slideLeftAndFade} 200ms ease-out`
    },
    
    '&[data-state="delayed-open"][data-side="bottom"]': {
      animation: `${slideUpAndFade} 200ms ease-out`
    },

    '&[data-state="delayed-open"][data-side="left"]': {
      animation: `${slideRightAndFade} 200ms ease-out`
    }
  
  })

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
  