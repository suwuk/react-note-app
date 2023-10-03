import React from "react";

function Header({ search,pencarian }) {
  function cariJudul(e) {
    search(e.target.value);
  }
  return (
    <>
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan..."
            value={pencarian}
            onChange={cariJudul}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
