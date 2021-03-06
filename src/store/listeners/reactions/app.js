/* eslint-disable import/prefer-default-export */
import { isRoute } from 'store/drivers/redux-little-router'

export const init = (action, store) => {
  if (isRoute('HOME_SPEAKER')(store.getState())) {
    // get eventId from app event context
    const currentEventId = localStorage.getItem('currentEventId')
    if (currentEventId) {
      store.ui.app.update({ currentEventId })
      store.dispatch({ type: '@@ui/ON_LOAD_EVENT', payload: currentEventId })
    }
  }
}
