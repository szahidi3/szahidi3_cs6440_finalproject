import React, { useState } from 'react';
import './App.css';
import Fuse from 'fuse.js';
import data_a from './data/icd10codes_a.json';
import data_b from './data/icd10codes_b.json';
import data_c from './data/icd10codes_c.json';
import data_d from './data/icd10codes_d.json';
import data_e from './data/icd10codes_e.json';
import data_f from './data/icd10codes_f.json';
import data_g from './data/icd10codes_g.json';
import data_h from './data/icd10codes_h.json';
import data_i from './data/icd10codes_i.json';
import data_j from './data/icd10codes_j.json';
import data_k from './data/icd10codes_k.json';
import data_l from './data/icd10codes_l.json';
import data_m from './data/icd10codes_m.json';
import data_n from './data/icd10codes_n.json';
import data_o from './data/icd10codes_o.json';
import data_p from './data/icd10codes_p.json';
import data_q from './data/icd10codes_q.json';
import data_r from './data/icd10codes_r.json';
import data_s from './data/icd10codes_s.json';
import data_t from './data/icd10codes_t.json';
import data_u from './data/icd10codes_u.json';
import data_v from './data/icd10codes_v.json';
import data_w from './data/icd10codes_w.json';
import data_x from './data/icd10codes_x.json';
import data_y from './data/icd10codes_y.json';
import data_z from './data/icd10codes_z.json';
//var data = require('./icd10codes.json');
//var stuff = require('./fuse-index.json');
var data = {}

function App() {
  const [query, updateQuery] = useState('');
  const options = { keys: ['desc', 'code'], includeScore: false };
  const searchIndex = Fuse.createIndex(options.keys, data)

  const fuse = new Fuse(data, options, searchIndex);
  const results = fuse.search(query, {limit: 5});
  const codeResults = results.map(process => process.item);
  if (query[0] === "b" || query[0] === "B"){
    data = data_b
  } else if (query[0] === "c" || query[0] === "C"){
    data = data_c
  } else if (query[0] === "d" || query[0] === "D"){
    data = data_d
  } else if (query[0] === "e" || query[0] === "E"){
    data = data_e
  } else if (query[0] === "f" || query[0] === "F"){
    data = data_f
  } else if (query[0] === "g" || query[0] === "G"){
    data = data_g
  } else if (query[0] === "h" || query[0] === "H"){
    data = data_h
  } else if (query[0] === "i" || query[0] === "I"){
    data = data_i
  } else if (query[0] === "j" || query[0] === "J"){
    data = data_j
  } else if (query[0] === "k" || query[0] === "K"){
    data = data_k
  } else if (query[0] === "l" || query[0] === "L"){
    data = data_l
  } else if (query[0] === "m" || query[0] === "M"){
    data = data_m
  } else if (query[0] === "n" || query[0] === "N"){
    data = data_n
  } else if (query[0] === "o" || query[0] === "O"){
    data = data_o
  } else if (query[0] === "p" || query[0] === "P"){
    data = data_p
  } else if (query[0] === "q" || query[0] === "Q"){
    data = data_q
  } else if (query[0] === "r" || query[0] === "R"){
    data = data_r
  } else if (query[0] === "s" || query[0] === "S"){
    data = data_s
  } else if (query[0] === "t" || query[0] === "T"){
    data = data_t
  } else if (query[0] === "u" || query[0] === "U"){
    data = data_u
  } else if (query[0] === "v" || query[0] === "V"){
    data = data_v
  } else if (query[0] === "w" || query[0] === "W"){
    data = data_w
  } else if (query[0] === "x" || query[0] === "X"){
    data = data_x
  } else if (query[0] === "y" || query[0] === "Y"){
    data = data_y
  } else if (query[0] === "z" || query[0] === "Z"){
    data = data_z
  } else{
    data = data_a
  }

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

      <main className="container2">
        <ul className="data">
          <form className="search">
            <label>Search</label>
            <input type="text" placeholder="Search for disease or HCPCS process..." value={query} onChange={onSearch} />
          </form>
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
      </main>
    </>
  );
}

export default App;