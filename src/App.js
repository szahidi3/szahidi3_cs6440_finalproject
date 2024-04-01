import React, { useState } from 'react';
import './App.css';
import Fuse from 'fuse.js';
import testdata from './testdata.json';
//var data = require('./icd10codes.json');
//var stuff = require('./fuse-index.json');
var data = {}

function App() {
  const [query, updateQuery] = useState('');
  const options = { keys: ['desc', 'code'], includeScore: false };
  const searchIndex = Fuse.createIndex(options.keys, data)
  if (query[0] === "a"){
    data = testdata
  } else{
    data = ''
  }
  const fuse = new Fuse(data, options, searchIndex);
  const results = fuse.search(query, {limit: 5});
  const codeResults = results.map(process => process.item);

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <>

      <header className="App-header">
        <div className="container">
          <h1>Search for ICD-10 Codes using CM Disease Description or HCPCS Process Name</h1>
        </div>
      </header>

      <main className="container">
        <ul className="data">
          {codeResults.map(process => {
            const {desc, code} = process;
            return (
              <li key={desc} className="process">
                <ul className="process-meta">
                  <li>
                    <strong>Disease or Process:</strong> { desc}
                  </li>
                  <li>
                    <strong>Code :</strong> { code }
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
        <aside>
          <form className="search">
            <label>Search</label>
            <input type="text" value={query} onChange={onSearch} />
          </form>
        </aside>
      </main>

      <footer>
        <div className="container">
          <p>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;