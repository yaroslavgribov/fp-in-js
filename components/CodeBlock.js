import React from 'react'

import { CodeSurfer } from 'mdx-deck-code-surfer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

export const CodeBlock = ({code, title, options = {}, style, ...props}) => (
  <div style={{overflow: 'scroll', ...style}}>
    <CodeSurfer
      title={title}
      theme={nightOwl}
      code={code} 
      lang="javascript" 
      {...props}
    />
  </div>
)