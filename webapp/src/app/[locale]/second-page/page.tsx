'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

const SecondPage: React.FC = () => {
  const t = useTranslations('SecondPage')

  return (
    <div style={{ marginTop: 200 }}>
      <h1>{t('title')}</h1>
      <span>{t('description')}</span>
    </div>
  )
}

export default SecondPage
