// app/_service/arlo.ts

import { arloEventType } from "@/_types/events";

interface ArloResponse {
  StartIndex: number;
  Count: number;
  NextPageUri: string;
  Items: arloEventType[];
}

async function fetchAllEvents(baseUrl: string) {
  let allEvents: arloEventType[] = [];
  let nextPageUrl: string | null = baseUrl;

  while (nextPageUrl) {
    const response = await fetch(nextPageUrl);

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data: ArloResponse = await response.json();

    allEvents = [...allEvents, ...data.Items];
    nextPageUrl = data.NextPageUri;
  }

  return allEvents;
}

export const fetchArloEvents = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_ARLO_EVENTS_URL;

  if (!baseUrl) throw new Error("NEXT_PUBLIC_ARLO_EVENTS_URL is not defined");

  const url = new URL(baseUrl);
  const currentDate = new Date();
  const oneYearFromNow = new Date();

  oneYearFromNow.setFullYear(currentDate.getFullYear() + 1);

  url.searchParams.append("startDate", currentDate.toISOString());
  url.searchParams.append("endDate", oneYearFromNow.toISOString());
  url.searchParams.append(
    "fields",
    "EventID,Name,StartDateTime,EndDateTime,Sessions,AdvertisedOffers,Summary,Description,Categories,Location,RegistrationInfo,ViewUri",
  );

  const allEvents = await fetchAllEvents(url.toString());
  const groupedByMonth = allEvents.reduce(
    (acc, event) => {
      const date = new Date(event.StartDateTime);
      const monthYear = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });

      if (!acc[monthYear]) acc[monthYear] = [];
      acc[monthYear].push(event);

      return acc;
    },
    {} as Record<string, arloEventType[]>,
  );

  return { events: allEvents, groupedEvents: groupedByMonth };
};
