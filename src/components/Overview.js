const Overview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Bosh statistika kartalari */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-gray-600">Unresolved</h2>
          <p className="text-3xl font-bold text-gray-800">60</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center border border-blue-500">
          <h2 className="text-gray-600">Overdue</h2>
          <p className="text-3xl font-bold text-gray-800">16</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-gray-600">Open</h2>
          <p className="text-3xl font-bold text-gray-800">43</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-gray-600">On hold</h2>
          <p className="text-3xl font-bold text-gray-800">64</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2 border-b-2 border-yellow-400 inline-block">Today's trends</h3>
        <p className="text-gray-600 text-sm">as of 25 May 2019, 09:41 PM</p>

        <div className="mt-6">

        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Unresolved tickets</h3>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Waiting on Feature Request</span>
              <span className="text-gray-600">4238</span>
            </li>
            <li className="flex justify-between">
              <span>Awaiting Customer Response</span>
              <span className="text-gray-600">1005</span>
            </li>
            <li className="flex justify-between">
              <span>Awaiting Developer Fix</span>
              <span className="text-gray-600">914</span>
            </li>
            <li className="flex justify-between">
              <span>Pending</span>
              <span className="text-gray-600">281</span>
            </li>
          </ul>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Tasks</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Finish ticket update</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">URGENT</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Create new ticket example</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">NEW</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Update ticket report</span>
              <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">DEFAULT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
