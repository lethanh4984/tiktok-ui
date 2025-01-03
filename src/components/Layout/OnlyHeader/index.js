import Header from '~/components/Layout/components/Header';

function DefeaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefeaultLayout;
