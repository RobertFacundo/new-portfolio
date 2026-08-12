interface Props {
  x: number
  y: number
}

const MilestoneDot = ({ x, y }: Props) => {
  return (
    <g transform={`translate(${x} ${y})`}>
      <defs>
        <filter
          id='milestone-dot-glow'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feGaussianBlur stdDeviation='3' result='blur' />

          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle
        cx='0'
        cy='0'
        r='13'
        fill='none'
        stroke='#EFBF73'
        strokeWidth='2'
        opacity='0.35'
        filter='url(#milestone-dot-glow)'
      />

      {/* Outer ring */}
      <circle
        cx='0'
        cy='0'
        r='13'
        fill='none'
        stroke='#EFBF73'
        strokeWidth='1'
      />

      {/* Core glow */}
      <circle
        cx='0'
        cy='0'
        r='5'
        fill='#EFBF73'
        filter='url(#milestone-dot-glow)'
      />

      {/* Core */}
      <circle cx='0' cy='0' r='5' fill='#EFBF73' />
    </g>
  )
}

export default MilestoneDot
