import Footer from "../components/Footer";

const AppLayout = ({
  header,
  children,
}: {
  header: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <div className="min-h-screen bg-gray-200 w-screen overflow-hidden">
      <div>{header}</div>
      <div className="m-8">{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
