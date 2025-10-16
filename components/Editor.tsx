'use client'

import { useState } from 'react'
import CodeMirror, { EditorView } from '@uiw/react-codemirror'
import SubmitForm from '@/components/SubmitForm'
import { getLanguageExtension } from '@/lib/utils'

const fixedHeightEditor = EditorView.theme({
  '&': { height: '250px' },
  '.cm-scroller': { overflow: 'auto' },
})

const Editor = ({
  starterCode,
  challengeId,
  language,
}: {
  starterCode: string
  challengeId: string
  language: string
}) => {
  const [code, setCode] = useState(starterCode)
  const languageExtension = getLanguageExtension(language)

  return (
    <div className='flex flex-col'>
      <div className='bg-white rounded-xl shadow-sm border border-gray-200 flex-grow flex flex-col'>
        <div className='p-3 border-b border-gray-200'>
          <h2 className='text-lg font-bold text-gray-900'>Solution</h2>
        </div>
        <CodeMirror
          value={code}
          theme='dark'
          style={{ fontSize: '16px' }}
          extensions={[
            languageExtension,
            EditorView.lineWrapping,
            fixedHeightEditor,
          ]}
          onChange={value => setCode(value)}
        />
      </div>

      <SubmitForm challengeId={challengeId} solution={code} />
    </div>
  )
}

export default Editor
