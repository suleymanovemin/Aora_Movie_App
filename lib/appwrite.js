export const config = {
  endpoin: "https://cloud.appwrite.io/v1",
  platform: "com.app.aora",
  projectId: "668076190006bd37a066",
  databaseId: "66807767002db68a2c4c",
  usersCollectionId: "668077890029ac168660",
  videosCollectionId: "668077b000148aa0f7bd",
  storageId: "6680794b001b3b12c1b7",
};

import { Account, Client, ID } from "react-native-appwrite";
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoin) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
