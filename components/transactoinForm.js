import { useState } from "react";

function TransactionForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [gas, setGas] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/transaction/send", {
        from,
        to,
        amount,
        gas,
        privateKey,
      });

      setStatus("Transaction sent successfully!");
    } catch (error) {
      setStatus("Failed to send transaction");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center space-y-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="from"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            From
          </label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            placeholder="From"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="to"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            To
          </label>
          <input
            type="text"
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            placeholder="To"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Amount
          </label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Amount"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gas"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Gas
          </label>
          <input
            type="text"
            name="gas"
            value={gas}
            onChange={(e) => setGas(e.target.value)}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Gas"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="privateKey"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Private Key
          </label>
          <input
            type="password"
            name="privateKey"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            className="w-full px-3 py-2 leading-tight border rounded appearance-none focus:outline-none focus:shadow-outline"
            placeholder="Private Key"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <button
            type="submit"
            className="py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800"
          >
            Send Transaction
          </button>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Gas Price (Gwei):</span>
            <input
              type="text"
              className="w-16 px-2 py-1 bg-gray-200 rounded-md text-gray-600"
              placeholder="10"
            />
          </div>
          
        </div>
      </form>
    </div>
  );
}
export default TransactionForm;
