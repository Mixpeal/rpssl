import {
    Link, NavLink
  } from "react-router-dom";

export default function Header(){
    return (
        <header className="">
            <div className="flex justify-between">
            <div className="py-4 border-t-4 border-transparent"><Link to="/" className="font-semibold">RPSSL</Link></div>

            <div>
                <ul className="flex space-x-6 text-sm">
                <li className="">
                    <NavLink exact to="/" className="block py-4 border-t-2 border-transparent" activeClassName="border-blue-500 font-medium text-txt-high">Single Player</NavLink>
                </li>
                <li className="">
                    <NavLink exact to="/multi" className="block py-4 border-t-2 border-transparent" activeClassName="border-blue-500 font-medium text-txt-high">Multi Player</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </header>
    )
}