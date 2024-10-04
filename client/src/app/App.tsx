// import React from 'react';
//    import Register from './Register';
//    import Login from './Login';

//    const App: React.FC = () => {
//        return (
//            <div>
//                <h1>Авторизация</h1>
//                <Register />
//                <Login />
//            </div>
//        );
//    };

//    export default App;


import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>

      
        <RouterProvider router={router} />
      
    </Provider>
  );
}

export default App;