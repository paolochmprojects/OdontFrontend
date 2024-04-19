import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {

    return (<nav className="flex justify-between container p-6 items-center">        
        <div>
            <Link href="/" className="font-bebas text-3xl">Odontpro</Link>
        </div>
        <div className="flex items-center gap-2">
            <ModeToggle/>
            <Link href="/signin" className={buttonVariants({variant:'outline'})}>Ingresa</Link>
        </div>
    </nav>)
}

export default Navbar;