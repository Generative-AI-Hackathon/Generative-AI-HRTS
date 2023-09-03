import { RouterProvider } from 'react-router-dom';
import Router from './Routers';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux';
import { auth } from './config/firebase';


function App() {
  const dispatch = useDispatch();
  onAuthStateChanged(auth, async (user) => {
    let role = "";
    if (user) {
      const idToken = await user?.getIdTokenResult();
      role = idToken?.claims.role;
    }
    
    dispatch(setCurrentUser({ user, role }))
  })


  return (
      <RouterProvider router={Router} />
  )
}

export default App
