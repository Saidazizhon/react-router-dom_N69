const tickets = [
  { id: 1, title: "Contact Email not Linked", customer: "Tom Cruise", date: "May 26, 2019", priority: "HIGH" },
  { id: 2, title: "Adding Images to Featured Posts", customer: "Matt Damon", date: "May 26, 2019", priority: "LOW" },
  { id: 3, title: "When will I be charged this month?", customer: "Robert Downey", date: "May 26, 2019", priority: "HIGH" },
  { id: 4, title: "Payment not going through", customer: "Christian Bale", date: "May 25, 2019", priority: "NORMAL" },
  { id: 5, title: "Unable to add replies", customer: "Henry Cavil", date: "May 25, 2019", priority: "HIGH" },
  { id: 6, title: "Downtime since last week", customer: "Chris Evans", date: "May 25, 2019", priority: "NORMAL" },
  { id: 7, title: "Referral Bonus", customer: "Sam Smith", date: "May 25, 2019", priority: "LOW" },
  { id: 8, title: "How do I change my password?", customer: "Steve Rogers", date: "May 24, 2019", priority: "NORMAL" },
];

const Tickets = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">All Tickets</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-600 bg-gray-100 border-b">
                <th className="p-4">Ticket details</th>
                <th className="p-4">Customer name</th>
                <th className="p-4">Date</th>
                <th className="p-4">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-medium text-gray-800">{ticket.title}</td>
                  <td className="p-4 text-gray-600">{ticket.customer}</td>
                  <td className="p-4 text-gray-500">{ticket.date}</td>
                  <td className="p-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        ticket.priority === "HIGH"
                          ? "bg-red-100 text-red-700"
                          : ticket.priority === "LOW"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
