import { useState, useEffect } from "react";
import Loading from "react-loading";
import TermsDialog from "./components/TermsDialog";
import PrivacyPolicyDialog from "./components/PrivacyPolicyDialog";
import DonateDialog from "./components/DonateDialog";
import Footer from "./pages/Footer";
import Faq from "./pages/Faq";
import Main from "./pages/Main";
import Steps from "./pages/Steps";
import Toolbar from "./pages/Toolbar";
import Description from "./pages/Description";
import ScrollToTopButton from "./components/ScrollToTopButton";

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

  // Open dialog by setting its state to true
  const openDialog = (dialog) => {
    setDialogStates((prevStates) => ({
      ...prevStates,
      [dialog]: true,
    }));
  };

  // Close dialog by setting its state to false
  const closeDialog = (dialog) => {
    setDialogStates((prevStates) => ({
      ...prevStates,
      [dialog]: false,
    }));
  };

  return (
    <div className="min-h-screen bg-[#17191B] text-white">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loading type="bubbles" color="#fff" height={100} width={100} />
        </div>
      ) : (
        <>
          {/* Header Section */}
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
      )}
    </div>
  );
};

export default App;
