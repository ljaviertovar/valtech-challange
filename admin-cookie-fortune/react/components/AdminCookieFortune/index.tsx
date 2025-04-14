import React, { ChangeEvent, useState } from 'react'

import { useRuntime } from 'vtex.render-runtime'
import { FormattedMessage, useIntl } from 'react-intl'

import {
  experimental_I18nProvider as I18nProvider,
  createSystem,
  DataView,
  DataViewControls,
  PageHeader,
  PageTitle,
  Pagination,
  useDataViewState,
  usePaginationState,
  Input,
  Button,
  Flex,
  Skeleton,
  PageContent,
  PageActions,
  Center,
  Page,
} from '@vtex/admin-ui'

import useCookieFortunes from './hooks/useCookieFortunes'

import messages from './messages'
import constants from './data/constants'
import MyGridTable from './components/MyGridTable'

const [ThemeProvider] = createSystem({
  key: 'admin-app',
})


const AdminCookieFortune: React.FC = () => {
  const [newFortune, setNewFortune] = useState('')
  const {
    cookieFortunes,
    isLoading,
    isAddLoading,

    isDeleteLoading,
    addCookieFortune,
    deleteCookieFortune,
  } = useCookieFortunes()

  const intl = useIntl()
  const { culture: { locale } } = useRuntime()

  const view = useDataViewState()
  const pagination = usePaginationState({ pageSize: constants.ITEMS_PER_PAGE, total: 0 })
  pagination.total = cookieFortunes.length

  const currentPageItems = cookieFortunes.slice(
    (pagination.currentPage - 1) * constants.ITEMS_PER_PAGE,
    pagination.currentPage * constants.ITEMS_PER_PAGE
  )


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFortune(event.target.value)
  }

  const handleAddFortune = () => {
    if (newFortune.trim()) {
      addCookieFortune(newFortune)
      setNewFortune('')
    }
  }

  const handleDeleteFortune = (id: string) => {
    deleteCookieFortune(id)
  }

  return (
    <I18nProvider locale={locale}>
      <ThemeProvider>
        <Page >
          <PageHeader csx={{ justifyContent: 'center' }}>
            <Center csx={{
              justifyContent: 'space-between',
              width: '100%',
              height: 'auto',
              maxWidth: '99rem',
              padding: '1.5rem 2.5rem'
            }}>
              <PageTitle>
                🥠 <FormattedMessage {...messages.title} />
              </PageTitle>
              <PageActions>
                <Flex align="center" csx={{ gap: '0.5rem' }}>
                  <Input
                    id="newCookieFortune"
                    label={intl.formatMessage(messages.addFortunePlaceholder)}
                    type="text"
                    value={newFortune}
                    onChange={handleInputChange}
                    csx={{ width: '400px' }}
                  />
                  <Button
                    size="large"
                    onClick={handleAddFortune}
                    disabled={!newFortune.trim()}
                    loading={isAddLoading}
                  >
                    <FormattedMessage {...messages.addFortuneBtn} />
                  </Button>
                </Flex>
              </PageActions>
            </Center>
          </PageHeader>
          <PageContent>
            <Center csx={{
              margin: 'auto',
              width: '100%',
              maxWidth: '99rem',
              padding: '1.5rem 2.5rem'
            }}>
              {isLoading ? (
                <Skeleton csx={{ width: '100%', height: '100vh', marginTop: '2rem' }} />
              ) : (
                <DataView state={view} csx={{ width: '100%' }}>
                  <DataViewControls csx={{ justifyContent: 'flex-end' }}>
                    <Pagination
                      state={pagination}
                      preposition={intl.formatMessage(messages.of)}
                      subject={intl.formatMessage(messages.results)}
                      prevLabel={intl.formatMessage(messages.previous)}
                      nextLabel={intl.formatMessage(messages.next)}
                    />
                  </DataViewControls>
                  <MyGridTable
                    view={view}
                    currentPageItems={currentPageItems}
                    isDeleteLoading={isDeleteLoading}
                    handleDeleteFortune={handleDeleteFortune}
                  />
                </DataView>
              )}
            </Center>
          </PageContent>
        </Page>
      </ThemeProvider>
    </I18nProvider>
  )
}

export default AdminCookieFortune
