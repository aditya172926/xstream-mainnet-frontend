import React from "react";

function DashboardHeader({ isConnected }) {
    if (isConnected) {
        return (
            <h1 className="super-token">Super Token</h1>
        );
    }
    return (
        <div className="db-sub">
            <h1>Connect to XStream</h1>
            <p>Connect your wallet or take a look around!</p>
        </div>
    );
}

export default DashboardHeader;