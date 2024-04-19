import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { HomeIcon } from "lucide-react"
import Link from "next/link"

const NotFoundPage = ()=>{
    return (
        <main className="flex flex-col flex-grow gap-5 items-center justify-center">
            <Image className="animate-bounce" src="/toothfail.png" width={200} height={300} alt="oj"/>
            <h2 className="font-bebas text-8xl">404</h2>
            <p>Página no encontra</p>
            <Link href="/"
                className={`${buttonVariants({variant: 'outline'})}`} 
                >
                    <HomeIcon height={20}/>
                    Ir al inicio
            </Link>
        </main>
    )
}

export default NotFoundPage