import React from 'react';
import PropTypes from 'prop-types'; // Importe PropTypes

const Filter = ({ filter, setFilter, sort, setSort }) => {
  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incompleted">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Dsc")}>Dsc</button>
        </div>
      </div>
    </div>
  );
}

// Adicione validação de propriedades usando PropTypes
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Filter;
