"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Particles from "@tsparticles/react"
import Link from "next/link"

const SignInPage = () => {
    return (<main className="flex container flex-grow justify-center items-center">
        <Particles/>
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle className="text-5xl font-bebas">Inicia sesion</CardTitle>
                <CardDescription>Ingresa con tus credenciales recuerda no pordras ingresar si tu cuenta no esta activa.</CardDescription>
            </CardHeader>
            <CardContent>
                <form id="signinForm">
                    <div className="grid w-full items-center gap-8">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Correo</Label>
                            <Input id="name" type="email" placeholder="tucorreo@odont.pro" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Contraseña</Label>
                            <Input id="password" type="password" placeholder="Super Secreto" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Link  href="/signup" className={buttonVariants({variant:"link"})} >¿No tienes cuenta?</Link>
                <Button form="signinForm">Enviar</Button>
            </CardFooter>
        </Card>
    </main>)
}

export default SignInPage;