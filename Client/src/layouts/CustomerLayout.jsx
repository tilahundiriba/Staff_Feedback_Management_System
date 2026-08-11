import { Outlet } from "react-router-dom";
// import Footer from "../components/layout/Footer";
import LanguageSelector from "../components/LanguageSelector.jsx";
import { useTranslation } from "react-i18next";
function CustomerLayout() {
   const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}

      <header className="bg-white shadow-sm flex items-center">
        <div
          className="
            w-full
            max-w-6xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-3
            sm:py-4
          "
        >
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              sm:justify-start
              gap-2
              sm:gap-4
            "
          >
            <img
              src="/ADDIS_MESOB.jpg"
              alt="Addis Mesob Organization Logo"
              className="
                w-10 h-10
                sm:w-11 sm:h-11
                md:w-12 md:h-12
                rounded-full
                object-cover
                flex-shrink-0
              "
            />

            <div
              className="
                flex
                flex-col
                sm:flex-row
                items-center
                sm:items-center
                gap-0
                sm:gap-3
                text-center
                sm:text-left
              "
            >
              <h1
                className="
                  font-bold
                  text-gray-800
                  text-base
                  sm:text-lg
                  md:text-xl
                  whitespace-nowrap
                "
              >
                ADDIS MESOB Organization
              </h1>
              <span className="hidden sm:block text-gray-300">|</span>
              <p
                className="
                  text-gray-500
                  text-xs
                  sm:text-sm
                  md:text-base
                "
              >
             
                {t("staffFeedbackSystem")}
              </p>
              <LanguageSelector />
            </div>
          </div>
        </div>
      </header>

      {/* Page */}

      <main
        className="
          flex-1
          w-full
          flex
          items-center
          justify-center
          px-4
          py-6
          sm:px-6
          sm:py-8
          md:px-8
          lg:px-10
        "
      >
        <div className="w-full max-w-6xl">
          <Outlet />
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default CustomerLayout;
