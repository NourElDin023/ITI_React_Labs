import React from "react";

const FiltrationTabs = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <div className="btn-group mb-4 w-75">
            <a
                className={`btn btn-primary ${selectedFilter === "all" ? "active" : ""
                    }`}
                onClick={() => setSelectedFilter("all")}
                aria-current="page"
            >
                All
            </a>
            <a
                className={`btn btn-primary ${selectedFilter === "inProgress" ? "active" : ""
                    }`}
                onClick={() => setSelectedFilter("inProgress")}
            >
                In Progress
            </a>
            <a
                className={`btn btn-primary ${selectedFilter === "completed" ? "active" : ""
                    }`}
                onClick={() => setSelectedFilter("completed")}
            >
                Completed
            </a>
        </div>
    );
};

export default FiltrationTabs;
