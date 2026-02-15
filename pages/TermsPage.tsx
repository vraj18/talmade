import React from 'react';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
            Terms & Conditions
          </h1>
        </RevealOnScroll>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          {/* Introduction */}
          <div className="mb-10 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Please carefully read the following Terms of Use ("Terms of Use") before using{' '}
              <span className="font-semibold">www.talmade.com</span> ("Website").
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              By accessing or using this Website, you agree to be bound by these Terms of Use.
              These Terms of Use may be updated from time to time. You are advised to review
              the date of the Terms of Use and check for any changes since your last visit.
              If at any time you do not agree to these Terms of Use, please discontinue use of this Website.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-gray-700 max-w-4xl mx-auto">

            {/* 1. Website Operator */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Website Operator</h3>
              <p className="mb-3">
                This Website is operated by <span className="font-semibold">Talmade Apparels Private Limited</span>
                ("Talmade Apparels", "Company", "we", "us", "our").
              </p>
              <p className="mb-3">
                Talmade Apparels Private Limited was founded on 6 July 2011 by Mr. Vijay Kumar Gupta under the
                name Gupta Silk Mills and was subsequently rebranded as Talmade Apparels on 9 July 2024.
                The Company is engaged in the manufacturing, wholesale, and supply of high-quality uniforms
                for industries including education, security and defence, industrial, corporate, healthcare, and hospitality.
              </p>
              <p>
                By continuing to use this Website, you acknowledge and agree to these Terms of Use.
              </p>
            </section>

            {/* 2. Accuracy, Completeness and Timeliness of Information */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Accuracy, Completeness and Timeliness of Information</h3>
              <p className="mb-3">
                We are not responsible if information made available on this Website is inaccurate, incomplete, or not up to date.
                The content on this Website is provided for general information purposes only and should not be relied upon as
                the sole basis for making decisions without independent verification.
              </p>
              <p>
                This Website may contain historical information that may not be current and is provided solely for reference.
                We reserve the right to modify the contents of this Website at any time without prior notice and have no obligation
                to update any information. It is your responsibility to monitor changes to the Website.
              </p>
            </section>

            {/* 3. Orders, Prohibition on Resale, and Pricing */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Orders, Prohibition on Resale, and Pricing</h3>
              <p className="mb-3">
                Information displayed on this Website does not constitute a binding offer to sell any product.
                We reserve the right, at our sole discretion, to accept or reject any order, in whole or in part,
                at any time, even after an order confirmation has been issued or payment has been processed.
              </p>
              <p className="mb-3">
                Products purchased from this Website may not be resold by you or any third party.
                Prices displayed on the Website are quoted in Indian Rupees (INR) and are valid only within India.
              </p>
              <p className="mb-3">
                In the event that a product is listed at an incorrect price, Talmade Apparels reserves the right
                to refuse or cancel any order placed for such product, regardless of whether payment has been processed.
                If payment has already been made and the order is cancelled, the amount will be refunded to the original payment method.
              </p>
              <p>Prices and availability are subject to change without prior notice.</p>
            </section>

            {/* 4. Product Information */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Product Information</h3>
              <p>
                Talmade Apparels does not guarantee that the colors, textures, or appearance of products displayed on
                the Website will exactly match the delivered product. Display variations may occur due to differences
                in screen settings, resolution, or device configurations.
              </p>
            </section>

            {/* 5. Use of Website Content */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Use of Website Content</h3>
              <p className="mb-3">
                All content on this Website—including text, designs, graphics, logos, images, audio clips, downloads,
                software, code, and layout—is the exclusive property of Talmade Apparels Private Limited or its licensors
                and is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p className="mb-3">
                You may view, download, and print Website content solely for personal and non-commercial use, provided
                that all copyright and proprietary notices are retained. Any other use—including reproduction, modification,
                distribution, transmission, publication, resale, reverse engineering, or creation of derivative works—is
                strictly prohibited without prior written consent.
              </p>
              <p>We reserve the right to suspend or terminate access to the Website at our sole discretion without notice.</p>
            </section>

            {/* 6. User Submissions */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. User Submissions</h3>
              <p className="mb-3">
                You are solely responsible for any material you submit through the Website. You must not upload or
                distribute content that is unlawful, defamatory, obscene, threatening, misleading, infringing on
                intellectual property rights, or otherwise objectionable.
              </p>
              <p className="mb-3">
                By submitting content, you grant Talmade Apparels a non-exclusive, royalty-free, perpetual, irrevocable,
                and sublicensable license to use, reproduce, modify, distribute, and display such content globally in any media.
              </p>
              <p>
                You represent that you own or control all rights to the content you submit and agree to indemnify
                Talmade Apparels against any claims arising from such content.
              </p>
            </section>

            {/* 7. User Conduct and Account Security */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. User Conduct and Account Security</h3>
              <p className="mb-3">
                Certain Website features may require registration. You agree to provide accurate, current, and complete
                information during registration. We reserve the right to suspend or terminate accounts containing false or misleading information.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials and for all activities
                conducted through your account. If you suspect unauthorized use, you must notify us immediately.
              </p>
            </section>

            {/* 8. Links to Third-Party Websites */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Links to Third-Party Websites</h3>
              <p>
                This Website may contain links to third-party websites for convenience. Talmade Apparels does not control
                or endorse such websites and is not responsible for their content, products, services, or privacy practices.
                Accessing linked websites is at your own risk.
              </p>
            </section>

            {/* 9. Trademarks and Copyrights */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Trademarks and Copyrights</h3>
              <p>
                All trademarks, logos, and service marks displayed on this Website are the property of Talmade Apparels
                or their respective owners. Nothing on this Website grants any license or right to use any trademark
                without prior written permission.
              </p>
            </section>

            {/* 10. Disclaimers */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimers</h3>
              <p className="mb-3">
                This Website is provided on an "as is" and "as available" basis. Talmade Apparels makes no warranties,
                express or implied, including but not limited to warranties of merchantability, fitness for a particular
                purpose, accuracy, reliability, or non-infringement.
              </p>
              <p>
                We do not guarantee uninterrupted or error-free access, nor do we warrant that the Website or servers
                are free from viruses or harmful components.
              </p>
            </section>

            {/* 11. Limitation of Liability */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h3>
              <p className="mb-3">
                To the fullest extent permitted by law, Talmade Apparels shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising from your use of the Website, including but not
                limited to loss of data, profits, or business opportunities.
              </p>
              <p>Your sole remedy for dissatisfaction with the Website is to discontinue its use.</p>
            </section>

            {/* 12. Indemnification */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h3>
              <p>
                You agree to indemnify and hold harmless Talmade Apparels, its directors, officers, employees, and
                affiliates from any claims, losses, damages, liabilities, and expenses arising from your use of the
                Website or violation of these Terms.
              </p>
            </section>

            {/* 13. Governing Law and Jurisdiction */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Jurisdiction</h3>
              <p className="mb-3">
                These Terms of Use shall be governed by and construed in accordance with the laws of India.
                You irrevocably submit to the jurisdiction of the courts of Mumbai, India.
              </p>
              <p>
                Any dispute arising out of or relating to these Terms shall first be attempted to be resolved amicably.
                If unresolved, the dispute shall be referred to arbitration under the Arbitration and Conciliation Act,
                1996, with a sole arbitrator appointed by Talmade Apparels. The seat and venue of arbitration shall be Mumbai.
              </p>
            </section>

            {/* 14. Changes to Terms */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h3>
              <p>
                We reserve the right to revise these Terms of Use at any time. Continued use of the Website after
                changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            {/* 15. Severability */}
            <section>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">15. Severability</h3>
              <p>
                If any provision of these Terms is held to be unlawful or unenforceable, the remaining provisions
                shall remain valid and enforceable.
              </p>
            </section>



            {/* Last Updated */}
            <div className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
              <p className="mt-1">© 2026 Talmade Apparels Private Limited. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};