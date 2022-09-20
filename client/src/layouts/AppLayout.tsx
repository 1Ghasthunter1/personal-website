import Footer from "../components/Footer";

const AppLayout = ({
  header,
  children,
}: {
  header: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div>{header}</div>
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
