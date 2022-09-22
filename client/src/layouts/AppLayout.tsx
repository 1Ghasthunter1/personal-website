import Footer from "../components/Footer";

const AppLayout = ({
  header,
  children,
}: {
  header: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <div className="relative min-h-screen bg-gray-200 w-screen overflow-hidden">
      <div>{header}</div>
      <div className="m-8">{children}</div>
      <div className="h-24"></div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
