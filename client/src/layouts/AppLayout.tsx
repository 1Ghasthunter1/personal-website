import Footer from "../components/Footer";

const AppLayout = ({
  header,
  children,
}: {
  header: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <div className="justify-center relative min-h-screen bg-gray-200 w-screen overflow-hidden">
      <div>{header}</div>
      <div className="w-full flex justify-center">
        <div className="m-8 max-w-5xl">{children}</div>
      </div>
      <div className="h-24"></div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
