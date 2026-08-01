import { useTranslation } from '@/shared/i18n/useTranslations'
import CTAButton from './CTAButton'

const Buttons = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-row gap-3 justify-start font-brand '>
      <CTAButton href='#projects'>{t.hero.viewProjects}</CTAButton>

      <CTAButton href='#contact'>{t.hero.contactMe}</CTAButton>
    </div>
  )
}

export default Buttons
