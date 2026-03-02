import './HowItWorks.css'

export function HowItWorks() {
    return (
        <>
            <section className="how-it-works">
                <h2>How It Works</h2>
                <div className="steps-container">
                    <div className="step">
                        <h3>Step 1</h3>
                        <p>Description of the first step</p>
                    </div>
                    <div className="step">
                        <h3>Step 2</h3>
                        <p>Description of the second step</p>
                    </div>
                    <div className="step">
                        <h3>Step 3</h3>
                        <p>Description of the third step</p>
                    </div>
                </div>
            </section>
        </>
    );
}