import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

type LabelProps = {
  link: string
  label: string
  target: string
  rel?: string
  linkStyle: string
}

const Label: React.FC<LabelProps> = ({ link, label, target, linkStyle }) => (
  <Link href={link} className={linkStyle} target={target}>
    <Typography variant='body1'>{label}</Typography>
  </Link>
)

export default memo(Label)
