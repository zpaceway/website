const udemyCertificates = [
  "https://www.udemy.com/certificate/UC-271eb566-9f42-4917-a786-1bf4e82852bb/",
  "https://www.udemy.com/certificate/UC-083b083d-c5df-415f-9d67-143d87f19396/",
  "https://www.udemy.com/certificate/UC-841ae892-1ccf-4dd5-a356-95d005e72727/",
  "https://www.udemy.com/certificate/UC-8675c722-ae5d-4120-99b1-af1172bcf8eb/",
  "https://www.udemy.com/certificate/UC-e8760b7a-2a33-498a-a6ad-db4e8b39ece2/",
  "https://www.udemy.com/certificate/UC-9377b37a-403d-4e13-9296-7c67b2abf0bb/",
  "https://www.udemy.com/certificate/UC-9e2c7806-e1fd-470f-a37b-b9b95fb61cdd/",
  "https://www.udemy.com/certificate/UC-529b4bff-e26f-4418-8eb2-781cad6cf8ab/",
  "https://www.udemy.com/certificate/UC-02bf0bc9-6ce5-4692-a612-41e57e044b8c/",
  "https://www.udemy.com/certificate/UC-0f7da458-f73e-4baa-bdfa-dcd5757dbc64/",
  "https://www.udemy.com/certificate/UC-ec3a132e-212c-44ec-b240-bfcb65e9ed1f/",
  "https://www.udemy.com/certificate/UC-c92e2e06-545e-443d-aded-c82d7e9c9a4a/",

  ,
];

const getCertificates = () => {
  return udemyCertificates.map(
    (certificateUrl) =>
      `https://udemy-certificate.s3.amazonaws.com/image/${certificateUrl
        ?.split("/")
        .at(-2)}.jpg`
  );
};

export { getCertificates };
