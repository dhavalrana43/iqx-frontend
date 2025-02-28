// app\_service\common\fragments.ts
import { gql } from "graphql-request";

export const IMAGE_FRAGMENT = gql`
  fragment ImageFragment on UploadFileEntityResponse {
    data {
      attributes {
        url
        alternativeText
        height
        width
      }
    }
  }
`;

export const BUTTON_FRAGMENT = gql`
  fragment ButtonFragment on ComponentCommonButton {
    title
    url
    variant
    target
  }
`;

export const DETAILS_FRAGMENT = gql`
  fragment DetailsFragment on ComponentCommonDetails {
    title
    subHeading
    description
  }
`;

export const VARIANT_FRAGMENT = gql`
  fragment VariantFragment on ComponentCommonVariant {
    Variant
  }
`;

export const FOOTER_CTA_FRAGMENT = gql`
  fragment FooterCtaFragment on ComponentCommonFooterCta {
    details {
      title
      subHeading
      description
    }
    ctaImage {
      ...ImageFragment
    }
    ctaButton {
      ...ButtonFragment
    }
  }
`;

export const COMMON_BLOCKS_FRAGMENT = gql`
  fragment CommonBlocksFragment on BlocksDynamicZone {
    __typename
    ... on ComponentCommonCtaCard {
      details {
        ...DetailsFragment
      }
      ctaButton {
        ...ButtonFragment
      }
      image {
        ...ImageFragment
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonFacts {
      details {
        ...DetailsFragment
      }
      factCards {
        title
        value
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonTextWithFacts {
      title
      description
      facts {
        title
        value
      }
    }
    ... on ComponentCommonFaqs {
      details {
        ...DetailsFragment
      }
      faqs {
        question
        answer
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonFeatureSlider {
      title
      subTitle
      description {
        title
        description
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonFeaturesSection {
      fullWidth
      themeColor
      bigSize
      details {
        ...DetailsFragment
      }
      features {
        title
        description
        icon {
          ...ImageFragment
        }
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonFormSection {
      details {
        ...DetailsFragment
      }
      form {
        formFields {
          __typename
          ... on ComponentFormsInput {
            label
            name
            placeholder
            required
            type
          }
          ... on ComponentFormsTextarea {
            label
            name
            placeholder
            required
          }
          ... on ComponentFormsDropdown {
            label
            name
            placeholder
            required
            options {
              label
              value
            }
          }
        }
      }
      variant {
        ...VariantFragment
      }
      buttonVarient {
        ...VariantFragment
      }
      image {
        ...ImageFragment
      }
    }
    ... on ComponentCommonFullText {
      details {
        ...DetailsFragment
      }
      ctaButton {
        ...ButtonFragment
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonImageWithText {
      imageLeft
      showVideo
      videoUrl
      Highlight
      smallImageContainer
      image {
        ...ImageFragment
      }
      details {
        ...DetailsFragment
      }
      ctaButton {
        ...ButtonFragment
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonLeaderships {
      details {
        title
        subHeading
        description
      }
      leaderships {
        name
        designation
        url
        profile {
          ...ImageFragment
        }
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonOurThoughts {
      details {
        ...DetailsFragment
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonPartners {
      darkMode
      details {
        ...DetailsFragment
      }
      ctaButton {
        ...ButtonFragment
      }
      logos {
        ...ImageFragment
      }
    }
    ... on ComponentCommonProcess {
      title
      description
      steps {
        title
        description
      }
    }
    ... on ComponentCommonQuestionsSlider {
      details {
        ...DetailsFragment
      }
      question {
        title
        answer
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonServices {
      details {
        ...DetailsFragment
      }
      Services {
        title
        description
        icon {
          ...ImageFragment
        }
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonTestimonials {
      title
      description
      testimonial {
        quote
        name
        designation
        company
      }
      variant {
        ...VariantFragment
      }
    }
    ... on ComponentCommonVideoCta {
      videoUrl
      details {
        ...DetailsFragment
      }
      ctaButton {
        ...ButtonFragment
      }
      variant {
        ...VariantFragment
      }
    }
  }
`;
