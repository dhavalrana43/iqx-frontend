// app/_service/contact.ts
import { gql } from "graphql-request";

import { graphqlClient, getAuthenticatedClient } from "@/_lib/graphql-client";
import {
  IMAGE_FRAGMENT,
  FOOTER_CTA_FRAGMENT,
  BUTTON_FRAGMENT,
  DETAILS_FRAGMENT,
  VARIANT_FRAGMENT,
} from "@/_graphql/fragments";

const CONTACT_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${BUTTON_FRAGMENT}
  ${DETAILS_FRAGMENT}
  ${VARIANT_FRAGMENT}

  query GetContactPage {
    contactPage {
      data {
        attributes {
          documentId
          title
          description
          slug
          theme {
            data {
              attributes {
                mainColor
                secondaryColor
              }
            }
          }
          heroBanner {
            title
            image {
              ...ImageFragment
            }
          }
          contactForm {
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
          contactInfo {
            contact {
              contactLink {
                title
                url
                icon {
                  ...ImageFragment
                }
              }
            }
          }
          footerCta {
            ...FooterCtaFragment
          }
        }
      }
    }
  }
`;

const CREATE_INQUIRY_MUTATION = gql`
  mutation CreateInquiry($data: InquiryInput!) {
    createInquiry(data: $data) {
      data {
        id
        attributes {
          key
          title
        }
      }
    }
  }
`;

export const getContactData = async () => {
  try {
    const response = await graphqlClient.request(CONTACT_QUERY);

    return (response as { contactPage: any }).contactPage;
  } catch (error) {
    throw error;
  }
};

export const saveContactFormData = async (data: any) => {
  try {
    const client = await getAuthenticatedClient();
    const formattedData = {
      key: data.key,
      origin: data.origin,
      title: data.title,
      data: JSON.stringify(data),
    };

    const response = await client.request(CREATE_INQUIRY_MUTATION, {
      data: formattedData,
    });

    return (response as { createInquiry: any }).createInquiry;
  } catch (error) {
    throw error;
  }
};
