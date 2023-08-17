import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'
import { theme } from '../../../themes/index';
import {Box} from '@mui/material';

interface SliderProps {
  value?: number
  handleChange?: (
    event: Event,
    value: number | number[],
    activeThumb: number
    
  ) => void
  max: number
}

const CustomSlider = styled(Slider)({
  width: '17.975rem',
  color: `${theme.palette.primary.main}`,
  height: '0.6rem',
  borderRadius: '0.6rem',
  '& .MuiSlider-thumb': {
    color: `${theme.palette.primary.main}`,
    border: '0.288rem solid' + `${theme.palette.primary[400]}`,
    width: '1.538rem',
    height: '1.538rem',
    borderRadius: '0.6rem',
  },
})
const Div = styled(Box)({
  height: '1.538rem',
  width: '17.975rem',
})

export default function SummarySlider(props: SliderProps) {
  return (
    <Box>
      <CustomSlider
        data-testid="slider"
        value={props.value}
        onChange={props.handleChange}
        max={props.max}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}
