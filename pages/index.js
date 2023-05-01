import axios from "axios";
import { Blocks, Transactions } from "@/constant";

const Home = ({ Blocks, Transactions }) => {
  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="text-3xl font-bold mb-8"> Transactions and Blocks</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4"> Transactions</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">From</th>
                <th className="px-4 py-2 text-left">To</th>
                <th className="px-4 py-2 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Transactions&&Transactions.map((transaction) => (
                <tr key={transaction.id} className="bg-gray-100">
                  <td className="border px-4 py-2">{transaction.from}</td>
                  <td className="border px-4 py-2">{transaction.to}</td>
                  <td className="border px-4 py-2">{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4"> Blocks</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Block Number</th>
                <th className="px-4 py-2 text-left">Timestamp</th>
                <th className="px-4 py-2 text-left">Number of Transactions</th>
              </tr>
            </thead>
            <tbody>
              {Blocks&&Blocks.map((block) => (
                <tr key={block.hash} className="bg-gray-100">
                  <td className="border px-4 py-2">{block.index}</td>
                  <td className="border px-4 py-2">{block.timestamp}</td>
                  <td className="border px-4 py-2">
                    {block.transactions.length}
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

export async function getServerSideProps() {
  const Blocks = await axios.get("http://localhost:3000/blocks").data;
  const Transactions = (await axios.get("http://localhost:3000/transactions"))
    .data;

  return {
    props: {
      Blocks,
      Transactions,
    },
  };
}

export default Home;
