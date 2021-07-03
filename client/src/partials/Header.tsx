import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Header(){
    return (
        <header className="">
            <div className="flex justify-between">
            <div className="py-4 border-t-4 border-transparent"><Link to="/" className="font-semibold">RPSSL</Link></div>

            <div>
                <ul className="flex space-x-6 text-sm">
                <li className="py-4 border-t-4 border-blue-500">
                    <Link to="/" className="font-medium text-txt-medium">Single Player</Link>
                </li>
                <li className="py-4 border-t-4 border-transparent">
                    <Link to="/multi" className="text-txt-low">Multi Player</Link>
                </li>
                </ul>
            </div>
            </div>
        </header>
    )
}