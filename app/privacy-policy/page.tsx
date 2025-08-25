import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">


      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="premium-card rounded-xl p-6 md:p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl md:text-2xl font-bold premium-text mb-4">Introduction</h2>
            <p>
              Jon McPherson ("we", "us", or "our company") respects your privacy. These privacy policies explain how we collect, use, store, and share information that you provide to us when using our websites and services.
            </p>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Legal Basis for Processing (Article 6 GDPR)</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Full consent (Art. 6(1)(a) GDPR):</strong> For marketing purposes and analytical cookies
              </li>
              <li>
                <strong>Contract performance (Art. 6(1)(b) GDPR):</strong> For processing your job application
              </li>
              <li>
                <strong>Legitimate interest (Art. 6(1)(f) GDPR):</strong> For improving our services and security
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">What Data We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal identifiers:</strong> Name, email, phone number, or other contact information you provide
              </li>
              <li>
                <strong>Technical data:</strong> IP address, device type, browser, location, and browsing behavior
              </li>
              <li>
                <strong>Usage data:</strong> Interactions with our websites including clicks, page views, and navigation paths
              </li>
              <li>
                <strong>Third-party data:</strong> Information received from tools, platforms, or partners we use for marketing or analysis
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">How We Collect It</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Directly from you:</strong> When you fill out forms, contact us, or subscribe</li>
              <li><strong>Automatically:</strong> Through cookies, tracking tools, and session data</li>
              <li><strong>Through partners:</strong> From advertising platforms, CRM tools, or integrations</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">How We Use It</h2>
            <p>Your data helps us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries or requests</li>
              <li>Send transactional or marketing communications</li>
              <li>Fulfill legal obligations or enforce our terms</li>
              <li>Optimize user experience and measure performance</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Sharing Your Information</h2>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted service providers (hosting, email, analytics)</li>
              <li>Our subsidiaries or affiliates</li>
              <li>Buyers or partners in case of business sale or merger</li>
              <li>As required by law or to protect our rights</li>
            </ul>
            <p className="mt-4">
              <strong>We never sell your personal data.</strong>
            </p>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Your Rights (Articles 15-22 GDPR)</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of access (Art. 15):</strong> Obtain information about what data we process about you</li>
              <li><strong>Right to rectification (Art. 16):</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to erasure (Art. 17):</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to restriction (Art. 18):</strong> Restrict how we process your data</li>
              <li><strong>Right to data portability (Art. 20):</strong> Obtain your data in a structured format</li>
              <li><strong>Right to object (Art. 21):</strong> Object to the processing of your data</li>
              <li><strong>Right to withdraw consent (Art. 7):</strong> Withdraw consent at any time</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Data Retention Period</h2>
            <p>We retain your personal data only for as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Job applications:</strong> 2 years from the application date</li>
              <li><strong>Marketing data:</strong> Until consent withdrawal or 3 years</li>
              <li><strong>Analytics data:</strong> 26 months</li>
              <li><strong>Technical logs:</strong> 12 months</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Data Security</h2>
            <p>
              We protect your data with modern security measures including encryption, firewalls, and secure access controls.
            </p>
            <p className="mt-4">
              However, no internet transmission is 100% secure. Sending information is at your own risk.
            </p>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Policy Updates</h2>
            <p>
              We may update these policies as needed. If significant changes occur, we will notify you on these pages. Please check them regularly.
            </p>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Contact</h2>
            <p>
              Questions? Write to us at{" "}
              <span className="premium-text font-semibold">martinsvarcbus@gmail.com</span>
            </p>

            <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Data Processing Registration</h2>
            <p className="mt-2">
              Our processing of personal data is in compliance with GDPR regulation (EU 2016/679). Jon McPherson is not required to be registered with the DPA.
            </p>


          </div>

          <div className="mt-8 pt-6 border-t border-[#7A5C2E]/30">
            <Link href="/" className="premium-text hover:text-[#e7c078] font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="premium-gradient-subtle py-6 md:py-8">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <p className="text-sm md:text-base text-black">Copyright 2025 Jon McPherson</p>
          <div className="flex justify-center gap-4 md:gap-6 mt-2">
            <Link
              href="/privacy-policy"
              className="text-black/80 hover:text-black transition-colors text-xs md:text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <span className="text-black/50">|</span>
            <Link
              href="/terms-of-service"
              className="text-black/80 hover:text-black transition-colors text-xs md:text-sm font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
