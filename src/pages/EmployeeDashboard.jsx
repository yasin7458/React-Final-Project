import { FaBars, FaBell, FaHome, FaCalendarPlus, FaHistory, FaWallet, FaUser, FaSignOutAlt, FaGraduationCap } from "react-icons/fa";
import { LogOut } from "../utils/validation";
import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeDashboard() {

    const requests = [
        { type: "Casual Leave", start: "12 Sep 2025", end: "13 Sep 2025", status: "Pending" },
        { type: "Sick Leave", start: "05 Sep 2025", end: "05 Sep 2025", status: "Approved" },
        { type: "Earned Leave", start: "20 Aug 2025", end: "22 Aug 2025", status: "Rejected" },
        { type: "Casual Leave", start: "15 Aug 2025", end: "15 Aug 2025", status: "Approved" }
    ];

    const menuItems = [
        { name: "Dashboard", icon: <FaHome /> },
        { name: "Apply Leave", icon: <FaCalendarPlus /> },
        { name: "My Leave History", icon: <FaHistory /> },
        { name: "Leave Balance", icon: <FaWallet /> },
        { name: "Profile", icon: <FaUser /> }
    ];

    const leaveBalances = [
        { name: "Casual Leave (CL)", used: 5, total: 7, color: "blue" },
        { name: "Sick Leave (SL)", used: 2, total: 5, color: "green" },
        { name: "Earned Leave (EL)", used: 7, total: 10, color: "teal" },
        { name: "Privilege Leave (PL)", used: 3, total: 5, color: "purple" }
    ];

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem("token"));

        if (loginUser) {
            (() => {
                axios.get(`http://localhost:3000/employees/${loginUser.id}`)
                    .then((res) => {
                        setUser(res.data);
                    });
            })();
        }
    }, []);


    return (
        <div className="employee-dashboard">

            <aside className="employee-sidebar">

                <div className="employee-brand">
                    <FaGraduationCap />
                    <span>LeavePro</span>
                </div>

                <div className="employee-menu">
                    {menuItems.map((item) => (
                        <div
                            className={`employee-menu-item ${item.name === "Dashboard" ? "active" : ""}`}
                            key={item.name}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <div
                    className="employee-menu-item employee-logout"
                    onClick={LogOut}
                >
                    <FaSignOutAlt />
                    <button className="bg-transparent rounded border-0 text-white">
                        Logout
                    </button>
                </div>

            </aside>

            <main className="employee-main">

                <header className="employee-header">

                    <FaBars className="employee-bars" />

                    <div className="employee-header-right">

                        <FaBell className="employee-bell" />

                        <div className="employee-user">
                            <div className="employee-avatar">
                                {user && <img src={user.image} alt={user.name} />}
                            </div>

                            <div>
                                <h6>{user && user.name}</h6>
                                <span>{user && user.role}</span>
                            </div>

                            <span className="employee-arrow">⌄</span>
                        </div>

                    </div>

                </header>

                <div className="employee-content">

                    <div className="employee-welcome">
                        <h2>Dashboard</h2>
                        <p>Welcome back, {user && user.name}</p>
                    </div>

                    <div className="row g-3 employee-stats">

                        <div className="col-6 col-xl-3">
                            <div className="employee-stat stat-blue">
                                <span>Total Leaves</span>
                                <h3>12</h3>
                            </div>
                        </div>

                        <div className="col-6 col-xl-3">
                            <div className="employee-stat stat-green">
                                <span>Used Leaves</span>
                                <h3>5</h3>
                            </div>
                        </div>

                        <div className="col-6 col-xl-3">
                            <div className="employee-stat stat-purple">
                                <span>Remaining Leaves</span>
                                <h3>7</h3>
                            </div>
                        </div>

                        <div className="col-6 col-xl-3">
                            <div className="employee-stat stat-orange">
                                <span>Pending Requests</span>
                                <h3>2</h3>
                            </div>
                        </div>

                    </div>

                    <div className="row g-3 employee-middle">

                        <div className="col-12 col-xl-5">

                            <div className="employee-card employee-balance">

                                <div className="employee-card-heading">
                                    <h5>Leave Balance</h5>
                                    <span>Current Year</span>
                                </div>

                                {leaveBalances.map((leave) => (
                                    <div className="employee-balance-item" key={leave.name}>

                                        <div className="employee-balance-info">
                                            <span>{leave.name}</span>
                                            <span>{leave.used} / {leave.total}</span>
                                        </div>

                                        <div className="progress employee-progress">
                                            <div
                                                className={`progress-bar employee-${leave.color === "teal" ? "teal" : leave.color === "purple" ? "purple-bar" : ""} ${leave.color === "blue" ? "bg-primary" : leave.color === "green" ? "bg-success" : ""}`}
                                                style={{ width: `${(leave.used / leave.total) * 100}%` }}
                                            ></div>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className="col-12 col-xl-7">

                            <div className="employee-card employee-recent">

                                <div className="employee-card-heading">
                                    <h5>Recent Leave Requests</h5>
                                    <span className="employee-view-all">View All</span>
                                </div>

                                <div className="table-responsive">

                                    <table className="table employee-table">

                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {requests.map((request, index) => (
                                                <tr key={index}>
                                                    <td>{request.type}</td>
                                                    <td>{request.start}</td>
                                                    <td>{request.end}</td>
                                                    <td>
                                                        <span className={`employee-status ${request.status.toLowerCase()}`}>
                                                            {request.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="employee-card employee-actions">

                        <h5>Quick Actions</h5>

                        <div className="row g-3">

                            <div className="col-12 col-md-6">
                                <button className="btn employee-primary-btn w-100">
                                    Apply Leave
                                </button>
                            </div>

                            <div className="col-12 col-md-6">
                                <button className="btn employee-secondary-btn w-100">
                                    View Leave History
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default EmployeeDashboard;
