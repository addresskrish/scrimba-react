import { useState } from 'react'
import './App.css'

function App() {

  type User = {
    login: string
    avatar_url: string
    html_url: string
    bio: string
    public_repos: number
    followers: number
    following: number
  }

  const [username, setUsername] = useState('')

  const [userData, setUserData] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  const handleClick = async () => {
    setError('');
    if (!username.trim()) return;
    setLoading(true);
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        setError('Invalid username');
        setLoading(false);
        return;
      }
      const data: User = await response.json();
      setUserData(data);
    } catch (error) {
      setError('Something went wrong');
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
  <main className='flex flex-col items-center justify-center min-h-screen font-inter'>
        { loading ? (
          <div role="status" className="flex flex-col items-center justify-center">
            <div className="spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : userData ? (
            <div className='flex flex-col items-center justify-center p-8 rounded-lg'>
              <img src={userData.avatar_url} alt={userData.login} className='w-40 h-40 object-cover rounded-lg mx-auto border-4 border-gray-200' />
              <h2 className='text-3xl font-bold mt-6 mb-2'>{userData.login}</h2>
              <div className='flex flex-row gap-6 justify-center items-center text-lg font-medium mb-4'>
                <span className='text-gray-700'>Repos: <span className='font-bold'>{userData.public_repos}</span></span>
                <span className='text-gray-700'>Followers: <span className='font-bold'>{userData.followers}</span></span>
                <span className='text-gray-700'>Following: <span className='font-bold'>{userData.following}</span></span>
              </div>
              {userData.bio && <h5 className='text-gray-500 mb-4 text-center max-w-md'>{userData.bio}</h5>}
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className='mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200'>Follow Account</a>
              <button className='mt-4 bg-black text-white p-2 px-6 rounded-md' onClick={() => { setUserData(null); setError(''); }}>Back</button>
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Github <mark className="px-2 text-white bg-blue-600 rounded-md dark:bg-blue-500">Profile</mark> Finder</h1>
              <input className='mt-4 border border-gray-300 p-2 rounded-md w-80' type="text" placeholder='Enter GitHub username' value={username} onChange={(e) => { setUsername(e.target.value); setError(''); }} />
              <button className='mt-4 bg-black text-white p-2 px-6 rounded-md' onClick={handleClick} disabled={!username.trim()}>Find</button>
              {error && <p className='mt-2 text-red-500'>{error}</p>}
            </div>
          )
        }
      </main>
    </>
  )
}

export default App
