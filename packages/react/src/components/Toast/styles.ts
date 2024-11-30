import * as Toast  from "@radix-ui/react-toast";
import { styled, keyframes } from "../../styles";

const hide = keyframes({
    from: {
          opacity: 1,
         
      },
      to: {
          opacity: 0,
      }
  })

const slideIn = keyframes({
  from: {
		transform: 'translateX(calc(100% + var(--viewport-padding)))'
	},
	to: {
		transform: 'translateY(0)'
	}
})

const swipeOut = keyframes({
  from: {
		transform: 'translateX(var(--radix-toast-swipe-end-x))'
	},
	to: {
		transform: 'translateX(0)'
	}
})

export const ToastRoot = styled(Toast.Root, {
    maxWidth: '400px',
    minWidth: '300px',
    position: 'relative',
    borderRadius: '$sm',
    display: 'flex',
    padding: '$3 $5',
    gap: '$1',
    border: '1px solid $colors$gray600', 
    backgroundColor: '$gray800',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
   
    
    '&[data-swipe="open"]':{
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },

    '&[data-swipe="closed"]':{
        animation: `${hide} 100ms ease-in`
      },
      
    
    '&[data-swipe="move"]':{
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    
    '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
	    transition: 'transform 200ms ease-out'
    },

    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  
  })

export const ToastClose = styled(Toast.Close, {
    position: 'absolute',
    top: '1rem',
    right: '1rem',

    cursor: 'pointer',

    fontSize: '$lg',
    color: '$gray200',
    fontWeight: 'bold',
})

export const ToastTitle = styled(Toast.Title, {
    fontFamily: '$default',
    lineHeight: '$tall',
    color: '$white',
    fontWeight: 'bold',

})

export const ToastDescription = styled(Toast.Description, {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray200',

})
  