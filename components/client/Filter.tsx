"use client";

import { useState, useEffect, useRef } from "react";
import { GrFormClose } from "react-icons/gr";

const Filter = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const filterButtonRef = useRef(null);
  const filterDropdownRef = useRef(null);
  const filterSelectedRef = useRef(null);

  const handleFilterOpen = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterClick = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(
        selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      );
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
    setFilterOpen(true); // Set filterOpen to true when a size is clicked
  };

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(
        selectedSizes.filter((selectedSize) => selectedSize !== size)
      );
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
    setFilterOpen(true); // Set filterOpen to true when a size is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;

      if (
        !filterButtonRef.current.contains(target) &&
        !filterDropdownRef.current.contains(target) &&
        !filterSelectedRef.current.contains(target) &&
        !target.classList.contains("close-button") &&
        !target.classList.contains("size") &&
        !target.classList.contains("selected") &&
        filterOpen // Add this condition to check if the filter is open
      ) {
        setFilterOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filterOpen]); // Add filterOpen as a dependency to useEffect

  return (
    <div className="filters-main">
      <div className="filters-container">
        <div
          className="filters-button"
          onClick={handleFilterOpen}
          ref={filterButtonRef}
        >
          <p>Filters</p>
          <div className={`filters-open-close ${filterOpen ? "rotate" : ""}`}>
            +
          </div>
        </div>
        <div className="filters-selected" ref={filterSelectedRef}>
          {selectedFilters.map((filter) => (
            <div key={filter} className="selected-filter">
              <p>{filter}</p>
              <button
                className="close-button"
                onClick={() => handleFilterClick(filter)}
              >
                <GrFormClose size="10px" />
              </button>
            </div>
          ))}
          {selectedSizes.map((size) => (
            <div key={size} className="selected-size">
              <p>{size}</p>
              <button
                className="close-button"
                onClick={() => handleSizeClick(size)}
              >
                <GrFormClose size="10px" />
              </button>
            </div>
          ))}
        </div>
        <div
          className={`filters-dropdown ${filterOpen ? "filter-Open" : ""}`}
          ref={filterDropdownRef}
        >
          <div className="filter" onClick={() => handleFilterClick("Solid")}>
            <p>Solid</p>
            <div
              className={`selected ${
                selectedFilters.includes("Solid") ? "active" : ""
              }`}
            >
              {selectedFilters.includes("Solid") ? "-" : "+"}
            </div>
          </div>
          <div className="filter" onClick={() => handleFilterClick("Stripes")}>
            <p>Stripes</p>
            <div
              className={`selected ${
                selectedFilters.includes("Stripes") ? "active" : ""
              }`}
            >
              {selectedFilters.includes("Stripes") ? "-" : "+"}
            </div>
          </div>
          <div className="filter" onClick={() => handleFilterClick("Printed")}>
            <p>Printed</p>
            <div
              className={`selected ${
                selectedFilters.includes("Printed") ? "active" : ""
              }`}
            >
              {selectedFilters.includes("Printed") ? "-" : "+"}
            </div>
          </div>
          <div className="sizes">
            <div
              className="size-container"
              onClick={() => handleSizeClick("S")}
            >
              <div
                className={`size ${
                  selectedSizes.includes("S") ? "active" : ""
                }`}
              >
                S
              </div>
              <div className="selected">+</div>
            </div>
            <div
              className="size-container"
              onClick={() => handleSizeClick("M")}
            >
              <div
                className={`size ${
                  selectedSizes.includes("M") ? "active" : ""
                }`}
              >
                M
              </div>
              <div className="selected">+</div>
            </div>
            <div
              className="size-container"
              onClick={() => handleSizeClick("L")}
            >
              <div
                className={`size ${
                  selectedSizes.includes("L") ? "active" : ""
                }`}
              >
                L
              </div>
              <div className="selected">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
