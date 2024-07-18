import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup = ({ order, handleOrderPopup }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          onClick={handleOrderPopup}
        >
          <FaTimes />
        </button>
        <h2 className="font-semibold text-xl mt-4">Order Confirmation</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          Terima kasih telah memesan buku dari Ajosh Book. Pesanan Anda sedang diproses.
        </p>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">Nama</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Nama Anda"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">Alamat</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Alamat Pengiriman"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-700 dark:text-gray-300">Metode Pembayaran</label>
            <select className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option value="credit_card">Kartu Kredit</option>
              <option value="bank_transfer">Transfer Bank</option>
              <option value="cash_on_delivery">Bayar di Tempat</option>
            </select>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200"
            >
              Konfirmasi Pesanan
            </button>
          </div>
        </form>
        <div className="mt-4">
          <button
            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200"
            onClick={handleOrderPopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;