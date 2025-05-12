import { auth, currentUser } from "@clerk/nextjs";

export const checkUser = async () => {
  try {
    const { userId } = auth();
    if (!userId) return null;

    const user = await currentUser();
    return {
      id: userId,
      email: user?.emailAddresses[0]?.emailAddress,
      firstName: user?.firstName,
      lastName: user?.lastName,
      imageUrl: user?.imageUrl,
      role: "USER", // You can extend this with your own role logic
    };
  } catch (error) {
    console.error("Error checking user:", error);
    return null;
  }
};
