
export const PRIVACY_POLICY_MODAL = 'PRIVACY_POLICY_MODAL'

export function PrivacyPolicyAction(ppModal: Boolean) {
  return {
    type: PRIVACY_POLICY_MODAL,
    ppModal
  }
}
