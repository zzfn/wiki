import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Wiki</span>,
  project: {
    link: 'https://github.com/zzfn/wiki',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Wiki'
    }
  },
  docsRepositoryBase: 'https://github.com/zzfn/wiki/blob/main',
  footer: {
    text: 'wwma.cc',
  },
}

export default config
