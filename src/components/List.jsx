import React, { useState } from "react";

export default function ReactList({ records }) {
  const [region, setRegion] = useState("all");
  const regions = ["all", ...new Set(records.map((r) => r.region))];
  const filtered = region === "all" ? records : records.filter((r) => r.region === region);

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">地域で絞り込み</label>
        <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)} >
          {regions.map((reg) => (
            <option key={reg} value={reg}>
              {reg === "all" ? "すべて" : reg}
            </option>
          ))}
        </select>
      </div>

      <table className="table table-striped text-start">
        <thead>
          <tr>
            <th>ID</th>
            <th>国名</th>
            <th>首都</th>
            <th>人口</th>
            <th>地域</th>
            <th>通貨</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.capital}</td>
              <td>{row.population}</td>
              <td>{row.region}</td>
              <td>{row.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
