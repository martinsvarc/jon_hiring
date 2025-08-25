import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold premium-text mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <h2 className="text-xl md:text-2xl font-bold premium-text mb-4">Introduction</h2>
          <p>
            Jon McPherson ("we", "us", or "our company") respects your privacy. This privacy policy explains how we collect, use, store, and share information that you provide to us when using our websites and services.
          </p>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Personal Information:</strong> Name, age, email, phone number, city, social media profiles</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
            <li><strong>Application Data:</strong> Responses to job application questions</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">How We Use Your Information</h2>
          <p>We use your information for:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Processing your job application</li>
            <li>Communicating with you about opportunities</li>
            <li>Improving our services</li>
            <li>Legal compliance</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Service providers who help us operate our business</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Your Rights</h2>
          <p>Under Mexican data protection law, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Application data is typically retained for 2 years unless you request deletion.
          </p>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or wish to exercise your rights, please contact us at:
          </p>
          <p className="mt-4 p-4 bg-[rgb(var(--charcoal))] border border-[rgb(var(--velvet-gray))] rounded-lg">
            Email: <span className="premium-text font-semibold">contact@jonmcpherson.com</span>
          </p>

          <h2 className="text-xl md:text-2xl font-bold premium-text mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>

          <div className="mt-8 p-4 bg-[rgb(var(--charcoal))] border border-[rgb(var(--velvet-gray))] rounded-lg">
            <p className="text-sm text-white/80">
              <strong>Last Updated:</strong> January 2025
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/terms-of-service"
            className="text-[#ffde59] hover:underline"
          >
            Terms of Service
          </a>
          <span className="mx-4 text-white/60">|</span>
          <a 
            href="/privacy-policy"
            className="text-[#ffde59] hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  )
}
