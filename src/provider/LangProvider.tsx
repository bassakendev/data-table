
import { PropsWithChildren } from 'react'
import { I18nProviderClient } from '../locales/client'

interface LangProviderProps {
  locale: string
}

export const LangProvider = (props: PropsWithChildren<LangProviderProps>) => {
  return (
    <I18nProviderClient locale={props.locale}>
      {props.children}
    </I18nProviderClient>
  )
}