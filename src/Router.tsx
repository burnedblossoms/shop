import App from './App'
import PrivacyPolicy from './PrivacyPolicy'
import { Route, Switch } from 'wouter'

export default function Router() {
  return (
    <Switch>
      <Route path='/' component={App} />
      <Route path='/privacy' component={PrivacyPolicy} />
    </Switch>
  )
}
