import './App.css'
import { XFollowCard } from './XFollowCard'

const users = [
  {
    userName: 'MetrodeQuito',
    name: 'Metro de Quito',
    isFollowing: true
  },
  {
    userName: 'Apple',
    name: 'Apple',
    isFollowing: false
  },
  {
    userName: 'Google',
    name: 'Google',
    isFollowing: true
  },
  {
    userName: 'DiarioExtraEc',
    name: 'Diario Extra',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
        <h1 className='x-title'>Who to follow</h1>
      {
        users.map(({ userName, name, isFollowing }) => (
          <XFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </XFollowCard>
        ))
      }
    </section>
  )
}