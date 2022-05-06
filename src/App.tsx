import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Styles
import { GlobalStyle } from './App.styles';
// Layout
import ApplicationLayout from './layouts/ApplicationLayout';

// Implementing Lazy Loading on React Router
const Landing = React.lazy(() => import('./pages/landing/Landing'));
const SignIn = React.lazy(() => import('./pages/signin/SignIn'));
const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const Browse = React.lazy(() => import('./pages/browse/Browse'));
const NotFound = React.lazy(() => import('./pages/not-found/NotFound'));
const Registration = React.lazy(() => import('./components/registration/Registration'));
const SignUpForm = React.lazy(() => import('./components/signup-form/SignUpForm'));
const ChoosePlan = React.lazy(() => import('./components/choose-plan/ChoosePlan'));
const PlanForm = React.lazy(() => import('./components/plan-form/PlanForm'));

// interface AuthRouteProps {
//   path: string,
//   element: ReactNode,
// }

// function AuthenticatedRoute({ path, element }: AuthRouteProps): React.ReactElement {
//   return (
//     <Route
//       path={path}
//       children={element} />
//   )
// }

function App() {

  const auth: boolean = false;

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <ApplicationLayout>
          <Suspense fallback={<></>}>
            <Routes>
              {
                !auth && (
                  <React.Fragment>
                    <Route index element={<Landing />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} >
                      <Route path="registration" element={<Registration />} />
                      <Route path="form" element={<SignUpForm />} />
                      <Route index element={<ChoosePlan />} />
                      <Route path="plan-form" element={<PlanForm />} />
                    </Route>
                    <Route path="browse" element={<Browse />} />
                  </React.Fragment>
                )
              }
              {
                auth && (
                  <React.Fragment>
                    <Route path="browse" element={<Browse />} />
                    <Route index element={<Navigate to="/browse" />} />
                  </React.Fragment>
                )
              }
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ApplicationLayout>
      </Router>
    </div>
  );
}

export default App;
