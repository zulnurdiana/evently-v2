import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

const createPage = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  console.log("User id nya adalah : ", userId);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper text-center h3-bold sm:text-left">
          Create Events
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default createPage;
