import { useState } from "react";
import { AccountForm } from "../components";

export default function Account() {
  const [wallet, setWallet] = useState({});

  const handleSubmit = (values) => {
    //   // Handle form submission here
    //   console.log(values);
    //   // Generate new wallet
    //   const wallet = Wmcoin.generateWallet(values.password);
    //   setWallet(wallet);
  };

  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="text-3xl font-bold mb-4">Account</h1>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Generate a new wallet</h2>
        <p className="text-gray-600 mb-4">
          Enter a password to generate a new wallet.
        </p>
        <AccountForm onSubmit={handleSubmit} />
        {/* {wallet.address && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Address:</span> {wallet.address}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Private Key:</span>{" "}
              {wallet.privateKey}
            </p>
          </div>
        )} */}
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Tips:</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            Store your private key in a safe place, such as a password manager
            or a physical vault.
          </li>
          <li className="mb-2">
            Do not share your private key with anyone, as it grants access to
            your wallet and funds.
          </li>
          <li className="mb-2">
            Use a strong password and enable two-factor authentication to
            protect your account.
          </li>
        </ul>
      </div>
    </div>
  );
}
