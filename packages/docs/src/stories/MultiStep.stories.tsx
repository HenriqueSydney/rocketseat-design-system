import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@henrique-ui/react'

export default {
    title: 'Form/MultiStep',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1
    },
    decorators: [
        (story) => {
            return (
                <Box as="laber" css={{ display: 'flex', flexDirection: 'column', gap: 2}}>                   
                    {story()}
                </Box>
            )
        }
    ]
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}


export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4
    }
}

