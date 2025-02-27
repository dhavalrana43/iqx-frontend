// app/careers/training/TrainingPage.tsx
"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";

import { arloEventType } from "@/_types/events";

import SessionDropdown from "./_components/SessionDropdown";

interface TrainingPageProps {
  events: arloEventType[];
  groupedEvents: Record<string, arloEventType[]>;
}

const TrainingPage = ({
  events = [],
  groupedEvents = {},
}: TrainingPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [selectedMonth, setSelectedMonth] = useState("All months");
  const [selectedLocation, setSelectedLocation] = useState("All locations");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const categories = [
    "All categories",
    ...Array.from(
      new Set(
        events.flatMap((event) => event.Categories.map((cat) => cat.Name)),
      ),
    ),
  ];

  const months = ["All months", ...Object.keys(groupedEvents)];

  const locations = [
    "All locations",
    ...Array.from(
      new Set(events.map((event) => event.Location?.Name || "Online")),
    ),
  ];

  const filteredEvents = useMemo(() => {
    let filtered =
      selectedMonth !== "All months"
        ? groupedEvents[selectedMonth] || []
        : events;

    if (selectedCategory !== "All categories") {
      filtered = filtered.filter((event) =>
        event.Categories.some((cat) => cat.Name === selectedCategory),
      );
    }

    if (selectedLocation !== "All locations") {
      filtered = filtered.filter(
        (event) => event.Location?.Name === selectedLocation,
      );
    }

    return filtered;
  }, [
    events,
    groupedEvents,
    selectedMonth,
    selectedCategory,
    selectedLocation,
  ]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const formatDate = (date: string) => {
    const d = new Date(date);

    return d.toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "short",
    });
  };

  const formatPrice = (offers: arloEventType["AdvertisedOffers"]) => {
    if (!offers?.length) return "Contact for pricing";

    return offers[0].OfferAmount.FormattedAmountTaxExclusive + " excl. VAT";
  };

  const getDuration = (event: arloEventType) => {
    if (!event.Sessions?.length) return "1 day";
    const firstSession = event.Sessions[0];
    const start = new Date(firstSession.StartDateTime);
    const end = new Date(firstSession.EndDateTime);
    const days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24),
    );

    return days === 1 ? "1 day" : `${days} days`;
  };

  const renderEventCard = (event: arloEventType) => (
    <li key={event.EventID} className="border-l-4 border-blue-500 pl-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-2xl font-bold text-blue-500 mb-1">
            {formatDate(event.StartDateTime)}
          </div>
          <h2 className="text-xl font-semibold mb-2">
            <Link href={event.ViewUri}>{event.Name}</Link>
          </h2>
          <div className="text-sm mb-2">
            <span className="font-medium">{getDuration(event)}</span> •{" "}
            {event.Location?.Name || "Online"}
          </div>
        </div>
        {event.Sessions?.length > 0 && (
          <SessionDropdown sessions={event.Sessions} />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-blue-500 font-medium">
            {formatPrice(event.AdvertisedOffers)}
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="text-gray-600">
            {event.Summary || event.Description?.Text || ""}
          </p>
        </div>
      </div>

      <Link
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        href={event.RegistrationInfo?.RegisterUri ?? "#"}
        target={event.RegistrationInfo?.RegisterUri ? "_blank" : "_self"}
      >
        {event.RegistrationInfo?.RegisterMessage || "Register"}
      </Link>
    </li>
  );

  const renderMonthEvents = () => {
    if (selectedMonth !== "All months") {
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{selectedMonth}</h2>
          <ul className="space-y-8">
            {paginatedEvents.map((event) => renderEventCard(event))}
          </ul>
        </div>
      );
    }

    const paginatedGroupedEvents = paginatedEvents.reduce(
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

    return Object.entries(paginatedGroupedEvents).map(
      ([month, monthEvents]) => (
        <div key={month} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{month}</h2>
          <ul className="space-y-8">
            {monthEvents.map((event) => renderEventCard(event))}
          </ul>
        </div>
      ),
    );
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full py-16 lg:py-24 bg-white text-steel">
        <div className="container mx-auto">
          <div className="flex gap-4 mb-8">
            <select
              className="p-2 border rounded bg-white text-steel"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              className="p-2 border rounded bg-white text-steel"
              value={selectedMonth}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
                setCurrentPage(1);
              }}
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              className="p-2 border rounded bg-white text-steel"
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1);
              }}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => {
                setSelectedCategory("All categories");
                setSelectedMonth("All months");
                setSelectedLocation("All locations");
                setCurrentPage(1);
              }}
            >
              Reset
            </button>
          </div>

          <div className="mt-8">{renderMonthEvents()}</div>

          <div className="mt-8 flex justify-center gap-2">
            <button
              className="px-4 py-2 rounded bg-gray-100 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 2 && page <= currentPage + 2),
              )
              .map((page, i, array) => (
                <React.Fragment key={page}>
                  {i > 0 && array[i - 1] !== page - 1 && (
                    <span className="px-4 py-2">...</span>
                  )}
                  <button
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                </React.Fragment>
              ))}

            <button
              className="px-4 py-2 rounded bg-gray-100 disabled:opacity-50"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPage;
