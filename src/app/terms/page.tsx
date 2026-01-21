import TextPageLayout from "@/components/TextPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | BrandDragon",
};

export default function Terms() {
  return (
    <TextPageLayout title="Terms of Use" lastUpdated="January 1, 2026">
      <p>
        Welcome to BrandDragon! These terms and conditions outline the rules and regulations for the use of BrandDragon's Website.
        By accessing this website we assume you accept these terms and conditions. Do not continue to use BrandDragon if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2>License</h2>
      <p>
        Unless otherwise stated, BrandDragon and/or its licensors own the intellectual property rights for all material on BrandDragon. All intellectual property rights are reserved. You may access this from BrandDragon for your own personal use subjected to restrictions set in these terms and conditions.
      </p>
      <p>You must not:</p>
      <ul>
        <li>Republish material from BrandDragon</li>
        <li>Sell, rent or sub-license material from BrandDragon</li>
        <li>Reproduce, duplicate or copy material from BrandDragon</li>
        <li>Redistribute content from BrandDragon</li>
      </ul>

      <h2>User Obligations</h2>
      <p>
        You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        This website is provided "as is," with all faults, and BrandDragon express no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.
      </p>
      
      <h2>Limitation of Liability</h2>
      <p>
        In no event shall BrandDragon, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. BrandDragon, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
      </p>
    </TextPageLayout>
  );
}
