export function ProtectedRoute({ children }) {
    if (!localStorage.getItem("token")) {
        location.href = "/login";
        return null;
    }

    return children;
}

export function LogOut(){
    localStorage.removeItem("token");
    location.href = "/login";
}