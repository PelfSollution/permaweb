import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { observer, inject, useAsObservableSource } from 'mobx-react'
import { Dimmer, Loader } from 'semantic-ui-react'
import { SemanticToastContainer } from 'react-semantic-toasts'
import { createMuiTheme } from '@material-ui/core/styles'
import Screen from '../screen'
import FolderListing from './FolderListing'
import FileEntry from './FileEntry'
import Posts from './Posts'

import 'react-semantic-toasts/styles/react-semantic-alert.css'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

import keymap from '../keymap'
// @ts-ignore
import { ShortcutManager } from 'react-shortcuts'
import { ThemeProvider } from '@material-ui/styles'
import { CategoryType } from './Sidebar'
// @ts-ignore
import { toast } from 'react-semantic-toasts'
import SlateEditor, { defaultEditorValue } from './SlateEditor'
import ArticleTopMenu from './ArticleTopMenu'

const View = inject('store')(
  observer(function(props) {
    const observableProps = useAsObservableSource(props)
    const store = observableProps.store
    const [view, setView] = useState('Home')
    useEffect(() => {
      store.getFiles()
    })

    const handleFileOpen = (props, fileId, version) => {
      props.store.selectFile(fileId, version)
    }

    const handleCopyLink = (hash, key) => {
      if (!hash || !key) {
        return
      }

      const link = `https://gateway.textile.cafe/ipfs/${hash}?key=${key}`
      navigator.clipboard.writeText(link)

      toast({
        title: 'Success',
        description: 'Copied link to clipboard'
      })
    }

    const handleShowHistory = (fileId, version) => {
      store.selectFileId(fileId, version)
      store.toggleHistory(true)
    }
    const handleDeleteFile = id => {
      store.deleteFile(id)
    }
    const handleChangeToEditorState = updatedState => {
      store.setEditorState(updatedState)
    }
    const handleClearFile = label => {
      setView(label)
      return store.clearFile()
    }
    const handleCreateFile = () => store.setFile(defaultEditorValue)
    const handleSaveFile = () => store.saveEditorStateToThread()

    return (screen => {
      switch (screen) {
        case 'online':
          let innerView = {}
          let mainContent
          if (store.file) {
            const editorValue = JSON.parse(store.file.stored.body)
            mainContent = (
              <div>
                <ArticleTopMenu />
                <div
                  style={{
                    width: '80%',
                    maxWidth: '800px',
                    margin: '1em auto'
                  }}
                >
                  <SlateEditor
                    initialValue={editorValue}
                    onChange={handleChangeToEditorState}
                    isReadOnly={view === 'Posts'}
                  />
                </div>
              </div>
            )
          } else if (view === 'Home') {
            const files = store.files
            const folderListing = Object.keys(files).map(fileId => {
              const latestEntry = files[fileId][0]
              return {
                id: fileId,
                version: 0,
                hash: latestEntry.hash,
                fileKey: latestEntry.key,
                title: latestEntry.stored.name
              }
            })

            const fileEntries = folderListing.map(f => {
              return (
                <FileEntry
                  key={f.id}
                  {...f}
                  onClick={handleFileOpen}
                  onCopyLink={handleCopyLink}
                  onShowHistory={handleShowHistory}
                  onDelete={handleDeleteFile}
                />
              )
            })

            mainContent = <FolderListing>{fileEntries}</FolderListing>
          } else if (view === 'Posts') {
            const files = store.files
            const folderListing = Object.keys(files).map(fileId => {
              const latestEntry = files[fileId][0]
              return {
                id: fileId,
                version: 0,
                hash: latestEntry.hash,
                fileKey: latestEntry.key,
                title: latestEntry.stored.name
              }
            })

            const posts = folderListing.map(f => {
              return (
                <Posts
                  key={f.id}
                  {...f}
                  onClick={handleFileOpen}
                  onCopyLink={handleCopyLink}
                  onShowHistory={handleShowHistory}
                  onDelete={handleDeleteFile}
                />
              )
            })

            mainContent = <FolderListing>{posts}</FolderListing>
          }

          innerView = (
            <Screen
              username={store.profile ? store.profile.username : 'Anon'}
              avatarImage={undefined}
              categories={[
                {
                  label: 'Home',
                  type: CategoryType.NOTES
                },
                {
                  label: 'Trash',
                  type: CategoryType.TRASH
                },
                {
                  label: 'Posts',
                  type: CategoryType.MYPOSTS
                }
              ]}
              showAddFab={!store.file}
              showSaveFab={!!store.file}
              onOpenGroup={handleClearFile}
              onCreateGroup={() => {
                console.log('on create group')
              }}
              onFileOpen={handleFileOpen}
              onAddFile={handleCreateFile}
              onSaveFile={handleSaveFile}
            >
              {mainContent}
            </Screen>
          )
          return (
            <div>
              {innerView}
              <Dimmer active={store.isLoading} inverted>
                <Loader size="massive" />
              </Dimmer>
            </div>
          )
        default:
          return (
            <Dimmer active={store.status === 'offline'}>
              <Loader size="massive" />
            </Dimmer>
          )
      }
    })(store.status)
  })
)

export default View
