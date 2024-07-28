import { useState, useEffect } from "react";
import TermsDialog from "./components/TermsDialog";
import PrivacyPolicyDialog from "./components/PrivacyPolicyDialog";
import DonateDialog from "./components/DonateDialog";
import Footer from "./pages/Footer";
import Faq from "./pages/Faq";
import Main from "./pages/Main";
import Steps from "./pages/Steps";
import Toolbar from "./pages/Toolbar";
import Description from "./pages/Description";

const App = () => {
  const [dialogStates, setDialogStates] = useState({
    terms: false,
    donate: false,
    privacyPolicy: false,
  });

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
    // <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200">
    //   <nav className="w-full fixed top-0 bg-white">
    //     <div className="container mx-auto py-5 flex items-center justify-between">
    //       <h1>LOGO</h1>
    //       <button>SHARE</button>
    //     </div>
    //   </nav>
    // </div>
    <div className="min-h-screen bg-[#17191B] text-white">
      {/* Header Section */}
      <Toolbar
        page={window.location.href} // Example page URL
        title="KLIKMO"
        text="Check out this awesome TikTok downloader!"
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
    </div>
  );
};

export default App;
