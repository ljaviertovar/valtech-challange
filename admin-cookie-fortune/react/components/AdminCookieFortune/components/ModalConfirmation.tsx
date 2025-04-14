import React from 'react'
import { Button, Flex, Modal, ModalButton, ModalContent, ModalFooter, ModalHeader, Text, useModalState } from '@vtex/admin-ui'
import { FormattedMessage } from 'react-intl'

import messages from '../messages'

interface Props {
  label: React.ReactNode
  title: string
  variant?: 'primary' | 'secondary' | 'critical'
  loading?: boolean
  children: React.ReactNode
  onConfirm: () => void
}

export default function ModalConfirmation({ label, title, variant, loading, children, onConfirm }: Props) {
  const modal = useModalState()

  return (
    <>
      <Button
        variant={variant || 'secondary'}
        onClick={modal.toggle}
      >
        {label}
      </Button>

      <Modal aria-label="dialog" state={modal}>
        <ModalHeader>
          <Text variant="title1" tone="critical">{title}</Text>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <Flex justify="flex-end" style={{width:"100%"}}>
            <ModalButton variant='neutralTertiary' onClick={modal.toggle}>
              <FormattedMessage {...messages.cancelBtn} />
            </ModalButton>
            <ModalButton loading={loading} variant={variant} onClick={onConfirm}>
              <FormattedMessage {...messages.confirmBtn} />
            </ModalButton>
          </Flex>
        </ModalFooter>
      </Modal>
    </>
  )
}
