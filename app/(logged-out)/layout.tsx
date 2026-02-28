type Props = {
  children?: React.ReactNode;
};

function LoggedOutLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen items-center p-24 justify-center">
      {children}
    </div>
  );
}

export default LoggedOutLayout;
