import { useState } from "react";

const MiningForm = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // logic to start mining
  };

  const handleStopMining = () => {
    // logic to stop mining
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-96">
      <h2 className="text-lg font-medium mb-4">Start Mining</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block" htmlFor="publicKey">
            Public Key
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="publicKey"
            type="text"
            placeholder="Enter public key"
            value={publicKey}
            onChange={(e) => setPublicKey(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block" htmlFor="privateKey">
            Private Key
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="privateKey"
            type="text"
            placeholder="Enter private key"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg mr-4"
          type="submit"
        >
          Start Mining
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
          onClick={handleStopMining}
        >
          Stop Mining
        </button>
      </form>
    </div>
  );
};

export default MiningForm;