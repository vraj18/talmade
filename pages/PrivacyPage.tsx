import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">Privacy Policy</h1>
        </RevealOnScroll>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              We value the trust you place in us. That is why we insist upon the highest standards for secure transactions and the protection of customer information privacy. Please read the following statement to understand our information collection and dissemination practices.
            </p>
            
            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 my-6">
              <p className="text-gray-700 font-medium">
                Note: Our Privacy Policy is subject to change at any time without prior notice. To ensure that you are aware of any changes, please review this policy periodically and especially at the time of making a transaction.
              </p>
            </div>

            <p className="text-gray-700 mb-3">
              By visiting <span className="font-medium text-blue-600">www.talmade.com</span> ("Website"), you agree to be bound by the terms and conditions of this Privacy Policy. If you do not agree, please do not use or access our Website.
            </p>
            <p className="text-gray-700">
              By mere use of the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Website's <span className="font-medium">Terms & Conditions</span>.
            </p>
          </div>

          {/* Main Content */}
          <div className="mt-8 space-y-8 text-gray-700">
            
            {/* 1. Collection of Personally Identifiable Information and Other Information */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Collection of Personally Identifiable Information and Other Information</h3>
              <p className="mb-3">
                When you use our Website, we collect and store personal information provided by you from time to time. Our primary objective in collecting this information is to provide you with a safe, efficient, smooth, and customized experience. This allows us to offer services and features that best meet your needs and to improve your experience on the Website.
              </p>
              <p className="mb-3">
                In general, you may browse the Website without revealing your identity or any personal information. Once you voluntarily provide personal information, you are no longer anonymous to us. Wherever possible, we indicate which fields are mandatory and which are optional. You always have the option to not provide certain information by choosing not to use specific features or services.
              </p>
              <p className="mb-3">
                We may automatically track certain information about you based on your behaviour on the Website. This information is used for internal research on user demographics, interests, and behaviour to better understand, protect, and serve our users. Such information is aggregated and analysed and may include:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>The URL you came from and the URL you visit next</li>
                <li>Browser type and device information</li>
                <li>IP address</li>
              </ul>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Cookies</h4>
                <p className="mb-3">
                  We use data collection devices such as <span className="font-medium">cookies</span> on certain pages of the Website to help analyse web page flow, measure promotional effectiveness, and promote trust and safety.
                </p>
                <p className="mb-3">
                  Cookies are small files placed on your device that help us provide our services. Certain Website features are available only through the use of cookies. Cookies also help reduce the need for repeated password entry and allow us to provide content tailored to your interests.
                </p>
                <p className="mb-3">
                  Most cookies are <span className="font-medium">session cookies</span>, which are automatically deleted at the end of a session. You may decline cookies through your browser settings; however, doing so may limit certain Website functionalities.
                </p>
                <p className="mb-3">
                  Please note that some third-party cookies may be placed on certain pages of the Website. We do not control the use of cookies by third parties.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 mb-3">Transactional Information</h4>
                <p className="mb-3">
                  If you choose to make a purchase or enquiry on the Website, we may collect information relating to your buying behaviour.
                </p>
                <p className="mb-3">
                  If you transact with us, we may collect additional information such as billing details and payment instrument information (credit/debit card details or other payment data), as required to complete the transaction securely.
                </p>
                <p className="mb-3">
                  If you post messages, feedback, or content on public areas of the Website, we will collect the information you provide. Such information may be retained to resolve disputes, provide customer support, and troubleshoot issues, as permitted by law.
                </p>
                <p>
                  If you contact us directly via email or other correspondence, we may collect and store such communications for record-keeping and support purposes.
                </p>
              </div>
            </section>

            {/* 2. Use of Demographic / Profile Data / Your Information */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Demographic / Profile Data / Your Information</h3>
              <p className="mb-3">
                We use personal information to provide the services you request. Where we use your information for marketing purposes, you will be given the option to opt out.
              </p>
              <p className="mb-3">
                Your information may be used to:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Provide and improve our products and services</li>
                <li>Resolve disputes and troubleshoot problems</li>
                <li>Promote a safe and secure service</li>
                <li>Collect payments</li>
                <li>Measure consumer interest</li>
                <li>Inform you about offers, products, services, and updates</li>
                <li>Customize your experience</li>
                <li>Detect and prevent fraud and other criminal activity</li>
                <li>Enforce our Terms & Conditions</li>
              </ul>
              <p className="mb-3">
                We analyse demographic and profile data to continuously improve our offerings.
              </p>
              <p className="mb-3">
                Your IP address may be used to diagnose server issues, administer the Website, and gather broad demographic information.
              </p>
              <p>
                We may occasionally request participation in optional surveys. Survey responses help us tailor Website content and offerings according to user preferences.
              </p>
            </section>

            {/* 3. Sharing of Personal Information */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Sharing of Personal Information</h3>
              <p className="mb-3">
                You agree that we may share your personal information with our corporate entities and affiliates to:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Detect and prevent fraud and identity theft</li>
                <li>Correlate related accounts to prevent misuse</li>
                <li>Facilitate joint or co-branded services you request</li>
              </ul>
              <p className="mb-3">
                Such entities will not market to you unless you explicitly opt in.
              </p>
              <p className="mb-3">
                We may disclose personal information if required by law or in good faith belief that such disclosure is necessary to:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Comply with legal obligations</li>
                <li>Enforce our Terms or Privacy Policy</li>
                <li>Protect the rights, property, or safety of users or the general public</li>
              </ul>
              <p>
                In the event of a merger, acquisition, restructuring, or sale of assets, your personal information may be transferred to the new business entity, which will be required to follow this Privacy Policy.
              </p>
            </section>

            {/* 4. Links to Other Websites */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Links to Other Websites</h3>
              <p>
                Our Website may contain links to third-party websites that may collect personal information about you. <span className="font-medium">Talmade Apparels Private Limited</span> is not responsible for the privacy practices or content of such external websites.
              </p>
            </section>

            {/* 5. Security Precautions */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Security Precautions</h3>
              <p className="mb-3">
                We maintain reasonable security measures to protect against loss, misuse, and alteration of information under our control. Secure servers and strict access controls are used wherever applicable.
              </p>
              <p>
                While we strive to protect your information, no method of transmission over the internet is completely secure.
              </p>
            </section>

            {/* 6. Choice / Opt-Out */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Choice / Opt-Out</h3>
              <p>
                We provide users the option to opt out of receiving non-essential promotional or marketing communications after account registration or at any time thereafter.
              </p>
            </section>

            {/* 7. Advertisements */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. Advertisements</h3>
              <p>
                We may use third-party advertising companies to display advertisements on the Website. These companies may use non-personally identifiable information about your visits to this and other websites to provide advertisements relevant to your interests.
              </p>
            </section>

            {/* 8. Your Consent */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Consent</h3>
              <p className="mb-3">
                By using the Website and/or providing your information, you consent to the collection, use, and disclosure of information in accordance with this Privacy Policy.
              </p>
              <p>
                Any changes to this Privacy Policy will be posted on this page to keep you informed about how we collect, use, and protect your information.
              </p>
            </section>

            {/* 9. Grievance Officer */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Grievance Officer</h3>
              <p className="mb-3">
                In accordance with the <span className="font-medium">Information Technology Act, 2000</span> and rules made thereunder, the details of the Grievance Officer are provided below:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-medium mb-2">Email: <span className="text-blue-600">info.talmade@gmail.com</span></p>
                <p className="font-medium mb-1">Working Hours:</p>
                <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
                <p>Sat: 10:00 AM – 6:00 PM</p>
              </div>
            </section>

            {/* Footer */}
            <div className="pt-8 mt-8 border-t border-gray-200 text-center">
              <p className="text-gray-700 font-medium">
                © Talmade Apparels Private Limited. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};