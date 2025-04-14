import React from 'react'
import { useIntl } from 'react-intl'

import {
  useDataGridState,
  IconTrash,
  DataGrid,
  Text,
  Flex,
} from '@vtex/admin-ui'

import messages from '../messages'
import constants from '../data/constants'

import { CookieFortune } from '../../../types'
import ModalConfirmation from './ModalConfirmation'

interface Props {
  view: any
  currentPageItems: CookieFortune[]
  isDeleteLoading: boolean
  handleDeleteFortune: (id: string) => void
}

export default function MyGridTable({ view, currentPageItems, isDeleteLoading, handleDeleteFortune }: Props) {
  const intl = useIntl()

  const grid = useDataGridState<CookieFortune>({
    view,
    columns: [
      { id: 'IdcookieFortune', header: '#' },
      { id: 'CookieFortune', header: intl.formatMessage(messages.colTitleCookieFortune) },
      {
        id: 'Actions',
        header: intl.formatMessage(messages.colTilteActions),
        resolver: {
          type: 'root',
          render: ({ item }) => (
            <ModalConfirmation
              title={intl.formatMessage(messages.modalConfirmDeleteTitle)}
              label={<IconTrash />}
              variant='critical'
              loading={isDeleteLoading}
              onConfirm={() => handleDeleteFortune(item.DocumentId)}
            >
              <Flex direction='column'>
                <Text>
                  {intl.formatMessage(messages.modalConfirmDeleteSubtitle)}
                </Text>
                <Text variant="body">
                  ⚊
                  {item.CookieFortune}
                </Text>
              </Flex>
            </ModalConfirmation>
          ),
        },
      },
    ],
    items: currentPageItems,
    length: constants.ITEMS_PER_PAGE,
  })
  return (
    <DataGrid state={grid} />
  )
}
