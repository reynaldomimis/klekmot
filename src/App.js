import { useState, useEffect, lazy, Suspense } from "react";
import Loading from "react-loading";

const TermsDialog = lazy(() => import("./components/TermsDialog"));
const PrivacyPolicyDialog = lazy(() =>
  import("./components/PrivacyPolicyDialog")
);
const DonateDialog = lazy(() => import("./components/DonateDialog"));
const Footer = lazy(() => import("./pages/Footer"));
const Faq = lazy(() => import("./pages/Faq"));
const Main = lazy(() => import("./pages/Main"));
const Steps = lazy(() => import("./pages/Steps"));
const Toolbar = lazy(() => import("./pages/Toolbar"));
const Description = lazy(() => import("./pages/Description"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));

const App = () => {
  const [dialogStates, setDialogStates] = useState({
    terms: false,
    donate: false,
    privacyPolicy: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openDialog = (dialog) => {
    setDialogStates((prevStates) => ({
      ...prevStates,
      [dialog]: true,
    }));
  };

  const closeDialog = (dialog) => {
    setDialogStates((prevStates) => ({
      ...prevStates,
      [dialog]: false,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading type="bubbles" color="#fff" height={100} width={100} />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <Loading type="bubbles" color="#fff" height={100} width={100} />
            </div>
          }
        >
          <>
            <Toolbar
              page={window.location.href}
              title="KLEKMOT"
              text="Check out this awesome TikTok downloader! Copy this link on any social media to experience downloading TikTok videos without a watermark"
            />
            <Main />
            <Steps />
            <Description />
            <Faq />
            <Footer openDialog={openDialog} />
            <TermsDialog
              isOpen={dialogStates.terms}
              onClose={() => closeDialog("terms")}
            />
            <DonateDialog
              isOpen={dialogStates.donate}
              onClose={() => closeDialog("donate")}
            />
            <PrivacyPolicyDialog
              isOpen={dialogStates.privacyPolicy}
              onClose={() => closeDialog("privacyPolicy")}
            />
            <ScrollToTopButton />
          </>
        </Suspense>
      )}
    </div>
  );
};

export default App;
