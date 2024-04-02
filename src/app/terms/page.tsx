import React from 'react';

function TermsAndConditions() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="pt-40 text-3xl font-bold mb-4">Morgana Holdings, LLC Terms of Service</h1>
      <p>Last Updated: March 31, 2024</p>
      <p>Welcome to Morgana Holdings, LLC ("Morgana", "us", or "we")! These Terms of Service ("Terms") govern your access to and use of our website located at <a href="https://www.morganaholdings.com">https://www.morganaholdings.com</a> (the "Website"). By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use the Website.</p>

      <h2 className="text-xl font-bold mt-4">I. Use of the Website</h2>
      <ul className="list-disc ml-6">
        <li>You may access and use the Website for your personal, non-commercial purposes only.</li>
        <li>You may not use the Website for any illegal or unauthorized purpose, nor may you violate any laws in your jurisdiction by using the Website.</li>
        <li>You agree not to interrupt or attempt to interrupt the operation of the Website in any way.</li>
        <li>You agree not to use any robot, spider, scraper, or other automated means to access the Website for any purpose without our express written permission.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">II. Intellectual Property</h2>
      <p>All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of Morgana or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use any content on the Website without our express written permission.</p>

      <h2 className="text-xl font-bold mt-4">III. Use of Cookies</h2>
      <p>We use cookies and similar tracking technologies ("Cookies") to collect and store certain information about you when you visit our website. Cookies are small data files that are placed on your device when you visit a website. They enable the website to remember your actions and preferences over time (such as login credentials, language preference, and font size).</p>
      {/* Types of cookies, PII collected through cookies, and other cookie-related information omitted for brevity */}

      <h2 className="text-xl font-bold mt-4">IV. Prohibited Activities</h2>
      <ul className="list-disc ml-6">
        <li>Scraping, crawling, or otherwise extracting data from the Website.</li>
        <li>Using any device, software, or routine to interfere or attempt to interfere with the proper working of the Website.</li>
        <li>Taking any action that imposes an unreasonable or disproportionately large load on the Website's infrastructure.</li>
        <li>Introducing any viruses, Trojan horses, worms, logic bombs, or other malicious code to the Website.</li>
        <li>Attempting to gain unauthorized access to, interfere with, damage, or disrupt any part of the Website, the server on which the Website is stored, or any server, computer system, or network connected to the Website.</li>
        <li>Violating any applicable laws or regulations.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">V. Disclaimer of Warranties</h2>
      <p>THE WEBSITE IS PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. MORGANA DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. MORGANA DOES NOT WARRANT THAT THE WEBSITE WILL BE AVAILABLE, UNINTERRUPTED, OR ERROR-FREE. MORGANA DOES NOT WARRANT THAT THE WEBSITE WILL BE SECURE, FREE OF VIRUSES OR OTHER MALICIOUS CODE, OR THAT THE RESULTS YOU OBTAIN FROM THE USE OF THE WEBSITE WILL BE ACCURATE OR RELIABLE.</p>

      <h2 className="text-xl font-bold mt-4">VI. Limitation of Liability</h2>
      <p>MORGANA SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF MORGANA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING OUT OF OR RELATING TO YOUR USE OF THE WEBSITE.</p>

      <h2 className="text-xl font-bold mt-4">VII. Binding Arbitration</h2>
      <p>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS TO LITIGATE IN COURT.</p>
      <p>Morgana and you agree to attempt to resolve any dispute arising out of or relating to these Terms or your use of the Website through good faith negotiation. If the parties are unable to resolve a dispute within fifteen (15) calendar days of written notice of the dispute, the dispute shall then be settled by binding arbitration in accordance with the following procedures:</p>
      <ul className="list-disc ml-6">
        <li>Mediation. Before resorting to arbitration, the parties agree to participate in a mediation conducted by a mutually agreeable neutral mediator in accordance with the rules of a reputable mediation service provider, such as the American Arbitration Association (AAA). The cost of the mediation shall be shared equally by the parties.</li>
        <li>Binding Arbitration. If the dispute is not resolved through mediation, or the parties elect not to participate in mediation, it shall be decided by binding arbitration. This arbitration will be governed by the Federal Arbitration Act ("FAA") with regard to procedural matters. However, the substantive law of the State of Texas, without regard to its conflict of law provisions, will apply to the underlying dispute. The arbitration shall be conducted in Dallas, Texas, by a single arbitrator appointed in accordance with the Rules of the American Arbitration Association ("AAA"). The decision of the arbitrator shall be final and binding on the parties hereto and may be enforced in any court of competent jurisdiction. You and Morgana agree that any arbitration under these Terms shall be conducted on an individual basis and not in a class action proceeding.</li>
        <li>YOU WAIVE YOUR RIGHT TO A TRIAL BY JURY IN ANY DISPUTE ARISING OUT OF, OR RELATING TO, THESE TERMS OR YOUR USE OF THE WEBSITE.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">VIII. Termination</h2>
      <p>We may terminate your access to the Website at any time, without notice, for any reason, including, but not limited to, your violation of these Terms.</p>

      <h2 className="text-xl font-bold mt-4">IX. Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.</p>

      <h2 className="text-xl font-bold mt-4">X. Entire Agreement</h2>
      <p>These Terms constitute the entire agreement between you and Morgana with respect to your use of the Website and supersede all prior or contemporaneous communications and proposals, whether oral or written.</p>

      <h2 className="text-xl font-bold mt-4">XI. Severability</h2>
      <p>If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.</p>

      <h2 className="text-xl font-bold mt-4">XII. Changes to the Terms</h2>
      <p>We may revise these Terms at any time by posting the revised Terms on the Website.</p>
    </div>
  );
}

export default TermsAndConditions;
