export default function DashboardLayout({ children }) {
    return (
        <section>
            <side>Dashboard Menu</side>
            <div>{children}</div>
        </section>
    );
}