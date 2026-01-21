import TextPageLayout from "@/components/TextPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BrandDragon",
};

export default function Privacy() {
  return (
    <TextPageLayout title="Privacy Policy" lastUpdated="January 1, 2026">
      <p>
        At BrandDragon, accessible from branddragon.com, one of our main priorities is the privacy of our visitors. 
        This Privacy Policy document contains types of information that is collected and recorded by BrandDragon and how we use it.
      </p>

      <h2>Data Collection</h2>
      <p>
        We collect several different types of information for various purposes to provide and improve our Service to you.
        Types of Data Collected include:
      </p>
      <ul>
        <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: Email address, First name and last name, Cookies and Usage Data.</li>
        <li><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
      </ul>

      <h2>Cookies and Web Beacons</h2>
      <p>
        Like any other website, BrandDragon uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
      </p>

      <h2>Third Party Privacy Policies</h2>
      <p>
        BrandDragon's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
      </p>

      <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
      <p>
        Under the CCPA, among other rights, California consumers have the right to:
        Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
        Request that a business delete any personal data about the consumer that a business has collected.
        Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
      </p>

      <h2>GDPR Data Protection Rights</h2>
      <p>
        We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
        The right to access – You have the right to request copies of your personal data.
        The right to rectification – You have the right to request that we correct any information you believe is inaccurate.
      </p>
    </TextPageLayout>
  );
}
