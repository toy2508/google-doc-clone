interface AutoLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AutoLayoutProps) => {
    return (
        <div className={"min-h-screen flex flex-col items-center justify-center"}>
            <nav className={"w-full bg-red-500"} />
            {children}
        </div>
    )
}

export default AuthLayout;