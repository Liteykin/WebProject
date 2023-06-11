import { createSignal, onCleanup } from "solid-js";

function Calendar() {
    const [date, setDate] = createSignal(new Date());
    const [selectedDate, setSelectedDate] = createSignal<Date | null>(null);
    const [events, setEvents] = createSignal<{ [date: string]: string[] }>({});
    const [eventInput, setEventInput] = createSignal("");
    const [showModal, setShowModal] = createSignal(false);
    const [hoveredEvent, setHoveredEvent] = createSignal<string | null>(null);
    const [eventPopupPos, setEventPopupPos] = createSignal({ top: 0, left: 0 });

    const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysInMonth = (month: number, year: number): number =>
        new Date(year, month, 0).getDate();

    const handleDateClick = (day: number): void => {
        setSelectedDate(new Date(date().getFullYear(), date().getMonth(), day));
        setShowModal(true);
    };

    const isToday = (day: number): boolean => {
        const today = new Date();
        return (
            date().getFullYear() === today.getFullYear() &&
            date().getMonth() === today.getMonth() &&
            day === today.getDate()
        );
    };

    const handleEventInputChange = (event: Event): void => {
        const target = event.target as HTMLInputElement;
        setEventInput(target.value);
    };

    const handleAddEvent = (): void => {
        if (eventInput().trim() !== "") {
            const currentDate = new Date(date().getFullYear(), date().getMonth(), selectedDate()!.getDate());
            const key = currentDate.toISOString().split("T")[0];
            const updatedEvents = { ...events() };
            updatedEvents[key] = [...(updatedEvents[key] || []), eventInput()];
            setEvents(updatedEvents);
            setEventInput("");
            setShowModal(false);
        }
    };

    const handleCancelAddEvent = (): void => {
        setEventInput("");
        setShowModal(false);
    };

    const handleEventMouseEnter = (event: string, eventEl: HTMLElement): void => {
        setHoveredEvent(event);
        const rect = eventEl.getBoundingClientRect();
        setEventPopupPos({ top: rect.bottom, left: rect.left });
    };

    const handleEventMouseLeave = (): void => {
        setHoveredEvent(null);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === "Escape") {
            handleCancelAddEvent();
        }
    };

    onCleanup(() => {
        setEventInput("");
    });

    document.addEventListener("keydown", handleKeyDown);

    onCleanup(() => {
        document.removeEventListener("keydown", handleKeyDown);
    });

    return (
        <div class="w-[50vw] p-6 bg-white rounded-lg shadow-lg h-[60vh]">
            <div class="text-center text-3xl font-semibold text-gray-800 mb-6">
                {`${months[date().getMonth()]} ${date().getFullYear()}`}
            </div>
            <div class="grid grid-cols-7 gap-4 relative">
                {days.map((day) => (
                    <div class="text-center text-lg text-gray-600">{day}</div>
                ))}
                {[...Array(daysInMonth(date().getMonth() + 1, date().getFullYear())).keys()].map((day) => {
                    const currentDate = new Date(date().getFullYear(), date().getMonth(), day + 1);
                    const eventsForDay = events()[currentDate.toISOString().split("T")[0]] || [];

                    return (
                        <div class="flex flex-col items-center">
                            <div
                                class={`flex items-center justify-center text-center text-lg cursor-pointer h-16 w-16 rounded-full ${
                                    selectedDate() && selectedDate()?.getDate() === day + 1
                                        ? "bg-blue-500 text-white"
                                        : isToday(day + 1)
                                            ? "bg-yellow-300 text-gray-800"
                                            : "hover:bg-gray-200"
                                }`}
                                onClick={() => handleDateClick(day + 1)}
                            >
                                {day + 1}
                            </div>
                            <div class="mt-4 max-h-32 overflow-y-auto relative">
                                {eventsForDay.length > 0 ? (
                                    <ul class="text-sm">
                                        {eventsForDay.map((event, index) => (
                                            <li
                                                onMouseEnter={(eventEl) => handleEventMouseEnter(event, eventEl.target as HTMLElement)}
                                                onMouseLeave={handleEventMouseLeave}
                                                class={index === 0 && hoveredEvent() === event ? "relative" : ""}
                                            >
                                                {event}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p class="text-gray-400 italic">No events</p>
                                )}
                                {selectedDate() && selectedDate()?.getDate() === day + 1 && (
                                    <input
                                        type="text"
                                        class="mt-2 border border-gray-300 rounded p-2 w-full text-sm"
                                        placeholder="Add event"
                                        value={eventInput()}
                                        onInput={handleEventInputChange}
                                    />
                                )}
                            </div>
                            {hoveredEvent() && (
                                <div
                                    class="bg-gray-200 rounded-lg px-4 py-2 text-sm absolute bottom-full left-1/2 transform -translate-x-1/2"
                                >
                                    <span class="font-semibold">{hoveredEvent()}</span>
                                    <br />
                                    <span>Event details...</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            {showModal() && (
                <div class="fixed inset-0 flex items-center justify-center z-50">
                    <div class="bg-white rounded-lg shadow-lg p-6 w-[400px] transform transition-all duration-300">
                        <h2 class="text-xl font-semibold mb-4">Add Event</h2>
                        <label class="block mb-2">
                            <span class="text-gray-700">Title:</span>
                            <input
                                type="text"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={eventInput()}
                                onInput={handleEventInputChange}
                            />
                        </label>
                        <label class="block mb-2">
                            <span class="text-gray-700">From:</span>
                            <input
                                type="datetime-local"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </label>
                        <label class="block mb-4">
                            <span class="text-gray-700">To:</span>
                            <input
                                type="datetime-local"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </label>
                        <div class="flex justify-end">
                            <button
                                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
                                onClick={handleAddEvent}
                            >
                                Add
                            </button>
                            <button
                                class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                                onClick={handleCancelAddEvent}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calendar;
