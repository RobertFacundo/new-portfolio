import Content from './components/Content'
import Email from './components/Email'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col md:flex-row p-10'>
      <Content />
      <Email />
    </div>
  )
}

export default Contact
