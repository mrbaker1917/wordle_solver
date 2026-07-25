import React, { useState } from "react";

function getVisitCount() {
    if (typeof window === "undefined") return 0;
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    const newCount = initialCount + 1;
    localStorage.setItem("pageVisits", newCount);
    return newCount;
}

function Counter() {
    const [count] = useState(getVisitCount);

    return (
        <div className="counter">
            📊 You have visited this app <strong suppressHydrationWarning>{count}</strong> time{count !== 1 ? 's' : ''}!
        </div>
    );
}

export default Counter;
