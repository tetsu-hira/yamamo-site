import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <>
      {/* <Menu width={250} /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}