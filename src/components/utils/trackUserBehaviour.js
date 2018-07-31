export const CHECKOUT_OPENED_MODAL = 'CHECKOUT_OPENED_MODAL'
export const CHECKOUT_USER_CLOSED_MODAL = 'CHECKOUT_USER_CLOSED_MODAL'
export const VOUCHER_VALIDATE = 'VOUCHER_VALIDATE'
export const CHECKOUT_PAYMENT_VALIDATE_ERROR = 'CHECKOUT_PAYMENT_VALIDATE_ERROR'
export const CHECKOUT_PAYMENT_REQUEST = 'CHECKOUT_PAYMENT_REQUEST'
export const CHECKOUT_PAYMENT_SUCCESS = 'CHECKOUT_PAYMENT_SUCCESS'

const trackUserBehaviour = ({ event, payload = {} }) => {
  if (typeof window === 'undefined') {
    return
  }
  window.dataLayer &&
    window.dataLayer.push({
      event,
      payload,
    })
}

export default trackUserBehaviour
