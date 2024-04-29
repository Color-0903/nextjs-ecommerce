export default function NofificationWrap({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="fixed top-10 right-1 z-50 opacity-95">
        { children }
    </div>

}