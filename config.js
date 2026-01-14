// =================================================================================================
// PAGE CONFIGURATION OBJECT
// This file defines all the dynamic content for the case study page.
// The `renderer.js` file reads this object to build the HTML.
// To change text, images, or other content, edit the values in this file.
// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
const config = {
  "globals": {
    "companyName": "Veronika  Zykova",
    "mainCTAButtonText": "Book A Discovery Call",
    "mainCTAButtonURL": "#contact",
    "primaryColor": "#e3c379",
    "accentColor": "#d9c6a2",
    "agents": [
      {
        "name": "Veronika Zykova",
        "imageSrc": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1766085828688-IMG_9717.jpg",
        "contactDetails": [
          {
            "type": "email",
            "value": "veronika@property.ca"
          },
          {
            "type": "phone",
            "value": "6473884686"
          }
        ]
      }
    ]
  },
  "header": {
    "tag": "CASE STUDY",
    "title": "How We Sold This 2-Bedroom Waterloo Loft in Just 16 Days—With 3 Competing Offers—When 5 Other Units Sat Unsold for Over 60 Days",
    "subheadline": "Sold in a Challenging Market With Strategic Pricing and Perfect Timing—Enabling a Smooth Relocation to Be Closer to Family"
  },
  "mainBox": {
    "summary": {
      "title": "How We Sold This 2-Bedroom Waterloo Loft in Just 16 Days—With 3 Competing Offers—When 5 Other Units Sat Unsold for Over 60 Days",
      "heroImage": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1768416391282-Screenshot 2026-01-14 at 1.41.38 PM.png"
      },
      "subTitle": "Summary",
      "paragraphs": [
        "Meet a savvy investor and soon-to-be part-time Toronto resident who owned two units in the same Waterloo building. She needed to sell one of them quickly to secure another property in Toronto and be closer to her aging mother—but the market conditions had her worried.",
        "Through professional service and market expertise, we delivered exceptional results for our client. <strong>SOLD IN JUST 16 DAYS</strong> while competing units languished unsold for over 60 days Generated an offer within the first 3 days on market, followed by <strong>3 COMPETING OFFERS</strong> in a single day after the second weekend <strong>RECEIVED MULTIPLE OFFERS OVER ASKING PRICE</strong>—giving the seller the power to choose not just the highest bidder, but the buyer with the best terms and conditions Negotiated fewer conditions and a closing date that perfectly aligned with her Toronto purchase, eliminating the domino-effect stress Final sale price of $750,000—strategically chosen by the seller based on superior terms, proving that the best offer isn't always about the highest number <strong>18 SHOWINGS IN 16 DAYS</strong> in a market where similar units were barely getting traffic"
      ]
    },
    "sidebar": {
      "title": "About {{companyName}}",
      "image": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1766085828688-IMG_9717.jpg"
      },
      "paragraphs": [
        "At {{companyName}} we provide professional real estate services with integrity, expertise, and dedication to our clients' success. Our experienced team combines market knowledge with personalized service to help you achieve your real estate goals. Whether you're buying, selling, or investing, we're here to guide you through every step of the process with transparency and results-driven strategies."
      ]
    }
  },
  "sections": [
    {
      "type": "standard",
      "title": "The Challenge",
      "paragraphs": [
        "Five other units in the same building had been sitting on the market for over 60 days with no success, creating doubt about whether a quick sale was even possible",
        "She was under serious time pressure: this sale was conditional for another property she was purchasing in Toronto, meaning every day counted",
        "The fear of underselling was real—she had a great product but didn't want to panic-price it too low, yet couldn't afford to have it sit on the market like the others",
        "The stakes were high: failing to sell quickly meant potentially losing her Toronto purchase and delaying her move closer to family"
      ]
    },
    {
      "type": "standard",
      "title": "The Strategy",
      "paragraphs": [
        "Conducted a comprehensive competitive analysis by physically touring every other listing in the building with her—identifying exactly why they weren't selling and how we could differentiate her unit",
        "Priced strategically at true market value ($759,000)—not artificially low to create false urgency, but positioned perfectly to reflect the superior features her loft offered compared to the competition",
        "Transformed the space by decluttering and staging it to showcase the open loft layout—using her second unit as storage to clear out excess furniture and let the 1,615 square feet breathe",
        "Invested in professional photography and videography that captured the loft's best features, then strategically marketed across MLS, Facebook, and condos.ca to reach serious buyers",
        "Created a seamless showing experience with prompt confirmations and a home that consistently showed in pristine condition—making buyers feel confident about the property from the moment they walked in"
      ],
      "testimonial": {
        "quote": "\"\"I would not put my life like this into anyone else's hands but Veronika's—she was such a strong support through the whole process. We had some stressful moments, and she continued to assure me that all would be fine, and in the end it was. She matched my energy perfectly and showed the experience and knowledge I needed during such a high-pressure situation.\"\"<br><span>— Satisfied Client</span>"
      }
    },
    {
      "type": "standard",
      "title": "The Solution",
      "paragraphs": [
        "From our first meeting, we connected on energy and approach. She saw that I wasn't just another agent pushing for a quick listing—I was patient, experienced, and genuinely invested in understanding her unique situation. When she realized I had a strategic plan to make her unit stand out from those five struggling listings, she knew she'd found the right partner to navigate this high-pressure sale."
      ],
      "image": {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1768416403730-Screenshot 2026-01-14 at 1.42.14 PM.png"
      }
    },
    {
      "type": "standard",
      "title": "The Results",
      "paragraphs": [
        "<strong>SOLD IN JUST 16 DAYS</strong> while competing units languished unsold for over 60 days",
        "Generated an offer within the first 3 days on market, followed by <strong>3 COMPETING OFFERS</strong> in a single day after the second weekend",
        "<strong>RECEIVED MULTIPLE OFFERS OVER ASKING PRICE</strong>—giving the seller the power to choose not just the highest bidder, but the buyer with the best terms and conditions",
        "Negotiated fewer conditions and a closing date that perfectly aligned with her Toronto purchase, eliminating the domino-effect stress",
        "Final sale price of $750,000—strategically chosen by the seller based on superior terms, proving that the best offer isn't always about the highest number",
        "<strong>18 SHOWINGS IN 16 DAYS</strong> in a market where similar units were barely getting traffic"
      ]
    },
    {
      "type": "standard",
      "title": "Conclusion",
      "paragraphs": [
        "<strong>Strategic pricing beats desperate pricing every time</strong>: Don't panic and go too low just because other properties aren't selling—position your home at true market value when you have a superior product and the right strategy",
        "<strong>Staging and presentation aren't optional luxuries</strong>: In a market where buyers have choices, the home that shows best wins—decluttering, professional photography, and creating breathing room can be the difference between 60+ days on market and selling in 16",
        "<strong>The best offer isn't always the highest number</strong>: When you create competition and work with an agent who understands negotiation, you gain the power to choose buyers based on terms, conditions, and reliability—not just who offers an extra few thousand dollars"
      ]
    },
    {
      "type": "ctaBanner",
      "ctaBannerContent": {
        "subhead": "Trusted By Hundreds Of Home Buyers & Sellers",
        "headline": "Get Your Personalized Market Positioning Strategy—Book a Free Home Assessment and discover exactly what your property needs to stand out and sell fast, even when the market feels uncertain.",
        "smallText": "Book A Discovery Call Now ➡️"
      }
    }
  ],
  "footer": {
    "logo": {
      "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1766085828688-IMG_9717.jpg"
    },
    "brokerageLabel": "Brokerage:",
    "brokerageName": "Property.ca",
    "brokerageAddress": "36 Distillery Lane Unit 500, Toronto, ON, M5A 3C4",
    "secondaryLogo": {
      "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/branding/logos/1752094988620-Property.ca-Logo.png"
    },
    "disclaimerText": "All testimonials on this page are from real clients. Their experiences do not guarantee similar results.<br>Individual results may vary based on location, market conditions, motivation, as well as other unforeseen factors. Your results may vary.",
    "privacyPolicy": {
      "text": "Privacy Policy",
      "href": "https://docs.google.com/document/d/e/2PACX-1vTjKmNELnVNP0k9KCchoXSN02kCMm4wjoxhmZ_z-mZER-GHCDOpI3YkrW4PHiW0LAjIOWLIoyCQnuJq/pub"
    }
  }
};

// Export for Node.js environment (if applicable) or set for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else if (typeof window !== 'undefined') {
  window.config = config;
}