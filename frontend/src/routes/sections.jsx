import React, { lazy, Suspense, useContext } from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

import AuthContext from 'src/context/authContext';
import DashboardLayout from 'src/layouts/dashboard';

const IndexPage = lazy(() => import('src/pages/app'));
const ProfilePage = lazy(() => import('src/pages/profile'));
const InfoPage = lazy(() => import('src/pages/info'));
const Papers = lazy(() => import('src/pages/papers'));
const Page404 = lazy(() => import('src/pages/page-not-found'));
const LandingPage = lazy(() => import('src/pages/landing_page/landing_page'));
const SignInPage = lazy(() => import('src/pages/signin/SignIn'));
const SignUpPage = lazy(() => import('src/pages/signin/SignUp'));
const FeedbackPage = lazy(() => import('src/pages/feedback'));

export default function Router() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <DashboardLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </DashboardLayout>
          ) : (
            <Navigate to="landing-page" replace />
          )
        }
      >
        <Route index element={<IndexPage />} />
        {/* Define other routes here */}
        <Route path="profile" element={<ProfilePage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="papers" element={<Papers />} />
        <Route path="feedback" element={<FeedbackPage />} />
      </Route>
      {/* <Route path="login" element={<LoginPage />} /> */}
      {/* Define other routes here */}
      <Route path="landing-page" element={<LandingPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
