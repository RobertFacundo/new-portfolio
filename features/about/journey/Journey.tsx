import Header from './Header'
import Timeline from './Timeline'
import Accordeon from './Accordeon'

const Journey = () => {
  return (
    <div className=' w-full md:w-2/3 flex flex-col border-r border-gold/30'>
      <Header />
      <div className='hidden md:block'>
        <Timeline />
      </div>

      <div className='block md:hidden mt-2'>
        <Accordeon />
      </div>
    </div>
  )
}

export default Journey
