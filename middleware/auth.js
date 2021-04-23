import { firebase } from '~/plugins/firebase'

export default function ({ redirect }) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      return redirect('/login')
    } else {
      // eslint-disable-next-line no-console
      console.log(user)
    }
  })
}
