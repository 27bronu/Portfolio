import { useLocation } from "react-router-dom"

export function ErrorPage() {
    const location = useLocation();

    return (
        <div>
            <h2>404 - {location.pathname} not found!</h2>
        </div>
    )
}