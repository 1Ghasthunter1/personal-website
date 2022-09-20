const AppLayout = ({
  header,
  children,
}: {
  header: JSX.Element;
  children: JSX.Element;
}) => {
  return (
    <div className="h-screen bg-gray-200">
      <div>{header}</div>
      {children}
    </div>
  );
};

export default AppLayout;
