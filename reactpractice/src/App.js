import { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/Fragment';
import Table from './components/Table';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/routing/Home';
// import { About } from './components/About';
import { Login } from './components/routing/Login';
import { Navbar } from './components/routing/Navbar';
import { OrderSummary } from './components/routing/OrderSummary';
import { NoMatch } from './components/routing/NoMatch';
import { Products } from './components/routing/Products';
import { FeaturedProduct } from './components/routing/FeaturedProduct';
import { NewProducts } from './components/routing/NewProducts';
import { Users } from './components/routing/Users';
import { UserDetails } from './components/routing/UserDetails';
import { Adminl } from './components/routing/Adminl';
import { Profile } from './components/routing/Profile';
import { AuthProvider } from './components/routing/auth';
import { RequireAuth } from './components/routing/RequireAuth';
import { lazy, Suspense } from 'react';
const LazyAbout = lazy(() => import('./components/routing/About'));
import { MyComponent } from './components/UseEffect';


function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Suspense fallback='Loading...'>
          <LazyAbout />
        </Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProducts />}>
          </Route>
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='adminl' element={<Adminl />} />
        </Route>
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      </AuthProvider >
    //  <MyComponent />
      );
}
// class App extends Component{
//   render(){
//     return(
//     <div className='App'>
//       <Table />
//       {/* <FragmentDemo /> */}
//       {/* <LifecycleA /> */}
//       {/* <Form /> */}
//       {/* <Inline /> */}
//       {/* <Stylesheet primary={true} /> */}
//       {/* <NameList /> */}
//       {/* <UserGreeting /> */}
//       {/* <FunctionClick />
//       <ClassClick /> */}
//     </div>
//     )
//   }
// }

export default App;
