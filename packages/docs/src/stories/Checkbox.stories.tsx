import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@henrique-ui/react'

export default {
    title: 'Form/Checkbox',
    component: Checkbox,
    args: {},
    decorators: [
        (story) => {
            return (
                <Box as="laber" css={{ display: 'flex', flexDirection: 'row', gap: 2}}>
                   
                    {story()}
                    <Text size="sm">Accept Terms of Use</Text>
                </Box>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

