import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'

export function Provider({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
