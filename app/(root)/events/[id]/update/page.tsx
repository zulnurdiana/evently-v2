import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";

type updateEventProps = {
  params: {
    id: string;
  };
};

const updatePage = async ({ params: { id } }: updateEventProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper text-center h3-bold sm:text-left">
          Update Events
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          type="Update"
          userId={userId}
          event={event}
          eventId={event._id}
        />
      </div>
    </>
  );
};

export default updatePage;
