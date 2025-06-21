import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import navalAssets from '../../data/naval'; // Giả sử bạn có file JSON chứa dữ liệu khí tài hải quân

export default function WeaponDetailPageNaval() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tìm khí tài theo id
  const asset = navalAssets.find(item => item.id === id);

  // Nếu không tìm thấy
  if (!asset) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl text-red-600 font-semibold">❌ Không tìm thấy khí tài với ID: {id}</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Quay về trang chủ
        </button>
      </div>
    );
  }

  // Giao diện chi tiết khí tài
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Ảnh và tên */}
      <img src={asset.image} alt={asset.name} className="w-full h-64 object-cover rounded-xl shadow" />
      <h1 className="text-3xl font-bold">{asset.name}</h1>
      <p className="text-lg text-gray-600">{asset.type} – {asset.country}</p>
      <p className="text-sm text-gray-500">Biên chế: {asset.commissioned} | Trạng thái: {asset.status}</p>

      {/* Thông số kỹ thuật */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🔧 Thông số kỹ thuật</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {Object.entries(asset.specs).map(([key, value]) => (
            <div key={key} className="flex justify-between border-b pb-1">
              <span className="text-gray-600 capitalize">{key.replace(/_/g, " ")}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Vũ khí trang bị */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🧨 Vũ khí trang bị</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {asset.armament.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>

      {/* Hệ thống cảm biến */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📡 Cảm biến & Điện tử</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {Object.entries(asset.sensors).map(([key, value]) => (
            <li key={key}><strong className="capitalize">{key}:</strong> {value}</li>
          ))}
        </ul>
      </section>

      {/* Lịch sử hoạt động */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📜 Lịch sử hoạt động</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {asset.history?.missions?.map((m, i) => <li key={i}>🚢 {m}</li>)}
          {asset.history?.notable_events?.map((e, i) => <li key={i}>📌 {e}</li>)}
        </ul>
      </section>

      {/* Media: Hình ảnh và video */}
      <section>
        <h2 className="text-xl font-semibold mb-2">🖼️ Thư viện</h2>
        <div className="grid grid-cols-2 gap-4">
          {asset.media?.images?.map((img, index) => (
            <img key={index} src={img} alt={`media-${index}`} className="rounded-lg object-cover h-40 w-full" />
          ))}
        </div>
        {asset.media?.videos?.length > 0 && (
          <div className="mt-4">
            <iframe
              title="video"
              width="100%"
              height="315"
              src={asset.media.videos[0]}
              className="rounded-xl"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </section>
    </div>
  );
}
