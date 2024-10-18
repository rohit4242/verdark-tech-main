import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gray-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
          This privacy policy outlines how our website uses and protects any
          information that you provide when using this site.
        </p>

        <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

        <p className="mb-4">We may collect the following information:</p>

        <ul className="list-disc list-inside mb-4">
          <li>Your name and contact information</li>
          <li>Demographic information</li>
          <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">How We Use the Information</h2>

        <p className="mb-4">
          We require this information to understand your needs and provide you
          with a better service, particularly for the following reasons:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>
            Sending promotional emails about new products, special offers, or
            other information that may interest you
          </li>
          <li>
            Occasionally, we may contact you for market research purposes using
            your information via email, phone, or mail. We may also use the
            information to customize the website according to your interests.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Security</h2>

        <p className="mb-4">
          We are committed to ensuring that your information is secure. To
          prevent unauthorized access or disclosure, we have implemented
          suitable physical, electronic, and managerial procedures to safeguard
          and secure the information we collect online.
        </p>

        <h2 className="text-2xl font-bold mb-2">Cookies</h2>

        <p className="mb-4">
          A cookie is a small file that asks permission to be placed on your
          computer's hard drive. Once you agree, the file is added, and the
          cookie helps analyze web traffic or informs you when you visit a
          specific site. Cookies allow web applications to respond to you as an
          individual by gathering and remembering information about your
          preferences.
        </p>

        <p className="mb-4">
          Overall, cookies help us provide you with a better website by enabling
          us to monitor which pages you find useful and which you do not. A
          cookie does not give us access to your computer or any information
          about you, other than the data you choose to share with us.
        </p>

        <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>

        <p className="mb-4">
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, we do not have any
          control over the other website. Therefore, we cannot be responsible
          for the protection and privacy of any information you provide while
          visiting such sites, which are not governed by this privacy statement.
          Please exercise caution and review the privacy statements applicable
          to the websites in question.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          Controlling Your Personal Information
        </h2>

        <p className="mb-4">
          You may choose to restrict the collection or use of your personal
          information in the following ways:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>
            If you have previously agreed to us using your personal information
            for direct marketing purposes, you may change your mind at any time
            by writing to or emailing us at vedarksouq@gmail.com.
          </li>
          <li>
            We will not sell, distribute, or lease your personal information to
            third parties unless we have your permission or are required by law
            to do so. We may use your personal information to send you
            promotional information about third parties that we think you may
            find interesting, should you express a desire for this.
          </li>
          <li>
            You may request details of personal information that we hold about
            you. If you would like a copy of the information held on you, please
            write to vedarksouq@gmail.com.
          </li>
          <li>
            If you believe that any information we are holding about you is
            incorrect or incomplete, please contact us as soon as possible at
            the above address. We will promptly correct any information found to
            be incorrect.
          </li>
        </ul>

        <p className="mb-4">
          This privacy policy is subject to change without notice.
        </p>
      </div>
    </div>
  );
};

export default page;
