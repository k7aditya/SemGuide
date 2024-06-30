import { Helmet } from 'react-helmet-async';

import FeedbackView from 'src/sections/feedback/feedback-view';

// ----------------------------------------------------------------------

export default function FeedbackPage() {
  return (
    <>
      <Helmet>
        <title> Feedback | SemGuide </title>
      </Helmet>

      <FeedbackView />
    </>
  );
}
