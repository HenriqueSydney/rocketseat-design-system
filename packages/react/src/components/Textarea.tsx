import { ComponentProps } from "react";
import { styled } from "../styles";


export const Textarea = styled('textarea', {
    backgroundColor: '$gray900',
    padding: '$3 $4',
    borderRadius: '$sm',
    boxSizing: 'border-box',
    border: '2px solid $gray900',
    display: 'flex',
    alignItems: 'baseline',

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: 'regular',
    resize: 'vertical',
    minHeight: 80,

    '&:focus': {
        outline: 0,
        borderColor: '$ignite300'
    },

    '&:disabled': {
        cursor: 'not-allowed'
    },

    '&:placeholder': {
        color: '$gray400'
    },


    
})

export interface TextareaProps extends ComponentProps<typeof Textarea> {}

Textarea.displayName = 'Textarea'