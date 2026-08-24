'use client'
import { SiWhatsapp } from 'react-icons/si'
import { MdOutlineMail } from 'react-icons/md'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import {
  sendContactEmail,
  type ContactState
} from '../actions/sendContactEmail'
import { useActionState, useRef } from 'react'
import { useTranslation } from '@/shared/i18n/useTranslations'
import { useLanguageTransition } from '@/shared/hooks/useLanguageTransition'
import { useContactEmailAnimation } from '../animations/useContactEmailAnimations'

const initialState: ContactState = {
  success: false
}

const Email = () => {
  const { t } = useTranslation()
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  )

  const languageRefs = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useLanguageTransition({ refs: languageRefs })
  useContactEmailAnimation(containerRef)

  return (
    <div
      ref={containerRef}
      className='w-1/2 pl-10 font-brand text-text-secondary'
    >
      <form action={formAction} className='flex flex-col gap-8 '>
        <div className='flex flex-row gap-5 w-full'>
          <div className='contact-field w-1/2'>
            <label
              ref={el => {
                languageRefs.current[0] = el
              }}
              className='contact-label'
            >
              {' '}
              {t('contact.form.name')}
            </label>
            <input name='name' className='contact-input' type='text' />
          </div>

          <div className='contact-field w-1/2'>
            <label
              ref={el => {
                languageRefs.current[1] = el
              }}
              className='contact-label'
            >
              {' '}
              {t('contact.form.email')}
            </label>
            <input name='email' className='contact-input' type='text' />
          </div>
        </div>

        <div className='contact-field'>
          <label
            ref={el => {
              languageRefs.current[2] = el
            }}
            className='contact-label'
          >
            {' '}
            {t('contact.form.subject')}
          </label>
          <input name='subject' className='contact-input' type='text' />
        </div>

        <div className='contact-field'>
          <label
            ref={el => {
              languageRefs.current[3] = el
            }}
            className='contact-label'
          >
            {t('contact.form.message')}
          </label>
          <textarea name='message' className='contact-textarea' rows={5} />
        </div>

        <button
          type='submit'
          disabled={isPending || state.success}
          className='contact-submit group flex items-center justify-center gap-3 luxury-button cursor-pointer text-gold disabled:cursor-default'
        >
          <span
            ref={el => {
              languageRefs.current[4] = el
            }}
          >
            {isPending
              ? t('contact.form.sending')
              : state.success
              ? t('contact.form.sent')
              : t('contact.form.send')}
          </span>

          {state.success ? (
            <FiCheck size={16} />
          ) : (
            <FiArrowUpRight
              className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
              size={16}
            />
          )}
        </button>
      </form>

      <div className='contact-direct flex flex-row items-center gap-15 mt-5 pt-3 border-t border-gold/20'>
        <span
          ref={el => {
            languageRefs.current[5] = el
          }}
        >
          {t('contact.direct')}
        </span>

        <div className='flex gap-6 items-center'>
          <a
            href='mailto:robertf.coder@gmail.com'
            className=' flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-700 hover:border-gold hover:bg-gold/1 '
          >
            <MdOutlineMail size={27} />
          </a>

          <a
            href='https://wa.me/5492235801773'
            className=' flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-700 hover:border-gold hover:bg-gold/1 '
          >
            <SiWhatsapp size={27} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Email
