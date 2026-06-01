import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children, hideWhatsApp = false }: { children: ReactNode; hideWhatsApp?: boolean }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {!hideWhatsApp && <WhatsAppButton />}
    </div>
  );
};

export default Layout;
