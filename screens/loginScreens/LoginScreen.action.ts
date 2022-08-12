
export const USER_ID = 'USER_ID'

export function UserIdAction(userId) {
  return {
    type: USER_ID,
    userId
  }
}
