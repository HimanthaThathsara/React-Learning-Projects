// import React, { useState } from 'react'

import { motion } from "framer-motion";
import Classes from "./style.module.css";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Your ideas, Our Responsibility</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we handle user data securely and responsibly."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://Apex Lanka.io/privacy-policy" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={Classes.hero}
      >
        <form>
          <h1>Privacy policy</h1>
          <div className={Classes.form_con}>
            <h5>
              At Apex Lanka, accessible from{" "}
              <a href="https://Apex Lanka.io" target="_blank">
                Apex Lanka.io
              </a>{" "}
              (the “Website”), one of our main priorities is the privacy of our
              visitors. This Privacy Policy contains types of information that
              is collected and recorded by Apex Lanka.io (“Apex Lanka”, “we” or
              “us”) and how we use it.
            </h5>
            <br />
            <h5>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us at{" "}
              <a href="/contact-us">support@Apex Lanka.io</a>.
            </h5>
            <br />
            <h5>
              This Privacy Policy relates to your access and use of our Website,
              including our solutions, software, tool, features or functionality
              in relation thereto (the “Services”).
            </h5>
            <br />
            <h5 className={Classes.major_title}>
              1. CHANGES TO THIS PRIVACY POLICY
            </h5>
            <br />
            <h5>
              We keep this Privacy Policy under regular review. This version was
              last updated on April 2nd, 2024. It is important that the Personal
              Data we hold about you is accurate and current. Please keep us
              informed if your Personal Data changes during your relationship
              with us.
            </h5>
            <br />

            <h5 className={Classes.major_title}>2. OUR OBLIGATIONS </h5>
            <br />
            <h5>
              We are the data controller, meaning we are responsible for
              deciding how we hold or use your personal information provided to
              us.
            </h5>
            <br />

            <h5 className={Classes.major_title}>
              3. TYPES OF DATA WE COLLECT{" "}
            </h5>
            <br />
            <h5>
              “Personal Data” means data that allows someone to identify you
              individually, including, for example, your name, email address, as
              well as any other non-public information about you that is
              associated with or linked to any of the foregoing. “Anonymous
              Data” means data, including aggregated and de-identified data,
              that is not associated with or linked to your Personal Data;
              Anonymous Data does not, by itself, permit the identification of
              individual persons. We collect Personal Data and Anonymous Data as
              described below.
            </h5>
            <br />

            <h5 className={Classes.major_title}>
              4. INFORMATION YOU PROVIDE US{" "}
            </h5>
            <br />
            <h5>
              When you use our Service, update your account profile, or contact
              us, we may collect Personal Data from you, such as email address,
              first and last name, user name, and other information you provide.
            </h5>
            <br />
            <h5>
              Our Service lets you store preferences like how your content is
              displayed, notification settings, and favorites. We may associate
              these choices with your ID, browser, or mobile device.{" "}
            </h5>
            <br />
            <h5>
              If you provide us with feedback or contact us, we will collect
              your name and contact information, as well as any other content
              included in the message.
            </h5>
            <br />
            <h5>
              We may also collect Personal Data at other points in our Service
              where you voluntarily provide it or where we state that Personal
              Data is being collected.
            </h5>
            <br />

            <h5 className={Classes.mini_title}>
              4.1) Information Collected through our Services{" "}
            </h5>
            <ol>
              <li>
                <h5>
                  As you navigate through and interact with our Service, we may
                  use automatic data collection technologies to collect certain
                  information about your equipment, browsing actions, and
                  patterns, including:
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>
              4.2) Information Collected by our servers{" "}
            </h5>
            <ol>
              <li>
                <h5>
                  We collected this information to provide our Service and make
                  it more useful to you, we (or a third-party service provider)
                  collect information from you, including, but not limited to,
                  your browser type, operating system, Internet Protocol (“IP”)
                  address, mobile device ID, and date/time stamps.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>4.3) Log Files </h5>
            <ol>
              <li>
                <h5>
                  We gather certain information automatically and store it in
                  log files. This information includes IP addresses, browser
                  type, Internet service provider (“ISP”), referring/exit pages,
                  operating system, date/time stamps, and clickstream data. We
                  use this information to analyze trends, administer the
                  Service, track users’ movements around the Service, and better
                  tailor our Services to our users’ needs.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>4.4) Cookies </h5>
            <ol>
              <li>
                <h5>
                  We may use both session Cookies (which expire once you close
                  your web browser) and persistent Cookies (which stay on your
                  computer until you delete them) to analyze how users interact
                  with our Service, make improvements to our product quality,
                  and provide users with a more personalized experience.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>4.5) Pixel Tag </h5>
            <ol>
              <li>
                <h5>
                  We use “Pixel Tags”. Pixel Tags allow us to analyze how users
                  find our Service, make the Service more useful to you, and
                  tailor your experience with us to meet your particular
                  interests and needs.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>4.6) Analytics Services </h5>
            <ol>
              <li>
                <h5>
                  Third Parties that we work with may set their own cookies or
                  similar tools when you visit our Service. Such Third Parties
                  may use information to compile reports on user activity, which
                  we may receive on an individual or aggregate basis. We use the
                  information to improve our Service. Each Third Party’s ability
                  to use and share information is restricted by such Third
                  Parties’ terms of use and privacy policy. By using our
                  Service, you consent to the processing of data about you by
                  Third Parties in the manner and for the purposes set out
                  above. All data is anonymized and aggregated and in accordance
                  with applicable data protection laws.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.major_title}>
              5. USE OF YOUR PERSONAL DATA{" "}
            </h5>
            <br />
            <h5>
              We process your Personal Data to run our business, provide the
              Service, personalize your experience on the Service, and improve
              the Service. Specifically, we use your Personal Data to:
            </h5>
            <br />
            <ol className={Classes.abc_ol}>
              <li>
                <h5>a. facilitate the creation of and secure your account.</h5>
              </li>
              <li>
                <h5>b. identify you as a user in our system.</h5>
              </li>
              <li>
                <h5>c. provide you with our Service.</h5>
              </li>
              <li>
                <h5>
                  d. improve the administration of our Service and quality of
                  experience when you interact with our Service.
                </h5>
              </li>
              <li>
                <h5>
                  e. provide customer support and respond to your requests and
                  inquiries.
                </h5>
              </li>
              <li>
                <h5>
                  f. investigate and address conduct that may violate our Terms
                  of Service.
                </h5>
              </li>
              <li>
                <h5>
                  g. detect, prevent, and address fraud, violations of our terms
                  or policies, and/or other harmful or unlawful activity.
                </h5>
              </li>
              <li>
                <h5>
                  h. send you a welcome email to verify ownership of the email
                  address provided when your account was created.
                </h5>
              </li>
              <li>
                <h5>
                  i. send you administrative notifications, such as security,
                  support, and maintenance advisories.
                </h5>
              </li>
              <li>
                <h5>
                  j. send you notifications related to actions on the Service.
                </h5>
              </li>
              <li>
                <h5>
                  k. send you newsletters, promotional materials, and other
                  notices related to our Services or third parties' goods and
                  services.
                </h5>
              </li>
              <li>
                <h5>
                  l. respond to your inquiries related to employment
                  opportunities or other requests.
                </h5>
              </li>
              <li>
                <h5>
                  m. comply with applicable laws, cooperate with investigations
                  by law enforcement or other authorities of suspected
                  violations of law, and/or to pursue or defend against legal
                  threats and/or claims.
                </h5>
              </li>
              <li>
                <h5>
                  n. act in any other way we may describe when you provide the
                  Personal Data.
                </h5>
              </li>
            </ol>
            <br />
            <h5>
              We may create Anonymous Data records from Personal Data. We use
              this Anonymous Data to analyze request and usage patterns so that
              we may improve our Services and enhance Service navigation. We
              reserve the right to use Anonymous Data for any purpose and to
              disclose Anonymous Data to third parties without restriction.
            </h5>
            <br />

            <h5 className={Classes.mini_title}>
              {" "}
              6. DISCLOSURE OF YOUR PERSONAL DATA{" "}
            </h5>
            <br />
            <h5>
              We disclose your Personal Data as described below and as described
              elsewhere in this Privacy Policy.
            </h5>
            <br />

            <h5 className={Classes.mini_title}>
              {" "}
              6.1) Third Party Service Providers{" "}
            </h5>
            <ol>
              <li>
                <h5>
                  We may share your Personal Data with third party service
                  providers to: provide technical infrastructure services;
                  conduct quality assurance testing; analyze how our Service is
                  used; prevent, detect, and respond to unauthorized activities;
                  provide technical and customer support; and/or to provide
                  other support to us and to the Service.
                </h5>
              </li>
            </ol>
            <br />
            <h5 className={Classes.mini_title}>6.2) Affiliates </h5>
            <ol>
              <li>
                <h5>
                  We may share some or all of your Personal Data with any
                  subsidiaries, joint ventures, or other companies under our
                  common control (“Affiliates”), in which case we will require
                  our Affiliates to honor this Privacy Policy.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>
              6.3) Corporate Restructuring{" "}
            </h5>
            <ol>
              <li>
                <h5>
                  We may share some or all of your Personal Data in connection
                  with or during negotiation of any merger, financing,
                  acquisition, or dissolution transaction or proceeding
                  involving sale, transfer, divestiture, or disclosure of all or
                  a portion of our business or assets. In the event of an
                  insolvency, bankruptcy, or receivership, Personal Data may
                  also be transferred as a business asset. If another company
                  acquires our company, business, or assets, that company will
                  possess the Personal Data collected by us and will assume the
                  rights and obligations regarding your Personal Data as
                  described in this Privacy Policy.
                </h5>
              </li>
            </ol>
            <br />
            <h5 className={Classes.mini_title}>6.4) Legal Rights </h5>
            <ol>
              <li>
                <h5>
                  Regardless of any choices you make regarding your Personal
                  Data (as described below), we may disclose Personal Data if we
                  believe in good faith that such disclosure is necessary: (a)
                  in connection with any legal investigation; (b) to comply with
                  relevant laws or to respond to subpoenas, warrants, or other
                  legal process served on us; (c) to protect or defend our
                  rights or property; and/or (d) to investigate or assist in
                  preventing any violation or potential violation of the law,
                  this Privacy Policy, or our Terms of Service.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.major_title}>
              7. YOUR CHOICES REGARDING INFORMATION{" "}
            </h5>
            <br />
            <h5>
              You have several choices regarding the use of information on our
              Services:
            </h5>
            <br />
            <h5 className={Classes.mini_title}>7.1) Email Communications </h5>
            <ol>
              <li>
                <h5>
                  We may periodically send you newsletters and/or emails that
                  directly promote the use of our Service or third parties’
                  goods and services. When you receive newsletters or
                  promotional communications from us, you may indicate a
                  preference to stop receiving these communications from us by
                  following the unsubscribe instructions provided in the email
                  you receive or by contacting us. Despite these preferences, we
                  may send you occasional transactional service-related
                  informational communications.
                </h5>
              </li>
              <li>
                <h5>
                  If you decide at any time that you no longer wish to accept
                  Cookies from our Service for any of the purposes described
                  above, then you can instruct your browser, by changing its
                  settings, to stop accepting Cookies or to prompt you before
                  accepting a Cookie from the websites you visit. Consult your
                  browser’s technical information. If you do not accept Cookies,
                  however, you may not be able to use all portions of the
                  Service or all functionality of the Service.
                </h5>
              </li>
            </ol>
            <br />
            <h5 className={Classes.mini_title}>
              7.2) Data Access and Control{" "}
            </h5>
            <ol>
              <li>
                <h5>
                  You may contact us to delete all of your data. If you are a
                  user in the European Economic Area or United Kingdom, you have
                  certain rights under the respective European and UK General
                  Data Protection Regulations (“GDPR”). These include the right
                  to (i) request access and obtain a copy of your personal data;
                  (ii) request rectification or erasure; (iii) object to or
                  restrict the processing of your personal data; and (iv)
                  request portability of your personal data. Additionally, if we
                  have collected and processed your personal data with your
                  consent, you have the right to withdraw your consent at any
                  time.
                </h5>
              </li>
              <li>
                <h5>
                  If you are a California resident, you have certain rights
                  under the California Consumer Privacy Act (“CCPA”). These
                  include the right to (i) request access to, details regarding,
                  and a copy of the personal information we have collected about
                  you and/or shared with third parties; (ii) request deletion of
                  the personal information that we have collected about you; and
                  (iii) the right to opt-out of sale of your personal
                  information. As the terms are defined under the CCPA, we do
                  not “sell” your “personal information.”
                </h5>
              </li>
              <li>
                <h5>
                  If you wish to exercise your rights under the GDPR, CCPA, or
                  other applicable data protection or privacy laws, please
                  contact us at <a href="/contact-us">support@Apex Lanka.io</a>{" "}
                  , and reference the applicable law. We may ask you to verify
                  your identity, or ask for more information about your request.
                  We will consider and act upon any above request in accordance
                  with applicable law. We will not discriminate against you for
                  exercising any of these rights.
                </h5>
              </li>
            </ol>
            <br />
            <h5 className={Classes.mini_title}>7.3) Data Retention </h5>
            <br />
            <ol>
              <li>
                <h5>
                  We may retain your Personal Data as long as you continue to
                  use the Service, have an account with us, or for as long as is
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy. We may continue to retain your Personal Data even
                  after you deactivate your account and/or cease to use the
                  Service if such retention is reasonably necessary to comply
                  with our legal obligations, to resolve disputes, prevent fraud
                  and abuse, enforce our Terms or other agreements, and/or
                  protect our legitimate interests. Where your Personal Data is
                  no longer required for these purposes, we will delete it.
                </h5>
              </li>
            </ol>
            <br />

            <h5 className={Classes.mini_title}>7.4) Data Protection </h5>
            <br />
            <ol>
              <li>
                <h5>
                  We care about the security of your information and use
                  physical, administrative, and technological safeguards to
                  preserve the integrity and security of information collected
                  through our Service. However, no security system is
                  impenetrable and we cannot guarantee the security of our
                  systems. In the event that any information under our custody
                  and control is compromised as a result of a breach of
                  security, we will take steps to investigate and remediate the
                  situation and, in accordance with applicable laws and
                  regulations, notify those individuals whose information may
                  have been compromised.
                </h5>
              </li>
              <li>
                <h5>
                  Users Outside of the United States. If you are a non-U.S. user
                  of the Service, by visiting the Service and providing us with
                  data, you acknowledge and agree that your Personal Data may be
                  processed for the purposes identified in the Privacy Policy.
                  In addition, your Personal Data may be processed in the
                  country in which it was collected and in other countries,
                  including the United States, where laws regarding processing
                  of Personal Data may be less stringent than the laws in your
                  country. By providing your Personal Data, you consent to such
                  transfer.
                </h5>
              </li>
            </ol>
            <br />
            <h5 className={Classes.major_title}>8. CHILDREN’S INFORMATION </h5>
            <br />
            <ol>
              <li>
                <h5>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                </h5>
              </li>
              <li>
                <h5>
                  Apex Lanka does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </h5>
              </li>
            </ol>
            <br />
            <h5 className={Classes.major_title}>9. LINKS </h5>
            <br />
            <h5>
              {" "}
              Our website may contain links to websites operated by third
              parties. Those links are provided for convenience and may not
              remain current or be maintained. Unless expressly stated
              otherwise, we are not responsible for the privacy practices of, or
              any content on, those linked websites, and have no control over or
              rights in those linked websites. The privacy policies that apply
              to those other websites may differ substantially from our Privacy
              Policy, so we encourage individuals to read them before using
              those websites.
            </h5>
            <br />

            <h5 className={Classes.major_title}>
              10. ACCESSING YOUR INFORMATION AND MAKING A COMPLAINT{" "}
            </h5>
            <br />
            <h5>
              You can access the personal information we hold about you by
              contacting us at <a href="/contact-us"> support@Apex Lanka.io </a>
              . Sometimes, we may not be able to provide you with access to all
              of your personal information and, where this is the case, we will
              tell you why. We may also need to verify your identity when you
              request your personal information. If you think that any personal
              information we hold about you is inaccurate, please contact us and
              we will take reasonable steps to ensure that it is corrected.
            </h5>
            <br />
          </div>
        </form>
      </motion.div>
    </>
  );
}

export default PrivacyPolicy;
