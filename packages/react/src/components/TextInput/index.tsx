
import { ComponentProps, forwardRef, ElementRef } from "react";
import { Input, Prefix, TextInputContainer } from "./style";

export type TextInputProps =  ComponentProps<typeof Input>  & {
    prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(({prefix, ...props}: TextInputProps, ref) => {
    return (
        <TextInputContainer>
            {!!prefix && <Prefix>{prefix}</Prefix>}
            <Input ref={ref} {...props}/>
        </TextInputContainer>
    )
})

TextInput.displayName = 'TextInput'