import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const pageData = {
  hasNavBar: true,
  hasBgSection: false,
};

function ContactPage() {
  const { phoneNumber, mobile, email } = useSiteMetadata();
  return (
    <Layout pageData={pageData}>
      <SEO title="Contact" />
      <section className="bg-primary px-10 md:px-32 py-4 md:py-8">
        <p className="font-lora-regular text-black text-2xl md:text-5xl py-3">
          Contact
        </p>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 mr-8">
            <p className="font-lora-regular text-primary text-xl pb-6">
              Give us a call
            </p>
            <p className="font-lora-regular text-black text-2xl md:text-4xl pb-3">
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>
            <p className="font-lora-regular text-black text-2xl md:text-4xl pb-3">
              <a href={`tel:${mobile}`}>{mobile}</a>
            </p>
            <p className="font-lora-regular text-primary text-xl">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className="w-full">
            <p className="font-lora-regular text-primary text-xl pb-6">
              Send us a message
            </p>

            <form
              className="contact-form"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="mb-4">
                <input
                  className="form-input fixed-input"
                  name="fullName"
                  id="input-full-name"
                  type="text"
                  placeholder="FULL NAME"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-input fixed-input"
                  name="email"
                  id="input-email"
                  type="email"
                  placeholder="EMAIL"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  className="form-input fixed-input"
                  name="phoneNumber"
                  id="input-phone-number"
                  type="text"
                  placeholder="PHONE NUMBER"
                />
              </div>

              <div className="mb-4 ">
                <textarea
                  name="message"
                  className="form-input h-48"
                  id="input-message"
                  type="text"
                  placeholder="MESSAGE"
                />
              </div>

              <button
                type="submit"
                className="py-4 px-12 uppercase bg-yellow text-secondary"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
