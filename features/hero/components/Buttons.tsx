import { forwardRef } from 'react'
import { useTranslation } from '@/shared/i18n/useTranslations'
import CTAButton from './CTAButton'

const Buttons = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation()

  return (
    <div ref={ref} className='flex flex-row gap-3 justify-start font-brand'>
      <CTAButton href='#projects'>{t.hero.viewProjects}</CTAButton>

      <CTAButton href='#contact'>{t.hero.contactMe}</CTAButton>
    </div>
  )
})

Buttons.displayName = 'Buttons'

export default Buttons
