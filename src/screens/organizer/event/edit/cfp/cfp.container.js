import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { reduxForm } from 'redux-form'
import forRoute from 'hoc-little-router'

import CFPForm from './cfp'

const FORM_NAME = 'cfp-edit'

const mapStore = (store, { eventId }) => {
  const event = store.data.events.get(eventId)
  return {
    type: event && event.type,
    initialValues: event,
    onSubmit: () => store.dispatch('@@ui/ON_UPDATE_EVENT_CFP'),
  }
}

export default compose(
  forRoute.absolute('EDIT_EVENT_CFP'),
  inject(mapStore),
  reduxForm({ form: FORM_NAME }),
)(CFPForm)
