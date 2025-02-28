import { graphqlClient } from "@/_lib/graphql-client";
import { ContactFormResponse } from "@/_types/contact-us-form";

const CONTACT_FORM_MUTATION = `
  mutation CreateContactFormSubmission(
    $title: String!
    $key: String!
    $origin: String!
    $data: JSON!
  ) {
    createContactFormSubmission(
      data: {
        title: $title
        key: $key
        origin: $origin
        data: $data
      }
    ) {
      data {
        id
        attributes {
          createdAt
        }
      }
    }
  }
`;

export const saveContactFormData = async (variables: {
  title: string;
  key: string;
  origin: string;
  data: Record<string, any>;
}) => {
  try {
    const response = await graphqlClient.request<ContactFormResponse>(
      CONTACT_FORM_MUTATION,
      variables,
    );

    return response.createContactFormSubmission;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
