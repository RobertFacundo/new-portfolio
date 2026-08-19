import { SiWhatsapp } from 'react-icons/si'
import { MdOutlineMail } from 'react-icons/md'
import { FiArrowUpRight } from 'react-icons/fi'

const Email = () => {
  return (
    <div className='w-1/2 pl-10 font-brand text-text-secondary'>
      <form className='flex flex-col gap-8 '>
        <div className='flex flex-row gap-5 w-full'>
          <div className='contact-field w-1/2'>
            <label className='contact-label'>Your Name</label>
            <input className='contact-input' type='text' />
          </div>

          <div className='contact-field w-1/2'>
            <label className='contact-label'>Your Email</label>
            <input className='contact-input' type='text' />
          </div>
        </div>

        <div className='contact-field'>
          <label className='contact-label'>Subject</label>
          <input className='contact-input' type='text' />
        </div>

        <div className='contact-field'>
          <label className='contact-label'>Message</label>
          <textarea className='contact-textarea' rows={5} />
        </div>

        <button
          type='submit'
          className='
    group
    flex
    items-center
    justify-center
    gap-3
    luxury-button
    cursor-pointer
    text-gold
  '
        >
          <span>Send Message</span>

          <FiArrowUpRight
            className='
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    '
            size={16}
          />
        </button>
      </form>

      <div className='flex flex-row items-center gap-15 mt-5 pt-3 border-t border-gold/20'>
        <span>Prefer to reach me directly?</span>

        <div className='flex gap-6 items-center'>
          <a
            href='mailto:TU_EMAIL'
            className='
    flex h-12 w-12 items-center justify-center
    rounded-full
    border border-gold/30
    text-gold
    transition-all duration-700
    hover:border-gold
    hover:bg-gold/10
  '
          >
            <MdOutlineMail size={27} />
          </a>

          <a
            href='mailto:TU_EMAIL'
            className='
    flex h-12 w-12 items-center justify-center
    rounded-full
    border border-gold/30
    text-gold
    transition-all duration-700
    hover:border-gold
    hover:bg-gold/10
  '
          >
            <SiWhatsapp size={27} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Email
