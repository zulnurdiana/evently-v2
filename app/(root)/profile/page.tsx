import { Button } from "@/components/ui/button";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { auth } from "@clerk/nextjs";
import { getEventsByUser } from "@/lib/actions/event.action";

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button size={"lg"} asChild>
            <Link href={"/#events"} className="button hidden sm:flex">
              Explore More Events
            </Link>
          </Button>
        </div>
      </section>
      {/* <section className="wrapper py-8">
        <Collection
          data={events?.data}
          emptyTitle={"No events ticket purchase yet"}
          emptyStateSubtext={
            "No worries - plenty of exciting events to explore!"
          }
          collectionType={"My_Tickets"}
          limit={3}
          page={1}
          urlParamName="odersPage"
          totalPage={2}
        />
      </section> */}
      {/* Event Organized */}
      <section className="bg-primary-50 bg-bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button size={"lg"} asChild>
            <Link href={"/events/create"} className="button hidden sm:flex">
              Create New Events
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper py-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle={"No events have been created yet"}
          emptyStateSubtext={"Go create some now"}
          collectionType={"Events_Organized"}
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPage={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
