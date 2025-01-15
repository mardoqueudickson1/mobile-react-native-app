import { Client, Account, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.queucode.aora",
  projectId: "67870f7e002176cbcb04",
  databaseId: "678711820025aa57623f",
  usercollectionId: "678711ca000996c0446d",
  videoCollectionId: "67871211000a2c305d27",
  StorageId: "678714a8002bdb1063b7",
};

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = async (email, password, username) => {
  try {
    const newaccount = await account.create(
      ID.unique,
      email,
      password,
      username
    );
    if(!newaccount) throw new Error('User not created');
  } catch (error) {
    console.log(error);
    throw new error(error);
  }
};
