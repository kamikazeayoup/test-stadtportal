import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import CookieConsentBar from "@/components/CookieConsentBar";
import ChatWidget from "@/components/ChatWidget";
import BackToTop from "@/components/BackToTop";
import KlaoWidgetLoader from "@/components/KlaoWidgetLoader";

export const metadata = {
  title: "Stadt Musterstadt — Bürgerportal",
  description: "Offizielles Bürgerportal der Stadt Musterstadt (QA-Testseite für den KLAO-Widget).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <AnnouncementBar />
        <Header />
        {children}
        <Footer />
        <CookieConsentBar />
        <ChatWidget corner="left" />
        <BackToTop />
        <KlaoWidgetLoader />
      </body>
    </html>
  );
}
